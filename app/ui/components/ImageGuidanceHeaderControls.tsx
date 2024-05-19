"use client";

import { CloseIcon } from "@chakra-ui/icons";
import ImageToImageIcon from "../svg/ImageToImageIcon";
import RangeSlider from "./RangeSlider";
import { useSettings } from "@/app/context/SettingsContext";
import { IMAGE_GUIDANCE_STRENGTH } from "@/app/lib/definitions";
import { divideAndRound } from "@/app/lib/helpers";

const ImageGuidanceHeaderControls = () => {
  // To-do: mobile styles
  const { interfaceState, generationRequest, setKeyOfGenerationRequest, setKeyOfInterfaceState } =
    useSettings();
  return (
    <div
      className={
        interfaceState.enableImageGuidance
          ? "grid grid-cols-van-gogh-auto-fill-minmax-0-31 gap-3 w-full mb-4"
          : "hidden"
      }
    >
      <div className="flex w-full rounded-xl border border-[0.05rem] border-van-gogh-grey-600 p-1">
        <div className="flex w-full">
          <div className="flex w-[50%] bg-van-gogh-blue-500 py-1.5 px-2 gap-2 rounded-lg border border-[0.05rem] border-van-gogh-grey-800">
            <div className="h-[2.125rem] w-[2.125rem]">
              <img
                className="w-full h-full object-cover"
                alt="Image to Image"
                src={interfaceState.imageGuidanceSrc}
              ></img>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 items-center text-van-gogh-xs text-van-gogh-grey-700">
                <ImageToImageIcon />
                Image Guidance #1
              </div>
              <p className="text-van-gogh-sm font-medium">
                {interfaceState.imageGuidanceType}
              </p>
            </div>
          </div>
          <div className="flex w-[50%] gap-2 items-center py-1.5 px-2 ">
            <div className="flex flex-auto justify-center">
              <div className="flex flex-col w-full max-w-36 gap-1">
                <div className="flex justify-between text-van-gogh-sm">
                  <span>Strength</span>
                  <span className="font-medium bg-van-gogh-grey-250 py-0.5 px-3 rounded-full">
                    {divideAndRound(generationRequest.init_strength || 30).toFixed(2)}
                  </span>
                </div>
                <RangeSlider
                  value={
                    generationRequest.init_strength
                      ? generationRequest.init_strength
                      : 30
                  }
                  setValue={(x) =>
                    setKeyOfGenerationRequest("init_strength", x)
                  }
                  max={IMAGE_GUIDANCE_STRENGTH.MAX}
                  min={IMAGE_GUIDANCE_STRENGTH.MIN}
                  small={true}
                  purple={true}
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-6 h-6">
              <button className="flex p-[0.08rem] overflow-hidden rounded-full transition-all bg-van-gogh-grey-400 hover:bg-van-gogh-purple-gradient"
              onClick={() => setKeyOfInterfaceState("enableImageGuidance", false)}>
                <div className="flex bg-black p-[0.4rem] rounded-full">
                  <CloseIcon w={"0.4rem"} h={"0.4rem"} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGuidanceHeaderControls;
