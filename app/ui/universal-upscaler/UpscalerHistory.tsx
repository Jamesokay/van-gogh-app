"use client";

import { AddIcon } from "@chakra-ui/icons";
import OutlineButton from "../components/OutlineButton";
import SelectImagesIcon from "../svg/SelectImagesIcon";
import { Tooltip } from "@chakra-ui/react";
import SliderViewIcon from "../svg/SliderViewIcon";
import VariationViewIcon from "../svg/VariationViewIcon";
import SideBySideViewIcon from "../svg/SideBySideViewIcon";
import { useUpscaler } from "@/app/context/UpscalerContext";

const UpscalerHistory = () => {
  const { upscalerView, setUpscalerView } = useUpscaler();

  return (
    <div className="max-h-[5.625rem] grid grid-cols-van-gogh-auto-1.25 gap-2 flex-auto p-2 border border-van-gogh-grey-800 rounded-t-lg bg-van-gogh-blue-200">
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
      <div className="flex w-full"></div>
      <div className="flex flex-col gap-1.5">
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
