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
  fixedSeed: string;
  prompt: string;
  enableNegativePrompt: boolean;
  negativePrompt: string;
  modelId: string;
  imageStyle: string;
  imageGuidance: boolean;
  imageGuidanceSrc: string;
  imageGuidanceType: string;
  imageGuidanceStrength: number;
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
  align: "center" | "left";
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
