// Get a single generation

import { NextResponse } from "next/server";

const baseUrl = "https://cloud.leonardo.ai/api/rest/v1/generations";
const token = process.env.LEONARDO_API_TOKEN;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const generationId = url.pathname.split("/").pop();

  if (!generationId) {
    return new NextResponse(
      JSON.stringify({ error: "Generation ID is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const apiResponse = await fetch(`${baseUrl}/${generationId}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return forwardResponse(apiResponse);
}

// Helper function to forward the response from the API
async function forwardResponse(apiResponse: Response) {
  const data = await apiResponse.json();
  const status = apiResponse.ok ? 200 : apiResponse.status;
  return new NextResponse(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
