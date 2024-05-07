import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { GenerationWithImagesResponse } from './definitions';

export async function fetchImageGenerations(userId: string): Promise<GenerationWithImagesResponse[]> {
  noStore();
  try {
    const data = await sql`
      SELECT g.*, i.id as imageId, i.generationId, i.url as imageUrl, i.likeCount, i.nsfw
      FROM generations g
      LEFT JOIN generated_images i ON g.id = i.generationId
      WHERE g.userId = ${userId};
    `;
    const generationMap = new Map<string, GenerationWithImagesResponse>();

    for (const row of data.rows) {
      let generation = generationMap.get(row.id);
      if (!generation) {
        generation = {
          id: row.id,
          userId: row.userid,
          createdAt: row.createdat,
          prompt: row.prompt,
          imageWidth: row.imagewidth,
          imageHeight: row.imageheight,
          modelId: row.modelid,
          status: row.status,
          public: row.public,
          presetStyle: row.presetstyle,
          photoReal: row.photoreal,
          scheduler: row.scheduler,
          sdVersion: row.sdversion,
          images: []
        };
        generationMap.set(row.id, generation);
      }
      if (row.imageurl) {
        generation.images.push({
          id: row.imageid,
          generationId: row.generationid,
          url: row.imageurl,
          likeCount: row.likecount,
          nsfw: row.nsfw
        });
      }
    }

    return Array.from(generationMap.values());
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch image generations.");
  }
}