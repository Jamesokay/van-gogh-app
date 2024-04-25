import { ReactNode } from "react";

export interface SettingsState {
  numberOfImages: string;
  photoReal: boolean;
  alchemy: boolean;
  transparency: boolean;
  publicImages: boolean;
  aspectRatioHeight: number;
  aspectRatioWidth: number;
  guidanceScale: number;
  tiling: boolean;
}

export interface SettingsContextProps {
  settings: SettingsState;
  setSetting: <K extends keyof SettingsState>(
    settingKey: K,
    value: SettingsState[K]
  ) => void;
}

export interface SettingsProviderProps {
  children: ReactNode;
}
