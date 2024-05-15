import { ReactElement, ReactNode } from "react";
import { defaultAspectRatioConversion } from "./dataConstants";

export type SettingsProviderProps = {
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
  clearImageGuidance: () => void;
};

export type GenerationRequestState = {
  alchemy: boolean;
  guidance_scale?: number;
  height: number;
  init_generation_image?: string;
  init_image_id?: string;
  init_strength?: number;
  modelId: string;
  negative_prompt: string;
  num_images: number;
  photoReal: boolean;
  photoRealVersion: 'v1' | 'v2',
  presetStyle: PresetStyle;
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
};

// Component definitions

export type AspectRatioKey = keyof typeof defaultAspectRatioConversion;

export type InputDimension = "height" | "width";

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
};

export type ImageGenModel = {
  modelId: string;
  modelName: string;
  modelWidth: number;
  modelHeight: number;
  baseModel: BaseModel;
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

// Leonardo API Definitions

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

// Request body as defined in Leonardo API documentation
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
  transparency?: "disabled" | "foreground_only" | null;
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

export type LeonardoGeneratedElement = {
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
};

export type LeonardoGenerationResponse = {
  createdAt: Date | null;
  generated_images: LeonardoGeneratedImage[] | null;
  generation_elements: LeonardoGeneratedElement[] | null;
  guidanceScale: number | null;
  id: string | null;
  imageHeight: number | null;
  imageWidth: number | null;
  inferenceSteps: number | null;
  initStrength: number | null;
  modelId: string | null;
  negativePrompt: string | null;
  photoReal: boolean | null;
  photoRealStrength: 0.55 | 0.5 | 0.45 | null;
  presetStyle: PresetStyle | null;
  prompt: string | null;
  promptMagic: boolean | null;
  promptMagicStrength: number | null;
  promptMagicVersion: "v2" | "v3" | null;
  public: boolean | null;
  scheduler: Scheduler | null;
  sdVersion: StableDiffusionVersion | null;
  seed: number | null;
  status: GenerationStatus | null;
};

export type NonNullLeonardoGenerationResponse = {
  createdAt: Date;
  generated_images: LeonardoGeneratedImage[];
  generation_elements: LeonardoGeneratedElement[];
  guidanceScale: number;
  id: string;
  imageHeight: number;
  imageWidth: number;
  inferenceSteps: number;
  initStrength: number;
  modelId: string;
  negativePrompt: string;
  photoReal: boolean;
  photoRealStrength: 0.55 | 0.5 | 0.45;
  presetStyle: PresetStyle;
  prompt: string;
  promptMagic: boolean;
  promptMagicStrength: number;
  promptMagicVersion: "v2" | "v3";
  public: boolean;
  scheduler: Scheduler;
  sdVersion: StableDiffusionVersion;
  seed: number;
  status: GenerationStatus;
};

// Enforce non-null values for the purposes of rendering panels
export const defaultLeonardoGenerationResponse: NonNullLeonardoGenerationResponse =
  {
    createdAt: new Date(),
    generated_images: [],
    generation_elements: [],
    guidanceScale: 7,
    id: "",
    imageHeight: 1,
    imageWidth: 1,
    inferenceSteps: 1,
    initStrength: 1,
    modelId: "",
    negativePrompt: "",
    photoReal: false,
    photoRealStrength: 0.55,
    presetStyle: "NONE",
    prompt: "",
    promptMagic: false,
    promptMagicStrength: 0.5,
    promptMagicVersion: "v2",
    public: false,
    scheduler: "EULER_DISCRETE",
    sdVersion: "v1_5",
    seed: 0,
    status: "PENDING",
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
