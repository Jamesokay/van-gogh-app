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
  fixedSeed: null,
  prompt: "",
  enableNegativePrompt: false,
  negativePrompt: "",
  modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
  imageStyle: "Dynamic",
  imageGuidance: false,
  credits: 150,
  // Note: imageGuidanceSrc will be a base64 encoded string.
  // Unsure of whether keeping this in Context is a performance concern,
  // but just rolling with it for now.
  // Once db is implemented, can probably add some auto-upload on image selection,
  // then just use the hosted src here instead.
  imageGuidanceSrc: "",
  imageGuidanceType: "Image to Image",
  imageGuidanceStrength: 30,
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
  clearImageGuidance: () => {},
  mobileSideBarExpanded: false,
  setMobileSideBarExpanded: () => {}
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState<SettingsState>(defaultState);
  const [aspectRatioLocked, setAspectRatioLocked] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioKey>("3:2");
  const [mobileSideBarExpanded, setMobileSideBarExpanded] = useState(false);

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
    setSettings((prev) => ({
      ...prev,
      [SETTINGS_KEY.ASPECT_RATIO_WIDTH]: dimensions.width,
      [SETTINGS_KEY.ASPECT_RATIO_HEIGHT]: dimensions.height,
    }));
  };

  const handleAspectRatioOptionClick = (option: AspectRatioKey) => {
    const result = defaultAspectRatioConversion[option];
    if (!result) return;
    setAspectRatio(option);
    setSettings((prev) => ({
      ...prev,
      [SETTINGS_KEY.ASPECT_RATIO_WIDTH]: result.width,
      [SETTINGS_KEY.ASPECT_RATIO_HEIGHT]: result.height,
    }));
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
      setSettings((prev) => ({
        ...prev,
        [SETTINGS_KEY.ASPECT_RATIO_WIDTH]: value,
        [SETTINGS_KEY.ASPECT_RATIO_HEIGHT]: correspondingHeight,
      }));
    } else {
      const correspondingWidth = calculateProportionalHeight(
        aspectRatio,
        value
      );
      setSettings((prev) => ({
        ...prev,
        [SETTINGS_KEY.ASPECT_RATIO_HEIGHT]: value,
        [SETTINGS_KEY.ASPECT_RATIO_WIDTH]: correspondingWidth,
      }));
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

  const handleAlchemy = (toggleOn: boolean) => {
    if (toggleOn) {
      if (settings.promptMagic) setSetting(SETTINGS_KEY.PROMPT_MAGIC, false);
      setSetting(SETTINGS_KEY.ALCHEMY, true);
    } else {
      if (settings.photoReal) setSetting(SETTINGS_KEY.PHOTO_REAL, false);
      setSetting(SETTINGS_KEY.ALCHEMY, false);
    }
  };

  const handlePhotoReal = (toggleOn: boolean) => {
    if (toggleOn) {
      if (!settings.alchemy) setSetting(SETTINGS_KEY.ALCHEMY, true);
      if (settings.promptMagic) setSetting(SETTINGS_KEY.PROMPT_MAGIC, false);
      setSetting(SETTINGS_KEY.PHOTO_REAL, true);
    } else setSetting(SETTINGS_KEY.PHOTO_REAL, false);
  };

  const clearImageGuidance = () => {
    setSettings((prev) => ({
      ...prev,
      [SETTINGS_KEY.IMAGE_GUIDANCE_SRC]: "",
      [SETTINGS_KEY.IMAGE_GUIDANCE_STRENGTH]: 30,
    }));
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
    clearImageGuidance,
    mobileSideBarExpanded,
    setMobileSideBarExpanded
  };

  return (
    <SettingsContext.Provider value={context}>
      {children}
    </SettingsContext.Provider>
  );
};
