import { ReactElement, ReactNode } from "react";
import {
  BADGE_TEXT,
  COLUMN_OPTIONS,
  defaultAspectRatioConversion,
  OPTION_TITLE,
  SECTION_TITLE,
  TOOLTIP_TEXT,
} from "./constants";

// SettingsContext type definitions
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

export interface SettingsContextProps {
  settings: SettingsState;
  setSetting: <K extends keyof SettingsState>(
    settingKey: K,
    value: SettingsState[K]
  ) => void;
  resetSettings: () => void;
}

export interface SettingsProviderProps {
  children: ReactNode;
}

// Component type definitions
export type AspectRatioKey = keyof typeof defaultAspectRatioConversion;

export type InputDimension = "aspectRatioHeight" | "aspectRatioWidth";

export type OptionWithSwitchProps = {
  title: OPTION_TITLE;
  badgeText?: BADGE_TEXT;
  tooltipText: TOOLTIP_TEXT;
  enabled: boolean;
  toggle: (value: boolean) => void;
  hidden?: boolean;
};

export type SectionWithOptionsGridProps = {
  title: SECTION_TITLE;
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
  darkerTheme: boolean;
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
