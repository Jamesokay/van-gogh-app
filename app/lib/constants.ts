export const enum SECTION_TITLE {
  NUMBER_OF_IMAGES = "Number of Images",
  INPUT_DIMENSIONS = "Input Dimensions",
  ADVANCED_CONTROLS = "Advanced Controls",
  GUIDANCE_SCALE = "Guidance Scale",
  SHOW_ADVANCED_SETTINGS = "Show Advanced Settings",
  SCHEDULER = "Scheduler",
}

export const enum OPTION_TITLE {
  PHOTOREAL = "PhotoReal",
  ALCHEMY = "Alchemy",
  PROMPT_MAGIC = "Prompt Magic",
  TRANSPARENCY = "Transparency",
  PUBLIC_IMAGES = "Public Images",
  TILING = "Tiling",
  RECOMMENDED_SIZES = "Recommended Sizes",
  USE_FIXED_SEED = "Use Fixed Seed",
}

export const enum BADGE_TEXT {
  V2 = "V2",
  BETA = "Beta",
}

export const enum BUTTON_TEXT {
  UPGRADE = "Upgrade",
  RESET = "Reset to defaults",
}

export const enum TOOLTIP_TEXT {
  PHOTOREAL = "Enhanced photorealism.",
  ALCHEMY = "Stylize images with AI.",
  PROMPT_MAGIC = "Prompt Magic tooltip text",
  TRANSPARENCY = "Adds transparency to the generated images.",
  PUBLIC_IMAGES = "Send your generations to the community feed.",
  INPUT_DIMENSIONS = "This is the input resolution into Alchemy.",
  GUIDANCE_SCALE = "How strongly your prompt is weighted",
  TILING = "Ideal for repeating textures or backgrounds.",
  RECOMMENDED_SIZES = "Automatically set dimensions to best fit for your model.",
  USE_FIXED_SEED = "The deterministic number for the random number generator.",
  SCHEDULER = "Defines how noise affects the generation.",
}

export const enum COLUMN_OPTIONS {
  TWO = "2",
  FOUR = "4",
}

export const numberOfImagesOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const dimensionOptions = {
  default: [
    "512 x 512",
    "768 x 768",
    "512 x 1024",
    "768 x 1024",
    "1024 x 768",
    "1024 x 1024",
  ],
  alchemy: [
    "512 x 768",
    "768 x 512",
    "1024 x 768",
    "768 x 1024",
    "1360 x 768",
    "768 x 1360",
  ],
};

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
  "2.39:1": { width: 1224, height: 512 },
};
