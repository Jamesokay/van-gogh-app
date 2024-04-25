'use client'

import { createContext, useContext, useState } from 'react';
import { SettingsContextProps, SettingsProviderProps, SettingsState } from './definitions';



const defaultState: SettingsState = {
  numberOfImages: '4',
  photoReal: false,
  alchemy: false,
  transparency: false,
  publicImages: false,
  aspectRatioHeight: 576,
  aspectRatioWidth: 1024,
  guidanceScale: 7,
  tiling: false
};

const SettingsContext = createContext<SettingsContextProps>({
  settings: defaultState,
  setSetting: () => {},
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsState>(defaultState);

  const setSetting = <K extends keyof SettingsState>(settingKey: K, value: SettingsState[K]): void => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: value,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, setSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};
