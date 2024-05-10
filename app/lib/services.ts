import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import {
  GenerationWithImagesResponse,
  LeonardoGenerationRequestBody,
  LeonardoGenerationResponse,
} from "./definitions";

export async function fetchImageGenerations(
  userId: string
): Promise<GenerationWithImagesResponse[]> {
  noStore();
  try {
    const data = await sql`
      SELECT g.*, i.id as imageId, i.generationId, i.url as imageUrl, i.likeCount, i.nsfw
      FROM generations g
      LEFT JOIN generated_images i ON g.id = i.generationId
      WHERE g.userId = ${userId}
      ORDER BY g.createdAt DESC;
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
          images: [],
        };
        generationMap.set(row.id, generation);
      }
      if (row.imageurl) {
        generation.images.push({
          id: row.imageid,
          generationId: row.generationid,
          url: row.imageurl,
          likeCount: row.likecount,
          nsfw: row.nsfw,
        });
      }
    }

    return Array.from(generationMap.values());
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch image generations.");
  }
}

export async function generateImages(body: LeonardoGenerationRequestBody) {
  const url = "/api/generations";
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export async function getGenerationsByUserId(userId: string): Promise<LeonardoGenerationResponse[] | null> {
  // To-do: remove localhost
  const url = `http://localhost:3000/api/generations/user/${userId}`;
  const options = {
    method: "GET",
    headers: { "content-type": "application/json" },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.generations;
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}

// NOTE: Before anyone goes judging me for polling this endpoint, let me just say:
// In an ideal world, I would use webhooks for getting the generated images but
// this requires a consistent callback url, which I cannot supply locally.
// Investigated using ngrok, for instance, which could tunnel traffic to my local server,
// but the url in that case would periodically reset/change, which is no bueno.
// While it is technically doable, I believe I would have to create a new Leonardo API key every time
// the url changed, which is impractical.
export async function fetchGeneration(generationId: string) {
  // To-do: remove localhost
  const url = `http://localhost:3000/api/generations/${generationId}`;
  const options = {
    method: "GET",
    headers: { accept: "application/json" },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
