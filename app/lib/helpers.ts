import { defaultAspectRatioConversion } from "./dataConstants";
import {
  defaultLeonardoGenerationResponse,
  Dimension,
  GenerationRequestState,
  GenerationStatus,
  InterfaceState,
  LeonardoGenerationRequestBody,
  LeonardoGenerationResponse,
  NonNullLeonardoGenerationResponse,
  PresetStyle
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

export function divideAndRound(num: number): number {
  return Math.round((num / 100) * 100) / 100;
}

export function convertStringToPresetStyle(style: string): PresetStyle {
  switch (style.toLowerCase()) {
    case "anime":
      return "ANIME";
    case "cinematic":
      return "CINEMATIC";
    case "cinematic (closeup)":
      return "CINEMATIC_CLOSEUP";
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
    case "leonardo":
      return "LEONARDO";
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
    case "bokeh":
      return "BOKEH";
    case "fashion":
      return "FASHION";
    case "film":
      return "FILM";
    case "food":
      return "FOOD";
    case "hdr":
      return "HDR";
    case "long exposure":
      return "LONG_EXPOSURE";
    case "macro":
      return "MACRO";
    case "minimalistic":
      return "MINIMALISTIC";
    case "monochrome":
      return "MONOCHROME";
    case "moody":
      return "MOODY";
    case "neutral":
      return "NEUTRAL";
    case "portrait":
      return "PORTRAIT";
    case "retro":
      return "RETRO";
    case "stock photo":
      return "STOCK_PHOTO";
    case "unprocessed":
      return "UNPROCESSED";
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
    case "CINEMATIC_CLOSEUP":
      return "Cinematic (Closeup)";
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
    case "LEONARDO":
      return "Leonardo";
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
    case "BOKEH":
      return "Bokeh";
    case "FASHION":
      return "Fashion";
    case "FILM":
      return "Film";
    case "FOOD":
      return "Food";
    case "HDR":
      return "HDR";
    case "LONG_EXPOSURE":
      return "Long Exposure";
    case "MACRO":
      return "Macro";
    case "MINIMALISTIC":
      return "Minimalistic";
    case "MONOCHROME":
      return "Monochrome";
    case "MOODY":
      return "Moody";
    case "NEUTRAL":
      return "Neutral";
    case "PORTRAIT":
      return "Portrait";
    case "RETRO":
      return "Retro";
    case "STOCK_PHOTO":
      return "Stock Photo";
    case "UNPROCESSED":
      return "Unprocessed";
    case "NONE":
    default:
      return "None";
  }
}

// Fill in all potential null values
export function fillDefaults(
  response: LeonardoGenerationResponse
): NonNullLeonardoGenerationResponse {
  return {
    createdAt:
      response.createdAt ?? defaultLeonardoGenerationResponse.createdAt,
    generated_images:
      response.generated_images ??
      defaultLeonardoGenerationResponse.generated_images,
    generation_elements:
      response.generation_elements ??
      defaultLeonardoGenerationResponse.generation_elements,
    guidanceScale:
      response.guidanceScale ?? defaultLeonardoGenerationResponse.guidanceScale,
    id: response.id ?? defaultLeonardoGenerationResponse.id,
    imageHeight:
      response.imageHeight ?? defaultLeonardoGenerationResponse.imageHeight,
    imageWidth:
      response.imageWidth ?? defaultLeonardoGenerationResponse.imageWidth,
    inferenceSteps:
      response.inferenceSteps ??
      defaultLeonardoGenerationResponse.inferenceSteps,
    initStrength:
      response.initStrength ?? defaultLeonardoGenerationResponse.initStrength,
    modelId: response.modelId ?? defaultLeonardoGenerationResponse.modelId,
    negativePrompt:
      response.negativePrompt ??
      defaultLeonardoGenerationResponse.negativePrompt,
    photoReal:
      response.photoReal ?? defaultLeonardoGenerationResponse.photoReal,
    photoRealStrength:
      response.photoRealStrength ??
      defaultLeonardoGenerationResponse.photoRealStrength,
    presetStyle:
      response.presetStyle ?? defaultLeonardoGenerationResponse.presetStyle,
    prompt: response.prompt ?? defaultLeonardoGenerationResponse.prompt,
    promptMagic:
      response.promptMagic ?? defaultLeonardoGenerationResponse.promptMagic,
    promptMagicStrength:
      response.promptMagicStrength ??
      defaultLeonardoGenerationResponse.promptMagicStrength,
    promptMagicVersion:
      response.promptMagicVersion ??
      defaultLeonardoGenerationResponse.promptMagicVersion,
    public: response.public ?? defaultLeonardoGenerationResponse.public,
    scheduler:
      response.scheduler ?? defaultLeonardoGenerationResponse.scheduler,
    sdVersion:
      response.sdVersion ?? defaultLeonardoGenerationResponse.sdVersion,
    seed: response.seed ?? defaultLeonardoGenerationResponse.seed,
    status: response.status ?? defaultLeonardoGenerationResponse.status,
  };
}

// Extract a request object from context state
export function extractRequestBodyFromContext(
  requestState: GenerationRequestState,
  interfaceState: InterfaceState
): LeonardoGenerationRequestBody {
  return {
    ...requestState,
    init_generation_image_id: interfaceState.enableImageGuidance
      ? requestState.init_generation_image_id
      : null,
    init_image_id: interfaceState.enableImageGuidance
      ? requestState.init_image_id
      : null,
    init_strength: interfaceState.enableImageGuidance
      ? divideAndRound(requestState.init_strength || 30)
      : null,
    controlNet: interfaceState.enableImageGuidance
      ? requestState.controlNet
      : null,
    controlNetType: interfaceState.enableImageGuidance
      ? requestState.controlNetType
      : null,
    photoRealVersion: requestState.photoReal
      ? requestState.photoRealVersion
      : null,
    transparency: requestState.transparency ? "foreground_only" : "disabled",
  };
}

// Extract a request object from a previous generation
export function extractRequestBodyFromPrevGeneration(
  state: NonNullLeonardoGenerationResponse
): LeonardoGenerationRequestBody {
  return {
    alchemy: false,
    guidance_scale: state.guidanceScale,
    height: state.imageHeight,
    modelId: state.modelId,
    negative_prompt: state.negativePrompt,
    num_images: state.generated_images.length,
    photoReal: state.photoReal,
    photoRealStrength: state.photoRealStrength,
    presetStyle: state.presetStyle,
    prompt: state.prompt,
    promptMagic: state.promptMagic,
    promptMagicStrength: state.promptMagic ? state.promptMagicStrength : null,
    promptMagicVersion: state.promptMagic ? state.promptMagicVersion : null,
    public: state.public,
    scheduler: state.scheduler,
    sd_version: state.sdVersion,
    seed: state.seed,
    width: state.imageWidth,
  };
}
