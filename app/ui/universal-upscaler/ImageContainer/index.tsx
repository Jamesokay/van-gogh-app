"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import SliderView from "./SliderView";
import VariationView from "./VariationView";
import SideBySideView from "./SideBySideView";
import LeonardoIconGrey from "../../svg/LeonardoIconGrey";

const ImageContainer = () => {
  const { upscalerView, selectedUpscaleHistoryItem } = useUpscaler();
  if (!selectedUpscaleHistoryItem)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <LeonardoIconGrey />
      </div>
    );
  if (upscalerView === "slider")
    return <SliderView image={selectedUpscaleHistoryItem} />;
  else if (upscalerView === "variation")
    return <VariationView image={selectedUpscaleHistoryItem} />;
  else return <SideBySideView image={selectedUpscaleHistoryItem} />;
};

export default ImageContainer;
