"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import SliderView from "./SliderView";
import VariationView from "./VariationView";
import SideBySideView from "./SideBySideView";
import LeonardoIconGrey from "../../svg/LeonardoIconGrey";
import AddImagesAnimatedIcon from "../../svg/AddImagesAnimatedIcon";
import GradientBorderButton from "../../components/GradientBorderButton";

const ImageContainer = () => {
  const { upscalerView, newUpscaleSourceImage, selectedUpscaleHistoryItem } =
    useUpscaler();
  if (!newUpscaleSourceImage.src)
    return (
      <div className="flex items-center justify-center w-full h-full bg-van-gogh-extra-dark-blue-gradient">
        <div className="flex flex-col items-center gap-3 cursor-pointer">
          <AddImagesAnimatedIcon />
          <p className="font-medium"><span className="van-gogh-gradient-text">Add an image</span> to get started</p>
          <GradientBorderButton text="Add an image" classname="py-2 px-4 text-van-gogh-md font-medium"/>
        </div>
      </div>
    );
  if (!selectedUpscaleHistoryItem)
    return (
      <div className="flex items-center justify-center w-full h-full bg-van-gogh-input-black">
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
