import { ReactElement, ReactNode } from "react";
import { defaultAspectRatioConversion } from "./dataConstants";

// Settings definitions
export interface SettingsState {
  numberOfImages: string;
  photoReal: boolean;
  alchemy: boolean;
  promptMagic: boolean;
  transparency: boolean;
  publicImages: boolean;
  aspectRatioHeight: number;
  aspectRatioWidth: number;
  guidanceScale: number;
  tiling: boolean;
  recommendedSizes: boolean;
  useFixedSeed: boolean;
  fixedSeed: number | null;
  prompt: string;
  enableNegativePrompt: boolean;
  negativePrompt: string;
  modelId: string;
  imageStyle: string;
  imageGuidance: boolean;
  imageGuidanceSrc: string;
  imageGuidanceType: string;
  imageGuidanceStrength: number;
  credits: number;
}

export interface SettingsProviderProps {
  children: ReactNode;
}

export type SettingsContextProps = {
  settings: SettingsState;
  setSetting: <K extends keyof SettingsState>(
    settingKey: K,
    value: SettingsState[K]
  ) => void;
  handlePhotoReal: (toggleOn: boolean) => void;
  handleAlchemy: (toggleOn: boolean) => void;
  handleAspectRatioChange: (dimension: InputDimension, value: number) => void;
  handleDimensionOption: (option: string) => void;
  handleAspectRatioOptionClick: (option: AspectRatioKey) => void;
  handleReset: () => void;
  aspectRatioLocked: boolean;
  setAspectRatioLocked: (value: boolean) => void;
  clearImageGuidance: () => void;
  mobileSideBarExpanded: boolean;
  setMobileSideBarExpanded: (value: boolean) => void;
  newGenerationId: string;
  setNewGenerationId: (value: string) => void;
};

export const enum SETTINGS_KEY {
  NUMBER_OF_IMAGES = "numberOfImages",
  PHOTO_REAL = "photoReal",
  ALCHEMY = "alchemy",
  PROMPT_MAGIC = "promptMagic",
  TRANSPARENCY = "transparency",
  PUBLIC_IMAGES = "publicImages",
  ASPECT_RATIO_WIDTH = "aspectRatioWidth",
  ASPECT_RATIO_HEIGHT = "aspectRatioHeight",
  GUIDANCE_SCALE = "guidanceScale",
  TILING = "tiling",
  RECOMMENDED_SIZES = "recommendedSizes",
  USE_FIXED_SEED = "useFixedSeed",
  FIXED_SEED = "fixedSeed",
  PROMPT = "prompt",
  ENABLE_NEGATIVE_PROMPT = "enableNegativePrompt",
  NEGATIVE_PROMPT = "negativePrompt",
  IMAGE_STYLE = "imageStyle",
  MODEL_ID = "modelId",
  IMAGE_GUIDANCE = "imageGuidance",
  IMAGE_GUIDANCE_SRC = "imageGuidanceSrc",
  IMAGE_GUIDANCE_TYPE = "imageGuidanceType",
  IMAGE_GUIDANCE_STRENGTH = "imageGuidanceStrength",
}

// Component definitions

export type AspectRatioKey = keyof typeof defaultAspectRatioConversion;

export type InputDimension = "aspectRatioHeight" | "aspectRatioWidth";

export type OptionWithSwitchProps = {
  title: string;
  badgeText?: string;
  tooltipText: string;
  enabled: boolean;
  toggle: (value: boolean) => void;
  hidden?: boolean;
};

export type SectionWithOptionsGridProps = {
  title: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
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
};

export type ImageGenModel = {
  modelId: string;
  modelName: string;
  ModelType: string;
  dimensions: string;
  lightning: boolean;
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
};

export type BadgeWrapperProps = {
  children: React.ReactNode;
  label: string;
};

// Action type definitions
export type Dimension = {
  width: number;
  height: number;
};

export const enum COLUMN_OPTIONS {
  TWO = "2",
  FOUR = "4",
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

// API Definitions

export type PresetStyle =
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

type Scheduler =
  | "KLMS"
  | "EULER_ANCESTRAL_DISCRETE"
  | "EULER_DISCRETE"
  | "DDIM"
  | "DPM_SOLVER"
  | "PNDM"
  | "LEONARDO";

type GenerationStatus = "PENDING" | "COMPLETE" | "FAILED";

type BaseModel =
  | "v1_5"
  | "v2"
  | "v3"
  | "SDXL_0_8"
  | "SDXL_0_9"
  | "SDXL_1_0"
  | "SDXL_LIGHTNING";

type TransformType = "OUTPAINT" | "INPAINT" | "UPSCALE" | "UNZOOM" | "NOBG";

type StableDiffusionVersion =
  | "v1_5"
  | "v2"
  | "v3"
  | "SDXL_0_8"
  | "SDXL_0_9"
  | "SDXL_1_0"
  | "SDXL_LIGHTNING";

export type LeonardoGenerationRequestBody = {
  alchemy?: boolean | null;
  contrastRatio?: number | null; // Requires Alchemy
  controlNet?: boolean | null; // Requires init img and model based on SD v1.5
  controlNetType?: string | null;
  elements?: { akUUID?: string | null; weight?: number | null } | null;
  expandedDomain?: boolean | null; // Requires Alchemy
  fantasyAvatar?: boolean | null;
  guidance_scale?: number | null;
  height?: number | null;
  highContrast?: boolean | null;
  highResolution?: boolean | null;
  imagePrompts?: string[] | null;
  imagePromptWeight?: number | null;
  init_generation_image?: string | null; // For Image to Image
  init_image_id?: string | null;
  init_strength?: number;
  modelId?: string | null;
  negative_prompt?: string | null;
  num_images?: number | null;
  num_inference_steps?: number | null;
  photoReal?: boolean | null;
  photoRealVersion?: "v1" | "v2" | null;
  photoRealStrength?: 0.55 | 0.5 | 0.45 | null;
  presetStyle?: PresetStyle | null;
  prompt: string;
  promptMagic?: boolean | null;
  promptMagicStrength?: number | null;
  promptMagicVersion?: "v2" | "v3" | null;
  public?: boolean | null;
  scheduler?: Scheduler | null;
  sd_version?: StableDiffusionVersion | null;
  seed?: number | null;
  tiling?: boolean | null;
  transparency?: string | null;
  unzoom?: boolean | null; // Requires init_image_id and unzoomAmount
  unzoomAmount?: number | null;
  upscaleRatio?: number | null; // Enterprise only
  weighting?: number | null; // Requires controlNet
  width?: number | null;
};

export type LeonardoGenerationJobResponse = {
  sdGenerationJob: {
    generationId: string;
    apiCreditCost: number;
  };
};

export type LeonardoGeneratedImage = {
  generated_image_variation_generics?: Array<{
    id: string;
    status: GenerationStatus;
    transformType: TransformType;
    url: string;
  }> | null;
  fantasyAvatar?: boolean;
  id: string;
  imageToVideo: boolean;
  likeCount: number;
  motion: boolean;
  motionModel: string | null;
  motionMP4URL: string | null;
  motionStrength: number | null;
  nsfw: boolean;
  url: string;
};

export type LeonardoGenerationResponse = {
  createdAt: Date;
  generated_images: LeonardoGeneratedImage[];
  generation_elements: Array<{
    id: number;
    lora: {
      akUUID: string;
      baseModel: BaseModel;
      description: string;
      name: string;
      urlImage: string;
      weightDefault: number;
      weightMax: number;
      weightMin: number;
    };
    weightApplied: number;
  }> | null;
  guidanceScale: number | null;
  id: string;
  imageHeight: number;
  imageWidth: number;
  inferenceSteps: number | null;
  initStrength: number | null;
  modelId: string;
  negativePrompt: string | null;
  photoReal: boolean | null;
  photoRealStrength: number | null;
  presetStyle: PresetStyle;
  prompt: string;
  promptMagic: boolean;
  promptMagicStrength: number | null;
  promptMagicVersion: string | null;
  public: boolean;
  scheduler: Scheduler;
  sdVersion: StableDiffusionVersion;
  seed: number | null;
  status: GenerationStatus;
};

export type LeonardoCustomModel = {
  description: string;
  featured: true;
  generated_image: {
    id: string;
    url: string;
  };
  id: string;
  name: string;
  nsfw: true;
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
