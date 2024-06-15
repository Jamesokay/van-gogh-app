"use client";

import { createContext, useContext, useState } from "react";
import {
  ContextProviderProps,
  LeonardoUpscalerRequest,
  LocalUpscalerImage,
  UpscalerContextProps,
  UpscalerView,
} from "../lib/definitions";
import {
  defaultSelectedImage,
  defaultUpscalerRequest,
} from "../lib/dataConstants";

const UpscalerContext = createContext<UpscalerContextProps>({
  upscalerRequest: defaultUpscalerRequest,
  selectedImage: defaultSelectedImage,
  setSelectedImage: () => {},
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
  const [selectedImage, setSelectedImage] =
    useState<LocalUpscalerImage>(defaultSelectedImage);
  const [upscalerView, setUpscalerView] = useState<UpscalerView>("slider");

  const context = {
    upscalerRequest,
    setUpscalerRequest,
    selectedImage,
    setSelectedImage,
    upscalerView,
    setUpscalerView,
  };

  return (
    <UpscalerContext.Provider value={context}>
      {children}
    </UpscalerContext.Provider>
  );
};
