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
};

// TODO: use these in SideBar function calls instead of straight strings
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

// Action type definitions
export type Dimension = {
  width: number;
  height: number;
};

export const enum COLUMN_OPTIONS {
  TWO = "2",
  FOUR = "4",
}
