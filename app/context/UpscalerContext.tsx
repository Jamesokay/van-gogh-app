"use client";

import { createContext, useContext, useState } from "react";
import {
  ContextProviderProps,
  LeonardoUpscalerRequest,
  LocalUpscalerImage,
  UpscaledImage,
  UpscalerContextProps,
  UpscalerView,
} from "../lib/definitions";
import { defaultSourceImage, defaultUpscalerRequest } from "../lib/dataConstants";

const UpscalerContext = createContext<UpscalerContextProps>({
  upscalerRequest: defaultUpscalerRequest,
  selectedUpscaleHistoryItem: null,
  setSelectedUpscaleHistoryItem: () => {},
  newUpscaleSourceImage: defaultSourceImage,
  setNewUpscaleSourceImage: () => {},
  setUpscalerRequest: () => {},
  upscalerView: "slider",
  setUpscalerView: () => {},
});

export const useUpscaler = () => useContext(UpscalerContext);

export const UpscalerProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [upscalerRequest, setUpscalerRequest] =
    useState<LeonardoUpscalerRequest>(defaultUpscalerRequest);
  const [selectedUpscaleHistoryItem, setSelectedUpscaleHistoryItem] = useState<UpscaledImage | null>(
    null
  );
  const [newUpscaleSourceImage, setNewUpscaleSourceImage] = useState<LocalUpscalerImage>(defaultSourceImage);
  const [upscalerView, setUpscalerView] = useState<UpscalerView>("slider");

  const context = {
    upscalerRequest,
    setUpscalerRequest,
    selectedUpscaleHistoryItem,
    setSelectedUpscaleHistoryItem,
    newUpscaleSourceImage,
    setNewUpscaleSourceImage,
    upscalerView,
    setUpscalerView,
  };

  return (
    <UpscalerContext.Provider value={context}>
      {children}
    </UpscalerContext.Provider>
  );
};
