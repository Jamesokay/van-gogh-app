"use client";

import { createContext, useContext, useState } from "react";
import {
  AspectRatioKey,
  GenerationRequestState,
  InputDimension,
  InterfaceState,
  SettingsContextProps,
  SettingsProviderProps,
} from "../lib/definitions";
import { calculateProportionalHeight, parseDimension } from "../lib/helpers";
import { defaultAspectRatioConversion } from "../lib/dataConstants";

// State for the API request
const defaultGenerationRequest: GenerationRequestState = {
  alchemy: false,
  guidance_scale: 7,
  num_images: 4,
  photoReal: false,
  promptMagic: false,
  transparency: false,
  public: false,
  height: 1024,
  width: 768,
  tiling: false,
  prompt: "",
  negative_prompt: "",
  presetStyle: "LEONARDO",
  modelId: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
};

// State for user interface
const defaultInterfaceState: InterfaceState = {
  aspectRatioLocked: false,
  aspectRatio: "3:2",
  mobileSideBarExpanded: false,
  enableNegativePrompt: false,
  enableImageGuidance: false,
  enableSeed: false,
  generating: false,
  newGenerationId: '',
  deletedGenerationIds: []
};

const SettingsContext = createContext<SettingsContextProps>({
  generationRequest: defaultGenerationRequest,
  setKeyOfGenerationRequest: () => {},
  interfaceState: defaultInterfaceState,
  setKeyOfInterfaceState: () => {},
  handlePhotoReal: () => {},
  handleAlchemy: () => {},
  handleAspectRatioChange: () => {},
  handleDimensionOption: () => {},
  handleAspectRatioOptionClick: () => {},
  handleReset: () => {},
  clearImageGuidance: () => {}
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [generationRequest, setGenerationRequest] =
    useState<GenerationRequestState>(defaultGenerationRequest);
  const [interfaceState, setInterfaceState] = useState<InterfaceState>(
    defaultInterfaceState
  );

  const setKeyOfGenerationRequest = <K extends keyof GenerationRequestState>(
    key: K,
    value: GenerationRequestState[K]
  ): void => {
    setGenerationRequest((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setKeyOfInterfaceState = <K extends keyof InterfaceState>(
    key: K,
    value: InterfaceState[K]
  ): void => {
    setInterfaceState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Functions for handling interdependent updates to dimensions/aspectRatio
  const handleDimensionOption = (option: string) => {
    if (interfaceState.aspectRatioLocked)
      setKeyOfInterfaceState("aspectRatioLocked", false);
    const dimensions = parseDimension(option);
    if (!dimensions?.width || !dimensions?.height) return;
    setGenerationRequest((prev) => ({
      ...prev,
      width: dimensions.width,
      height: dimensions.height,
    }));
  };

  const handleAspectRatioOptionClick = (option: AspectRatioKey) => {
    const result = defaultAspectRatioConversion[option];
    if (!result) return;
    setKeyOfInterfaceState("aspectRatio", option);
    setGenerationRequest((prev) => ({
      ...prev,
      width: result.width,
      height: result.height,
    }));
  };

  const handleLockedAspectRatio = (
    dimension: InputDimension,
    value: number
  ) => {
    if (dimension === "width") {
      const correspondingHeight = calculateProportionalHeight(
        interfaceState.aspectRatio,
        value
      );
      setGenerationRequest((prev) => ({
        ...prev,
        width: value,
        height: correspondingHeight,
      }));
    } else {
      const correspondingWidth = calculateProportionalHeight(
        interfaceState.aspectRatio,
        value
      );
      setGenerationRequest((prev) => ({
        ...prev,
        height: value,
        width: correspondingWidth,
      }));
    }
  };

  const handleAspectRatioChange = (
    dimension: InputDimension,
    value: number
  ) => {
    if (interfaceState.aspectRatioLocked)
      handleLockedAspectRatio(dimension, value);
    else setKeyOfGenerationRequest(dimension, value);
  };

  // Functions for updating interdependent states (photoReal, alchemy, promptMagic)

  const handleAlchemy = (toggleOn: boolean) => {
    if (toggleOn) {
      if (generationRequest.promptMagic)
        setKeyOfGenerationRequest("promptMagic", false);
      setKeyOfGenerationRequest("alchemy", true);
    } else {
      if (generationRequest.photoReal)
        setKeyOfGenerationRequest("photoReal", false);
      setKeyOfGenerationRequest("alchemy", false);
    }
  };

  const handlePhotoReal = (toggleOn: boolean) => {
    if (toggleOn) {
      if (!generationRequest.alchemy)
        setKeyOfGenerationRequest("alchemy", true);
      if (generationRequest.promptMagic)
        setKeyOfGenerationRequest("promptMagic", false);
      setKeyOfGenerationRequest("photoReal", true);
    } else setKeyOfGenerationRequest("photoReal", false);
  };

  const clearImageGuidance = () => {
    setKeyOfInterfaceState("enableImageGuidance", false);
    setGenerationRequest((prev) => {
      const { init_generation_image, init_strength, init_image_id, ...rest } =
        prev;
      return { ...rest };
    });
  };

  // Reset SideBar state
  const handleReset = () => {
    setKeyOfInterfaceState("aspectRatioLocked", false);
    setGenerationRequest(defaultGenerationRequest);
  };

  const context = {
    generationRequest,
    setKeyOfGenerationRequest,
    interfaceState,
    setKeyOfInterfaceState,
    handleAlchemy,
    handlePhotoReal,
    handleAspectRatioChange,
    handleDimensionOption,
    handleAspectRatioOptionClick,
    handleReset,
    clearImageGuidance
  };

  return (
    <SettingsContext.Provider value={context}>
      {children}
    </SettingsContext.Provider>
  );
};
