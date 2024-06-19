"use client";

import { AddIcon } from "@chakra-ui/icons";
import OutlineButton from "../components/OutlineButton";
import SelectImagesIcon from "../svg/SelectImagesIcon";
import { Tooltip } from "@chakra-ui/react";
import SliderViewIcon from "../svg/SliderViewIcon";
import VariationViewIcon from "../svg/VariationViewIcon";
import SideBySideViewIcon from "../svg/SideBySideViewIcon";
import { useUpscaler } from "@/app/context/UpscalerContext";
import { UpscaledImage } from "@/app/lib/definitions";
import { sampleUpscalesArray } from "@/app/lib/dataConstants";

const UpscalerHistory = () => {
  const {
    upscalerView,
    setUpscalerView,
    // setUpscalerRequest,
    setNewUpscaleSourceImage,
    selectedUpscaleHistoryItem,
    setSelectedUpscaleHistoryItem,
  } = useUpscaler();

  // To-do:
  // Logic for fetching upscale history

  const handleSelect = (image: UpscaledImage) => {
    setSelectedUpscaleHistoryItem(image);
    setNewUpscaleSourceImage((prev) => ({
      ...prev,
      src: image.sourceImage.url,
    }));
    // To-do:
    // syncing ids with Leonardo?
    // syncing the id for the UpscaledImage with the original generation entry?
    // setUpscalerRequest((prev) => ({ ...prev, generatedImageId: image.id }));
    // setUpscalerRequest to reflect upscaleDetails
  };

  return (
    <div className="sticky bottom-0 max-h-[5.625rem] grid grid-cols-van-gogh-auto-1.25 gap-2 flex-auto p-2 border border-van-gogh-grey-800 rounded-t-lg bg-van-gogh-blue-200">
      <div className="flex flex-col gap-1">
        <Tooltip label="Select images" placement="right-end">
          <span>
            <OutlineButton disabled={false} small>
              <SelectImagesIcon />
            </OutlineButton>
          </span>
        </Tooltip>
        <Tooltip label="Add image" placement="right-end">
          <span>
            <OutlineButton disabled={false} small>
              <AddIcon w={2.5} h={2.5} />
            </OutlineButton>
          </span>
        </Tooltip>
      </div>
      <div className="flex w-full items-center">
        {sampleUpscalesArray.map((upscale) => (
          <div
            key={upscale.id}
            role="button"
            className={`${
              selectedUpscaleHistoryItem?.id === upscale.id
                ? "selected-image-with-border"
                : "image-with-border"
            } relative border-transparent flex border-[1px] w-[52px] h-[52px] rounded-md overflow-hidden`}
            onClick={() => handleSelect(upscale)}
          >
            <div className="absolute w-full h-full bg-van-gogh-black-opal-400 z-20 rounded-md transition-all opacity-0 hover:opacity-100" />
            <img
              src={upscale.sourceImage.url}
              alt="Generated image"
              className="rounded-md object-cover absolute z-10 rounded-md w-full h-full"
            />
          </div>
        ))}
      </div>
      <div
        className={`flex flex-col gap-1.5 transition-all ${
          selectedUpscaleHistoryItem ? "opacity-100" : "opacity-0"
        }`}
      >
        <Tooltip label="Show slider view" placement="left-start">
          <span>
            <button
              className={`flex hover:text-van-gogh-purple-300 ${
                upscalerView === "slider"
                  ? "text-van-gogh-purple-300"
                  : "text-van-gogh-icon-grey-extra-light"
              }`}
              onClick={() => setUpscalerView("slider")}
            >
              <SliderViewIcon />
            </button>
          </span>
        </Tooltip>
        <Tooltip label="Show variation view" placement="left-start">
          <span>
            <button
              className={`flex hover:text-van-gogh-purple-300 ${
                upscalerView === "variation"
                  ? "text-van-gogh-purple-300"
                  : "text-van-gogh-icon-grey-extra-light"
              }`}
              onClick={() => setUpscalerView("variation")}
            >
              <VariationViewIcon />
            </button>
          </span>
        </Tooltip>
        <Tooltip label="Show side by side view" placement="left-start">
          <span>
            <button
              className={`flex hover:text-van-gogh-purple-300 ${
                upscalerView === "sideBySide"
                  ? "text-van-gogh-purple-300"
                  : "text-van-gogh-icon-grey-extra-light"
              }`}
              onClick={() => setUpscalerView("sideBySide")}
            >
              <SideBySideViewIcon />
            </button>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default UpscalerHistory;
