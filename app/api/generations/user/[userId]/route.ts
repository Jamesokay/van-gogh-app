// Get generations by user ID

import { NextResponse } from "next/server";

const token = process.env.LEONARDO_API_TOKEN;

export async function GET(request: Request) {
    console.log('smacking this endpoint')
  const url = new URL(request.url);
  const userId = url.pathname.split("/").pop();

  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const offset = url.searchParams.get("offset");
  const limit = url.searchParams.get("limit");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`
    },
  };

  try {
    let apiUrl = `https://cloud.leonardo.ai/api/rest/v1/generations/user/${userId}`;
    const queryParams = new URLSearchParams();
    if (offset) queryParams.set("offset", offset);
    if (limit) queryParams.set("limit", limit);
    apiUrl += `?${queryParams.toString()}`;

    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const data = await response.json();
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Failed to fetch data from the external API:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
