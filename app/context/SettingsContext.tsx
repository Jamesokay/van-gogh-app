'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsState {
  photoReal: boolean;
  alchemy: boolean;
  promptMagic: boolean;
  transparency: boolean;
  publicImages: boolean;
}

interface SettingsContextProps {
  settings: SettingsState;
  setSetting: (settingKey: keyof SettingsState, value: boolean) => void;
}

const defaultState: SettingsState = {
  photoReal: false,
  alchemy: false,
  promptMagic: false,
  transparency: false,
  publicImages: false,
};

const SettingsContext = createContext<SettingsContextProps>({
  settings: defaultState,
  setSetting: () => {},
});

export const useSettings = () => useContext(SettingsContext);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsState>(defaultState);

  const setSetting = (settingKey: keyof SettingsState, value: boolean) => {
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
