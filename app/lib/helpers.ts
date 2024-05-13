import { defaultAspectRatioConversion } from "./dataConstants";
import {
  Dimension,
  GenerationRequestState,
  LeonardoGenerationRequestBody,
  PresetStyle,
} from "./definitions";

export const uniqueId = () => {
  return `id_${Math.random().toString(36).substr(2, 9)}`;
};

export function transformDimensions(input: Dimension): Dimension {
  const scalingFactor = 1.75;
  const transformedWidth = Math.round(input.width * scalingFactor);
  const transformedHeight = Math.round(input.height * scalingFactor);
  return {
    width: transformedWidth,
    height: transformedHeight,
  };
}

export function parseDimension(input: string): Dimension {
  const parts = input.split("x");
  if (parts.length !== 2) {
    throw new Error(
      "Invalid dimension format. Expected format 'width x height'."
    );
  }
  return {
    width: parseInt(parts[0].trim(), 10),
    height: parseInt(parts[1].trim(), 10),
  };
}

export function findApproximateAspectRatio(dimensions: Dimension): string {
  // Helper function to calculate the numerical value of an aspect ratio from a string
  const parseAspectRatio = (ratio: string): number => {
    const [w, h] = ratio.split(":").map(Number);
    return w / h;
  };

  // Calculate the base aspect ratio
  const baseRatio = dimensions.width / dimensions.height;

  // Define the tolerance based on the ±50px margin
  const tolerance = 50 / dimensions.height; // Adjusting the width tolerance relative to height

  let nearestRatio = "Aspect Ratio"; // Default fallback
  let smallestDifference = Infinity;

  // Iterate over all aspect ratios and find the one within the smallest difference that fits within the tolerance
  Object.entries(defaultAspectRatioConversion).forEach(
    ([aspectRatio, size]) => {
      const definedRatio = parseAspectRatio(aspectRatio);
      const difference = Math.abs(definedRatio - baseRatio);

      if (difference < smallestDifference && difference <= tolerance) {
        smallestDifference = difference;
        nearestRatio = aspectRatio;
      }
    }
  );

  return nearestRatio;
}

export function calculateProportionalHeight(
  ratio: string,
  width: number
): number {
  const [numerator, denominator] = ratio.split(":").map(Number);
  return Math.round((denominator / numerator) * width);
}

export function calculateProportionalWidth(
  ratio: string,
  height: number
): number {
  const [numerator, denominator] = ratio.split(":").map(Number);
  return Math.round((numerator / denominator) * height);
}

export function constructDateString(createdAt: Date) {
  const currentDate = new Date();
  const date = new Date(createdAt);

  // Check if the year, month, and day are the same
  if (
    date.getFullYear() === currentDate.getFullYear() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate()
  ) {
    return "today";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

export function convertStringToPresetStyle(style: string): PresetStyle {
  switch (style.toLowerCase()) {
    case "anime":
      return "ANIME";
    case "cinematic":
      return "CINEMATIC";
    case "creative":
      return "CREATIVE";
    case "dynamic":
      return "DYNAMIC";
    case "environment":
      return "ENVIRONMENT";
    case "general":
      return "GENERAL";
    case "illustration":
      return "ILLUSTRATION";
    case "photography":
      return "PHOTOGRAPHY";
    case "raytraced":
      return "RAYTRACED";
    case "3d render":
      return "RENDER_3D";
    case "sketch b/w":
      return "SKETCH_BW";
    case "sketch color":
      return "SKETCH_COLOR";
    case "vibrant":
      return "VIBRANT";
    default:
      return "NONE";
  }
}

export function convertPresetStyleToString(presetStyle: PresetStyle): string {
  switch (presetStyle) {
    case "ANIME":
      return "Anime";
    case "CINEMATIC":
      return "Cinematic";
    case "CREATIVE":
      return "Creative";
    case "DYNAMIC":
      return "Dynamic";
    case "ENVIRONMENT":
      return "Environment";
    case "GENERAL":
      return "General";
    case "ILLUSTRATION":
      return "Illustration";
    case "PHOTOGRAPHY":
      return "Photography";
    case "RAYTRACED":
      return "Raytraced";
    case "RENDER_3D":
      return "3D Render";
    case "SKETCH_BW":
      return "Sketch B/W";
    case "SKETCH_COLOR":
      return "Sketch Color";
    case "VIBRANT":
      return "Vibrant";
    case "NONE":
    default:
      return "None";
  }
}

export function extractRequestBody(
  state: GenerationRequestState
): LeonardoGenerationRequestBody {
  // This can be expanded to handle various other API features not currently implemented
  return {
    ...state,
    transparency: state.transparency ? "foreground_only" : "disabled",
  };
}
