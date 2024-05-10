import {
  LeonardoGenerationRequestBody,
  LeonardoGenerationResponse,
  LeonardoUserResponse,
} from "./definitions";

export async function getUserInformation(): Promise<LeonardoUserResponse | null> {
  // To-do: remove localhost
  const url = 'http://localhost:3000/api/me'
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
    return data.user_details[0];
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}

export async function generateImages(body: LeonardoGenerationRequestBody) {
  // To-do: remove localhost
  const url = "http://localhost:3000/api/generations";
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

export async function getGenerationsByUserId(
  userId: string
): Promise<LeonardoGenerationResponse[] | null> {
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
