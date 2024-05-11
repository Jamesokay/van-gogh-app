"use server";

import {
  LeonardoGenerationJobResponse,
  LeonardoGenerationRequestBody,
  LeonardoGenerationResponse,
  LeonardoUserResponse,
} from "./definitions";

export async function getUserInformation(): Promise<LeonardoUserResponse | null> {
  const url = "https://cloud.leonardo.ai/api/rest/v1/me";
  const token = process.env.LEONARDO_API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.user_details[0];
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}

export async function generateImages(
  body: LeonardoGenerationRequestBody
): Promise<LeonardoGenerationJobResponse | null> {
  const url = "https://cloud.leonardo.ai/api/rest/v1/generations";
  const token = process.env.LEONARDO_API_TOKEN;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}

export async function getGenerationsByUserId(
  userId: string
): Promise<LeonardoGenerationResponse[] | null> {
  // Add functionality for offset and limit
  const url = `https://cloud.leonardo.ai/api/rest/v1/generations/user/${userId}`;
  const token = process.env.LEONARDO_API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
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
export async function fetchGeneration(generationId: string): Promise<LeonardoGenerationResponse | null> {
  const url = `https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`;
  const token = process.env.LEONARDO_API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.generations_by_pk;
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}
