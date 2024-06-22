"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import SliderView from "./SliderView";
import VariationView from "./VariationView";
import SideBySideView from "./SideBySideView";
import DefaultView from "./DefaultView";
import PendingUpscaleView from "./PendingUpscaleView";

const ImageContainer = () => {
  const { upscalerView, newUpscaleSourceImage, selectedUpscaleHistoryItem } =
    useUpscaler();
  if (!newUpscaleSourceImage.src) return <DefaultView />;
  if (!selectedUpscaleHistoryItem) return <PendingUpscaleView />;
  if (upscalerView === "slider")
    return <SliderView image={selectedUpscaleHistoryItem} />;
  else if (upscalerView === "variation")
    return <VariationView image={selectedUpscaleHistoryItem} />;
  else return <SideBySideView image={selectedUpscaleHistoryItem} />;
};

export default ImageContainer;
