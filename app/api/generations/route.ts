import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import {
  WebhookGenerationData,
  WebhookGenerationImage,
} from "@/app/lib/definitions";
import { supabase } from "@/app/lib/supabase";
import { revalidatePath } from "next/cache";

const WEBHOOK_API_KEY = process.env.VAN_GOGH_WEBHOOK_API_KEY;

export const POST = async (req: NextRequest) => {
  try {
    console.log("Request received");

    const authorizationHeader = req.headers.get("authorization");

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      console.log(
        "Unauthorized request: Missing or invalid Authorization header"
      );
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = authorizationHeader.slice(7);
    if (apiKey !== WEBHOOK_API_KEY) {
      console.log("Unauthorized request: Invalid API key");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Process the request if the API key is valid
    const data = await req.json();

    // Check if the data type is 'image_generation.complete'
    if (
      data.type === "image_generation.complete" &&
      data.object === "generation"
    ) {
      await handleGenerationComplete(data.data.object);
      return NextResponse.json(
        { message: "Webhook received and processed successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid webhook data" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 }
    );
  }
};

async function handleGenerationComplete(generation: WebhookGenerationData) {
  const transformedGeneration = transformWebhookData(generation);
  await insertGenerationIntoDatabase(transformedGeneration);
}

function transformWebhookData(generation: WebhookGenerationData) {
  console.log("transformWebhookData called");
  const mappedImages = generation.images?.map(
    (image: WebhookGenerationImage) => ({
      url: image.url,
      nsfw: image.nsfw,
      id: image.id,
      likeCount: image.likeCount,
      motionMP4URL: image.motionMP4URL,
      generated_image_variation_generics: [],
    })
  );

  const transformed = {
    id: generation.id,
    createdAt: generation.createdAt ? new Date(generation.createdAt) : null,
    generated_images: mappedImages,
    generation_elements: null, // Can flesh this out if/when elements are implemented
    guidanceScale: generation.guidanceScale,
    imageHeight: generation.imageHeight,
    imageWidth: generation.imageWidth,
    inferenceSteps: generation.inferenceSteps,
    initStrength: generation.initStrength,
    modelId: generation.modelId,
    negativePrompt: generation.negativePrompt,
    photoReal: generation.photoReal,
    photoRealStrength: generation.photoRealStrength,
    presetStyle: generation.presetStyle,
    prompt: generation.prompt,
    promptMagic: generation.promptMagic,
    promptMagicStrength: generation.promptMagicStrength,
    promptMagicVersion: generation.promptMagicVersion,
    public: generation.public,
    scheduler: generation.scheduler,
    sdVersion: generation.sdVersion,
    seed: generation.seed ? parseInt(generation.seed) : null,
    status: generation.status,
    userId: generation.userId,
  };
  return transformed;
}


async function insertGenerationIntoDatabase(generation: any) {
    console.log("Inserting into db")
    try {
      const { data, error } = await supabase
        .from('Generation')
        .insert([
          {
            id: generation.id,
            createdAt: generation.createdAt,
            generated_images: generation.generated_images,
            generation_elements: generation.generation_elements, // assuming this is already JSON or null
            guidanceScale: generation.guidanceScale,
            imageHeight: generation.imageHeight,
            imageWidth: generation.imageWidth,
            inferenceSteps: generation.inferenceSteps,
            initStrength: generation.initStrength,
            modelId: generation.modelId,
            negativePrompt: generation.negativePrompt,
            photoReal: generation.photoReal,
            photoRealStrength: generation.photoRealStrength,
            presetStyle: generation.presetStyle,
            prompt: generation.prompt,
            promptMagic: generation.promptMagic,
            promptMagicStrength: generation.promptMagicStrength,
            promptMagicVersion: generation.promptMagicVersion,
            public: generation.public,
            scheduler: generation.scheduler,
            sdVersion: generation.sdVersion,
            seed: generation.seed,
            status: generation.status,
            userId: generation.userId
          }
        ]);
        revalidatePath("/ai-generations")
      if (error) {
        console.error("Error inserting generation into database:", error);
        throw error;
      }
  
      return data; // returns inserted data
    } catch (err) {
      console.error("Database insertion failed:", err);
      throw err;
    }
  }
