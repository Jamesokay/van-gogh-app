export const enum SECTION_TITLE {
  NUMBER_OF_IMAGES = "Number of Images",
  INPUT_DIMENSIONS = "Input Dimensions",
  ADVANCED_CONTROLS = "Advanced Controls",
  GUIDANCE_SCALE = "Guidance Scale"
}

export const enum OPTION_TITLE {
  PHOTOREAL = "PhotoReal",
  ALCHEMY = "Alchemy",
  TRANSPARENCY = "Transparency",
  PUBLIC_IMAGES = "Public Images",
  TILING = "Tiling"
}

export const enum BADGE_TEXT {
  V2 = "V2",
  BETA = "Beta",
}

export const enum TOOLTIP_TEXT {
  PHOTOREAL = "Enhanced photorealism.",
  ALCHEMY = "Stylize images with AI.",
  TRANSPARENCY = "Adds transparency to the generated images.",
  PUBLIC_IMAGES = "Send your generations to the community feed.",
  INPUT_DIMENSIONS = "This is the input resolution into Alchemy.",
  TILING = "Ideal for repeating textures or backgrounds."
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

export type SectionWithOptionsGridProps = {
  title: SECTION_TITLE;
  value: string;
  setValue: (value: string) => void;
  options: string[];
  columns: COLUMN_OPTIONS;
  tooltipText?: string;
};
