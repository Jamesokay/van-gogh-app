"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import SliderView from "./SliderView";
import VariationView from "./VariationView";
import SideBySideView from "./SideBySideView";

const ImageContainer = () => {
  const { upscalerView } = useUpscaler();
  if (upscalerView === "slider") return <SliderView />;
  else if (upscalerView === "variation") return <VariationView />;
  else return <SideBySideView />;
};

export default ImageContainer;
