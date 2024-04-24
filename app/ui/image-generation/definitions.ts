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

export type OptionWithSwitchProps = {
  title: OPTION_TITLE;
  badgeText?: BADGE_TEXT;
  tooltipText: TOOLTIP_TEXT;
  enabled: boolean;
  toggle: (value: boolean) => void;
};
