"use server";

// import { revalidatePath } from "next/cache";

import {
  ClientError,
  LeonardoGenerationJobResponse,
  LeonardoGenerationRequestBody,
  LeonardoGenerationResponse,
  LeonardoUserResponse,
  NetworkError,
  PresignedDetails,
  ServerError,
} from "./definitions";
import { supabase } from "./supabase";
const API_URL = "https://cloud.leonardo.ai/api/rest/v1";
const token = process.env.LEONARDO_API_TOKEN;

const getHeaders = (method: string) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return {
    method,
    headers,
  };
};

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status} - ${response.statusText}`
    );
  }
  return response.json();
};

const handleError = (err: unknown, contextMessage: string) => {
  if (
    err instanceof NetworkError ||
    err instanceof ServerError ||
    err instanceof ClientError
  ) {
    console.error(`${contextMessage}: Custom Error:`, err.message);
  } else if (err instanceof Error) {
    console.error(`${contextMessage}: Unexpected error:`, err.message);
  } else {
    console.error(`${contextMessage}: Unexpected error:`, err);
  }
  throw err;
};

const handleNoToken = (): null => {
  console.warn("LEONARDO_API_TOKEN is not defined. Returning null.");
  return null;
};

export async function getUserInformation(): Promise<LeonardoUserResponse | null> {
  if (!token) return handleNoToken();
  const options = getHeaders("GET");
  try {
    const response = await fetch(`${API_URL}/me`, options);
    const data = await handleResponse(response);
    return data.user_details[0];
  } catch (err) {
    return handleError(err, "Error fetching user information");
  }
}

export async function generateImages(
  body: LeonardoGenerationRequestBody
): Promise<LeonardoGenerationJobResponse | null> {
  if (!token) return handleNoToken();
  const options = { ...getHeaders("POST"), body: JSON.stringify(body) };
  try {
    const response = await fetch(`${API_URL}/generations`, options);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    return handleError(err, "Error generating images");
  }
}

export async function fetchGenerationsByUserId(userId: string): Promise<LeonardoGenerationResponse[] | null> {
  console.log(userId)
  try {
    // Perform a query to fetch generations by userId
    const { data, error } = await supabase
      .from('Generation')
      .select(`
        id,
        createdAt,
        generated_images,
        generation_elements,
        guidanceScale,
        imageHeight,
        imageWidth,
        inferenceSteps,
        initStrength,
        modelId,
        negativePrompt,
        photoReal,
        photoRealStrength,
        presetStyle,
        prompt,
        promptMagic,
        promptMagicStrength,
        promptMagicVersion,
        public,
        scheduler,
        sdVersion,
        seed,
        status,
        userId
      `)
      .eq('userId', userId)
      .limit(10);
    console.log('DB fetch complete')
    if (error) {
      console.error('Error fetching data:', error);
      throw error
    }
    return data;
  } catch (err) {
    return handleError(err, 'Error fetching generations by user ID');
  }
}

export async function fetchGeneration(
  generationId: string
): Promise<LeonardoGenerationResponse | null> {
  if (!token) return handleNoToken();
  const options = getHeaders("GET");
  try {
    const response = await fetch(
      `${API_URL}/generations/${generationId}`,
      options
    );
    const data = await handleResponse(response);
    // if (data.generations_by_pk?.status === "COMPLETE") {
    //   // Once new generation has come through, ensure that we fetch
    //   // updated generations on next page visit (not cached data).
    //   // Note: There appears to be a reported issue with revalidateTag/revalidatePath at present
    //   // whereby they trigger an immediate page reload rather than on next visit,
    //   // as per the docs: https://nextjs.org/docs/app/api-reference/functions/revalidateTag
    //   revalidatePath("/ai-generations", "layout");
    // }

    return data.generations_by_pk;
  } catch (err) {
    return handleError(err, "Error fetching generation");
  }
}

export async function deleteGeneration(
  generationId: string
): Promise<string | null> {
  if (!token) return handleNoToken();
  const options = getHeaders("DELETE");
  try {
    const response = await fetch(
      `${API_URL}/generations/${generationId}`,
      options
    );
    const data = await handleResponse(response);
    return data.delete_generations_by_pk?.id;
  } catch (err) {
    return handleError(err, "Error deleting generation");
  }
}

export async function generateRandomPrompt(): Promise<string | null> {
  if (!token) return handleNoToken();
  const options = getHeaders("POST");
  try {
    const response = await fetch(`${API_URL}/prompt/random`, options);
    const data = await handleResponse(response);
    return data.promptGeneration?.prompt;
  } catch (err) {
    return handleError(err, "Error generating random prompt");
  }
}

export async function improvePrompt(prompt: string): Promise<string | null> {
  if (!token) return handleNoToken();
  const options = { ...getHeaders("POST"), body: JSON.stringify({ prompt }) };
  try {
    const response = await fetch(`${API_URL}/prompt/improve`, options);
    const data = await handleResponse(response);
    return data.promptGeneration?.prompt;
  } catch (err) {
    return handleError(err, "Error improving prompt");
  }
}

export async function getPresignedUrl(): Promise<PresignedDetails | null> {
  if (!token) return handleNoToken();
  const options = {
    ...getHeaders("POST"),
    body: JSON.stringify({ extension: "jpg" }),
  };
  try {
    const response = await fetch(`${API_URL}/init-image`, options);
    const data = await handleResponse(response);
    return data.uploadInitImage;
  } catch (err) {
    return handleError(err, "Error improving prompt");
  }
}

export async function uploadImageViaPresignedURL(
  formData: FormData,
  url: string
) {
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed with status: ${response.status}`);
  }

  console.log(`Upload image via presigned URL: ${response.status}`);
}
