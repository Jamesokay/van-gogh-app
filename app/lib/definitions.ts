import { ReactElement, ReactNode } from "react";
import {
  defaultAspectRatioConversion,
  imageGuidanceTypes,
} from "./dataConstants";
import { Database } from "./supabase";

// Context type definitions

export type ContextProviderProps = {
  children: ReactNode;
};

export type SettingsContextProps = {
  generationRequest: GenerationRequestState;
  setKeyOfGenerationRequest: <K extends keyof GenerationRequestState>(
    key: K,
    value: GenerationRequestState[K]
  ) => void;
  interfaceState: InterfaceState;
  setKeyOfInterfaceState: <K extends keyof InterfaceState>(
    key: K,
    value: InterfaceState[K]
  ) => void;
  handlePhotoReal: (toggleOn: boolean) => void;
  handleAlchemy: (toggleOn: boolean) => void;
  handleAspectRatioChange: (dimension: InputDimension, value: number) => void;
  handleDimensionOption: (option: string) => void;
  handleAspectRatioOptionClick: (option: AspectRatioKey) => void;
  handleReset: () => void;
  handleImageGuidance: (type: ImageGuidanceType) => void;
  clearImageGuidance: () => void;
};

export type GenerationRequestState = {
  alchemy: boolean;
  guidance_scale?: number;
  height: number;
  controlNet: boolean | null;
  controlNetType: "POSE" | "CANNY" | "DEPTH" | null;
  init_generation_image_id: string | null;
  init_image_id: string | null;
  init_strength: number | null;
  modelId: string;
  negative_prompt: string;
  num_images: number;
  photoReal: boolean;
  photoRealVersion: "v1" | "v2";
  presetStyle: LeonardoPresetStyle;
  prompt: string;
  promptMagic: boolean;
  public: boolean;
  seed?: number;
  tiling: boolean;
  transparency: boolean;
  width: number;
};

export type InterfaceState = {
  aspectRatioLocked: boolean;
  aspectRatio: AspectRatioKey;
  mobileSideBarExpanded: boolean;
  enableNegativePrompt: boolean;
  enableImageGuidance: boolean;
  enableSeed: boolean;
  generating: boolean;
  newGenerationId: string;
  deletedGenerationIds: string[];
  tokens: number;
  imageGuidanceType: ImageGuidanceType;
  imageGuidanceSrc: string;
};

export type LeonardoUpscalerRequest = {
  initImageId: string | null;
  upscalerStyle: LeonardoUpscalerStyle;
  creativityStrength: number;
  upscaleMultiplier: number;
  generatedImageId: string | null;
  prompt: string | null;
};

export type UpscalerContextProps = {
  upscalerRequest: LeonardoUpscalerRequest;
  selectedUpscaleHistoryItem: UpscaledImage | null;
  setSelectedUpscaleHistoryItem: (value: React.SetStateAction<UpscaledImage | null>) => void;
  newUpscaleSourceImage: LocalUpscalerImage;
  setNewUpscaleSourceImage: (value: React.SetStateAction<LocalUpscalerImage>) => void;
  setUpscalerRequest: (
    value: React.SetStateAction<LeonardoUpscalerRequest>
  ) => void;
  upscalerView: UpscalerView;
  setUpscalerView: (value: UpscalerView) => void;
};

export type UpscaledImage = {
  id: string;
  sourceImage: {
    id: string;
    url: string;
    height: number;
    width: number;
  };
  upscaledImage: {
    id: string;
    url: string;
    height: number;
    width: number;
  };
  details: {
    creativityStrength: number;
    upscaleMultiplier: number;
    upscalerStyle: string;
    prompt: string | null;
  };
};

export type LocalUpscalerImage = {
  src: string;
  height: number;
  width: number;
};

export type LeonardoUpscalerStyle =
  | "GENERAL"
  | "2D ART & ILLUSTRATION"
  | "CINEMATIC"
  | "CG ART & GAME ASSETS";

export type UpscalerView = "slider" | "variation" | "sideBySide";

// Leonardo API type definitions

export type LeonardoGenerationRequestBody = {
  alchemy?: boolean | null;
  contrastRatio?: number | null;
  controlNet?: boolean | null;
  controlNetType?: "POSE" | "CANNY" | "DEPTH" | null;
  elements?: { akUUID?: string | null; weight?: number | null } | null;
  expandedDomain?: boolean | null;
  fantasyAvatar?: boolean | null;
  guidance_scale?: number | null;
  height?: number | null;
  highContrast?: boolean | null;
  highResolution?: boolean | null;
  imagePrompts?: string[] | null;
  imagePromptWeight?: number | null;
  init_generation_image_id?: string | null;
  init_image_id?: string | null;
  init_strength?: number | null;
  modelId?: string | null;
  negative_prompt?: string | null;
  num_images?: number | null;
  num_inference_steps?: number | null;
  photoReal?: boolean | null;
  photoRealVersion?: string | null;
  photoRealStrength?: number | null;
  presetStyle?: string | null;
  prompt: string;
  promptMagic?: boolean | null;
  promptMagicStrength?: number | null;
  promptMagicVersion?: string | null;
  public?: boolean | null;
  scheduler?: string | null;
  sd_version?: string | null;
  seed?: number | null;
  tiling?: boolean | null;
  transparency?: "disabled" | "foreground_only" | null;
  unzoom?: boolean | null;
  unzoomAmount?: number | null;
  upscaleRatio?: number | null;
  weighting?: number | null;
  width?: number | null;
};

export type LeonardoGenerationJobResponse = {
  sdGenerationJob: {
    generationId: string;
    apiCreditCost: number;
  };
};

export type LeonardoCustomModel = {
  description: string | null;
  featured: true | null;
  generated_image: {
    id: string | null;
    url: string | null;
  } | null;
  id: string | null;
  name: string | null;
  nsfw: true | null;
};

export type LeonardoUserResponse = {
  user: {
    id: string;
    username: string;
  };
  tokenRenewalDate: string;
  paidTokens: 0;
  subscriptionTokens: 0;
  subscriptionGptTokens: 0;
  subscriptionModelTokens: 0;
  apiConcurrencySlots: 0;
  apiPaidTokens: 0;
  apiSubscriptionTokens: 0;
  apiPlanTokenRenewalDate: string;
};

export type LeonardoPresignedDetails = {
  fields: string | null;
  id: string | null;
  key: string | null;
  url: string | null;
};

export type LeonardoPresetStyle =
  | "ANIME"
  | "BOKEH"
  | "CINEMATIC"
  | "CINEMATIC_CLOSEUP"
  | "CREATIVE"
  | "DYNAMIC"
  | "ENVIRONMENT"
  | "FASHION"
  | "FILM"
  | "FOOD"
  | "GENERAL"
  | "HDR"
  | "ILLUSTRATION"
  | "LEONARDO"
  | "LONG_EXPOSURE"
  | "MACRO"
  | "MINIMALISTIC"
  | "MONOCHROME"
  | "MOODY"
  | "NONE"
  | "NEUTRAL"
  | "PHOTOGRAPHY"
  | "PORTRAIT"
  | "RAYTRACED"
  | "RENDER_3D"
  | "RETRO"
  | "SKETCH_BW"
  | "SKETCH_COLOR"
  | "STOCK_PHOTO"
  | "VIBRANT"
  | "UNPROCESSED";

export type GenerationStatus = "PENDING" | "COMPLETE" | "FAILED";

type TransformType = "OUTPAINT" | "INPAINT" | "UPSCALE" | "UNZOOM" | "NOBG";

// Leonardo webhook type definitions

export interface WebhookGenerationData {
  id: string | null;
  createdAt: string | null;
  userId: string | null;
  public: boolean | null;
  flagged: boolean | null;
  nsfw: boolean | null;
  status: string | null;
  coreModel: string | null;
  guidanceScale: number | null;
  imageHeight: number | null;
  imageWidth: number | null;
  inferenceSteps: number | null;
  initGeneratedImageId: string | null;
  initImageId: string | null;
  initStrength: string | null;
  initType: string | null;
  initUpscaledImageId: string | null;
  modelId: string | null;
  negativePrompt: string | null;
  prompt: string | null;
  quantity: number | null;
  sdVersion: string | null;
  tiling: boolean | null;
  imageAspectRatio: string | null;
  tokenCost: number | null;
  negativeStylePrompt: string | null;
  seed: string | null;
  scheduler: string | null;
  presetStyle: string | null;
  promptMagic: boolean | null;
  canvasInitImageId: string | null;
  canvasMaskImageId: string | null;
  canvasRequest: boolean | null;
  api: boolean | null;
  poseImage2Image: boolean | null;
  imagePromptStrength: number | null;
  category: string | null;
  poseImage2ImageType: string | null;
  highContrast: boolean | null;
  apiDollarCost: string | null;
  poseImage2ImageWeight: number | null;
  alchemy: string | null;
  contrastRatio: string | null;
  highResolution: string | null;
  expandedDomain: string | null;
  promptMagicVersion: string | null;
  unzoom: string | null;
  unzoomAmount: string | null;
  apiKeyId: string | null;
  photoReal: boolean | null;
  promptMagicStrength: number | null;
  photoRealStrength: number | null;
  imageToImage: boolean | null;
  controlnetsUsed: boolean | null;
  images: WebhookGenerationImage[] | null;
}

export interface WebhookGenerationImage {
  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  userId: string | null;
  url: string | null;
  generationId: string | null;
  nobgId: string | null;
  nsfw: boolean | null;
  likeCount: number | null;
  trendingScore: number | null;
  public: boolean | null;
  motionGIFURL: string | null;
  motionMP4URL: string | null;
  teamId: string | null;
}

// Supabase type definitions and custom type definitions for JSON data

export type GeneratedImage = {
  generated_image_variation_generics?: Array<{
    id: string;
    status: GenerationStatus;
    transformType: TransformType;
    url: string;
  }> | null;
  fantasyAvatar?: boolean;
  id: string;
  likeCount: number;
  motionMP4URL: string | null;
  nsfw: boolean;
  url: string;
};

type GenerationElement = {
  id: number;
  lora: {
    akUUID: string;
    baseModel: string;
    description: string;
    name: string;
    urlImage: string;
    weightDefault: number;
    weightMax: number;
    weightMin: number;
  };
  weightApplied: number;
};

export type GenerationRow = Omit<
  Database["public"]["Tables"]["Generation"]["Row"],
  "generated_images" | "generation_elements"
> & {
  generated_images: GeneratedImage[] | null;
  generation_elements: GenerationElement[] | null;
};

export type NonNullGenerationRow = {
  createdAt: string;
  generated_images: GeneratedImage[];
  generation_elements: GenerationElement[];
  guidanceScale: number;
  id: string;
  imageHeight: number;
  imageWidth: number;
  inferenceSteps: number;
  initStrength: number;
  modelId: string;
  negativePrompt: string;
  photoReal: boolean;
  photoRealStrength: number;
  presetStyle: string;
  prompt: string;
  promptMagic: boolean;
  promptMagicStrength: number;
  promptMagicVersion: string;
  public: boolean;
  scheduler: string;
  sdVersion: string;
  seed: number;
  status: string;
};

// Component definitions

export type OptionWithSwitchProps = {
  title: string;
  badgeText?: string;
  tooltipText: string;
  enabled: boolean;
  toggle: (value: boolean) => void;
  hidden?: boolean;
  icon?: ReactNode;
};

export type SectionWithOptionsGridProps = {
  title: string;
  value: string | number;
  setValue: (value: string | number) => void;
  options: string[] | number[];
  columns: COLUMN_OPTIONS;
  tooltipText?: string;
};

export type DimensionInputProps = {
  dimension: string;
  value: number;
  setValue: (value: number) => void;
  max: number;
  min: number;
  unit: string;
};

export type DropdownMenuProps<T extends string = string> = {
  options: T[];
  value: T;
  setValue: (value: T) => void;
  isDisabled: boolean;
  leftIcon?: ReactElement;
  headerTheme: boolean;
  large: boolean;
};

export type RangeSliderProps = {
  value: number;
  setValue: (value: number) => void;
  max: number;
  min: number;
  small?: boolean;
  purple?: boolean;
};

export type ImageGenModel = {
  modelId: string;
  modelName: string;
  modelWidth: number;
  modelHeight: number;
  baseModel: string;
  alchemy: boolean;
  img: string;
};

export type GenerationHistoryProps = {
  id: string;
  prompt: string;
  images: string[];
  modelId: string;
  style: string;
  width: number;
  height: number;
};

export type ImageCardButtonProps = {
  children: React.ReactNode;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  rounded?: "t" | "b";
  disabled?: boolean;
  className?: string;
};

export type BadgeWrapperProps = {
  children: React.ReactNode;
  label: string;
};

export type ImageInputGridProps = {
  selected: GeneratedImage | null;
  columns: number;
  columnImages: GeneratedImage[][];
  handleSelect: (
    currentId: string | undefined,
    newImage: GeneratedImage
  ) => void;
  mobile: boolean;
};

export type GridToggleProps = {
  view: "mobile" | "web";
  columns: number;
  setColumns: (value: number) => void;
  handleToggle: (
    current: number,
    dir: "plus" | "minus",
    view: "mobile" | "web"
  ) => void;
};

export type SliderOptionProps = {
  title: string;
  tooltipText: string;
  value: number;
  setValue: (balue: number) => void;
  min: number;
  max: number;
  disabled: boolean;
  enhanceGranularity?: boolean;
};

// Miscellaneous type definitions

export type Dimension = {
  width: number;
  height: number;
};

export type ImageGuidanceType = (typeof imageGuidanceTypes)[number];

export type AspectRatioKey = keyof typeof defaultAspectRatioConversion;

export type InputDimension = "height" | "width";

export type HeroImage = {
  title: string;
  src: string;
  creator: string;
};

// Custom Error classes

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class ServerError extends Error {
  constructor(status: number, message: string) {
    super(message);
    this.name = "ServerError";
    this.status = status;
  }
  status: number;
}

export class ClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ClientError";
  }
}

// Enums

export const enum COLUMN_OPTIONS {
  TWO = 2,
  FOUR = 4,
}

export const enum INPUT_DIMENSIONS {
  MIN = 512,
  MAX = 1536,
}

export const enum IMAGE_GUIDANCE_STRENGTH {
  MIN = 10,
  MAX = 90,
}

export const enum GUIDANCE_SCALE_STRENGTH {
  MIN = 1,
  MAX = 20,
}
