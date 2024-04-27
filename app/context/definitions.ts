import { ReactNode } from "react";

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
