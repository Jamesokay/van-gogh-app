export const enum SECTION_TITLE {
  NUMBER_OF_IMAGES = "Number of Images",
  INPUT_DIMENSIONS = "Input Dimensions",
  ADVANCED_CONTROLS = "Advanced Controls",
  GUIDANCE_SCALE = "Guidance Scale",
}

export const enum OPTION_TITLE {
  PHOTOREAL = "PhotoReal",
  ALCHEMY = "Alchemy",
  TRANSPARENCY = "Transparency",
  PUBLIC_IMAGES = "Public Images",
  TILING = "Tiling",
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
  TILING = "Ideal for repeating textures or backgrounds.",
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
export const aspectRatioOptions = [
  "1:1",
  "1:2",
  "2:3",
  "3:2",
  "3:4",
  "4:3",
  "9:16",
  "16:9",
  "2.39:1",
];

export const defaultAspectRatioConversion = {
  "1:1": { width: 728, height: 728 },
  "1:2": { width: 512, height: 1024 },
  "2:3": { width: 592, height: 888 },
  "3:2": { width: 888, height: 592 },
  "3:4": { width: 624, height: 832 },
  "4:3": { width: 832, height: 624 },
  "9:16": { width: 536, height: 960 },
  "16:9": { width: 960, height: 536 },
  "2.39:1": { width: 1224, height: 512 }
};

export type AspectRatioKey = keyof typeof defaultAspectRatioConversion; 

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
