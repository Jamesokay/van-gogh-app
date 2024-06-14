"use client";

import { createContext, useContext, useState } from "react";
import {
  ContextProviderProps,
  LeonardoUpscalerRequest,
  LocalUpscalerImage,
  UpscalerContextProps,
} from "../lib/definitions";
import { defaultSelectedImage, defaultUpscalerRequest } from "../lib/dataConstants";

const UpscalerContext = createContext<UpscalerContextProps>({
  upscalerRequest: defaultUpscalerRequest,
  selectedImage: defaultSelectedImage,
  setSelectedImage: () => {},
  setUpscalerRequest: () => {},
});

export const useUpscaler = () => useContext(UpscalerContext);

export const UpscalerProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [upscalerRequest, setUpscalerRequest] =
    useState<LeonardoUpscalerRequest>(defaultUpscalerRequest);
  const [selectedImage, setSelectedImage] = useState<LocalUpscalerImage>(defaultSelectedImage);

  const context = {
    upscalerRequest,
    setUpscalerRequest,
    selectedImage,
    setSelectedImage
  };

  return (
    <UpscalerContext.Provider value={context}>
      {children}
    </UpscalerContext.Provider>
  );
};
