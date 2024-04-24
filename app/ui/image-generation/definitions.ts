import { SettingsState } from "@/app/context/definitions";

export const enum SECTION_TITLE {
  NUMBER_OF_IMAGES = "Number of Images",
  INPUT_DIMENSIONS = "Input Dimensions",
}

export const enum OPTION_TITLE {
  PHOTOREAL = "PhotoReal",
  ALCHEMY = "Alchemy",
  TRANSPARENCY = "Transparency",
  PUBLIC_IMAGES = "Public Images",
}

export const enum BADGE_TEXT {
  V2 = "V2",
  BETA = "Beta",
}

export const enum TOOLTIP_TEXT {
  PHOTOREAL = "Enhanced photorealism.",
  ALCHEMY = "Stylize images with AI.",
  TRANSPARENCY = "Adds transparency to the generated images.",
  PUBLIC_IMAGES = "Send your generations to the community feed",
}

export const enum COLUMN_OPTIONS {
  TWO = "2",
  FOUR = "4",
}

export const numberOfImagesOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const dimensionOptions = [
  "512 x 768",
  "768 x 512",
  "1024 x 768",
  "768 x 1024",
  "1360 x 768",
  "768 x 1360",
];

export type OptionWithSwitchProps = {
  title: OPTION_TITLE;
  badgeText?: BADGE_TEXT;
  tooltipText: TOOLTIP_TEXT;
  enabled: boolean;
  toggle: (value: boolean) => void;
};

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type SectionWithOptionsGridProps = {
  title: SECTION_TITLE;
  optionName: StringKeys<SettingsState>;
  options: string[];
  columns: COLUMN_OPTIONS;
};
