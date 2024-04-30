"use client";

import { createContext, useContext, useState } from "react";
import {
  AspectRatioKey,
  InputDimension,
  SETTINGS_KEY,
  SettingsContextProps,
  SettingsProviderProps,
  SettingsState,
} from "../lib/definitions";
import { calculateProportionalHeight, parseDimension } from "../lib/actions";
import { defaultAspectRatioConversion } from "../lib/dataConstants";

const defaultState: SettingsState = {
  numberOfImages: "4",
  photoReal: false,
  alchemy: true,
  promptMagic: false,
  transparency: false,
  publicImages: false,
  aspectRatioWidth: 768,
  aspectRatioHeight: 512,
  guidanceScale: 7,
  tiling: false,
  recommendedSizes: true,
  useFixedSeed: false,
  fixedSeed: "",
  prompt: "",
  enableNegativePrompt: false,
  negativePrompt: "",
  modelId: "0",
  imageStyle: "Dynamic",
  imageGuidance: false,
};

const SettingsContext = createContext<SettingsContextProps>({
  settings: defaultState,
  setSetting: () => {},
  handlePhotoReal: () => {},
  handleAlchemy: () => {},
  handleAspectRatioChange: () => {},
  handleDimensionOption: () => {},
  handleAspectRatioOptionClick: () => {},
  handleReset: () => {},
  aspectRatioLocked: false,
  setAspectRatioLocked: () => {},
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState<SettingsState>(defaultState);
  const [aspectRatioLocked, setAspectRatioLocked] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioKey>("3:2");

  const setSetting = <K extends keyof SettingsState>(
    settingKey: K,
    value: SettingsState[K]
  ): void => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: value,
    }));
  };

  // Functions for handling interdependent updates to dimensions/aspectRatio
  const handleDimensionOption = (option: string) => {
    if (aspectRatioLocked) setAspectRatioLocked(false);
    const dimensions = parseDimension(option);
    if (!dimensions?.width || !dimensions?.height) return;
    setSetting(SETTINGS_KEY.ASPECT_RATIO_WIDTH, dimensions.width);
    setSetting(SETTINGS_KEY.ASPECT_RATIO_HEIGHT, dimensions.height);
  };

  const handleAspectRatioOptionClick = (option: AspectRatioKey) => {
    const result = defaultAspectRatioConversion[option];
    if (!result) return;
    setAspectRatio(option);
    setSetting(SETTINGS_KEY.ASPECT_RATIO_WIDTH, result.width);
    setSetting(SETTINGS_KEY.ASPECT_RATIO_HEIGHT, result.height);
  };

  const handleLockedAspectRatio = (
    dimension: InputDimension,
    value: number
  ) => {
    if (dimension === SETTINGS_KEY.ASPECT_RATIO_WIDTH) {
      const correspondingHeight = calculateProportionalHeight(
        aspectRatio,
        value
      );
      setSetting(SETTINGS_KEY.ASPECT_RATIO_WIDTH, value);
      setSetting(SETTINGS_KEY.ASPECT_RATIO_HEIGHT, correspondingHeight);
    } else {
      const correspondingWidth = calculateProportionalHeight(
        aspectRatio,
        value
      );
      setSetting(SETTINGS_KEY.ASPECT_RATIO_HEIGHT, value);
      setSetting(SETTINGS_KEY.ASPECT_RATIO_WIDTH, correspondingWidth);
    }
  };

  const handleAspectRatioChange = (
    dimension: InputDimension,
    value: number
  ) => {
    if (aspectRatioLocked) handleLockedAspectRatio(dimension, value);
    else setSetting(dimension, value);
  };

  // Functions for updating interdependent states (photoReal, alchemy, promptMagic)
  const enablePhotoRealWithCoupledState = () => {
    if (!settings.alchemy) setSetting(SETTINGS_KEY.ALCHEMY, true);
    if (settings.promptMagic) setSetting(SETTINGS_KEY.PROMPT_MAGIC, false);
    setSetting(SETTINGS_KEY.PHOTO_REAL, true);
  };

  const disableAlchemyWithCoupledState = () => {
    if (settings.photoReal) setSetting(SETTINGS_KEY.PHOTO_REAL, false);
    setSetting(SETTINGS_KEY.ALCHEMY, false);
  };

  const enableAlchemyWithCoupledState = () => {
    if (settings.promptMagic) setSetting(SETTINGS_KEY.PROMPT_MAGIC, false);
    setSetting(SETTINGS_KEY.ALCHEMY, true);
  };

  const handleAlchemy = (toggleOn: boolean) => {
    if (toggleOn) enableAlchemyWithCoupledState();
    else disableAlchemyWithCoupledState();
  };

  const handlePhotoReal = (toggleOn: boolean) => {
    if (toggleOn) enablePhotoRealWithCoupledState();
    else setSetting(SETTINGS_KEY.PHOTO_REAL, false);
  };

  // Reset SideBar state
  const handleReset = () => {
    setAspectRatioLocked(false);
    setSettings(defaultState);
  };

  const context = {
    settings,
    setSetting,
    handleAlchemy,
    handlePhotoReal,
    handleAspectRatioChange,
    handleDimensionOption,
    handleAspectRatioOptionClick,
    handleReset,
    aspectRatioLocked,
    setAspectRatioLocked,
  };

  return (
    <SettingsContext.Provider value={context}>
      {children}
    </SettingsContext.Provider>
  );
};
