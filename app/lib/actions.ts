"use server";

import { revalidatePath } from "next/cache";
import {
  ClientError,
  GenerationRow,
  LeonardoGenerationJobResponse,
  LeonardoGenerationRequestBody,
  LeonardoPresignedDetails,
  LeonardoUserResponse,
  NetworkError,
  ServerError,
} from "./definitions";
import { redirect } from "next/navigation";
import { AuthError } from "@supabase/supabase-js";
import { createServerClient } from "../utils/supabase/server";

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

// Supabase DB actions

export async function login(prevState: void | string, formData: FormData) {
  const supabaseServerClient = createServerClient();
  try {
    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const { error } = await supabaseServerClient.auth.signInWithPassword(credentials);

    if (error) {
      throw error; // Properly throw an error with the message
    }
    revalidatePath("/", "layout");
  } catch (error) {
    console.error(error);
    if (error instanceof AuthError) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
  redirect("/ai-generations");
}

export async function signup(prevState: void | string, formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  try {
    const supabaseServerClient = createServerClient();
    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { error } = await supabaseServerClient.auth.signUp(credentials);

    if (error) {
      throw error;
    }
  } catch (error) {
    if (error instanceof AuthError) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
  redirect("/ai-generations");
}

export async function signOut() {
  try {
    const supabaseServerClient = createServerClient();
    const { error } = await supabaseServerClient.auth.signOut();
    if (error) throw error;
  } catch (err) {
    console.error(err);
  }
  redirect("/auth");
}

export async function fetchGenerationsByUserId(
  userId: string
): Promise<GenerationRow[] | null> {
  try {
    const supabaseServerClient = createServerClient();
    const { data, error } = await supabaseServerClient
      .from("Generation")
      .select(
        `
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
      `
      )
      .eq("userId", userId)
      .order("createdAt", { ascending: false })
      .limit(10);
    if (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
    return data as GenerationRow[];
  } catch (err) {
    return handleError(err, "Error fetching generations by user ID");
  }
}

export async function deleteGeneration(
  generationId: string
): Promise<string | null> {
  try {
    const supabaseServerClient = createServerClient();
    const { error } = await supabaseServerClient
      .from("Generation")
      .delete()
      .eq("id", generationId);
    if (error) throw new Error(error.message);
    revalidatePath("/ai-generations", "layout");
    return generationId;
  } catch (err) {
    return handleError(err, "Error deleting generation");
  }
}

// Leonardo API actions

export async function getLeonardoUserInformation(): Promise<LeonardoUserResponse | null> {
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

export async function getPresignedUrl(): Promise<LeonardoPresignedDetails | null> {
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
}
