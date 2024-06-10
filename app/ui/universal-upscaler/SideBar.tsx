"use client";

import { Tooltip } from "@chakra-ui/react";
import RecentImagesDropdown from "../image-guidance/ImageGuidanceUpload/RecentImagesDropdown";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import SliderOption from "../components/SliderOption";
import { useState } from "react";
import AddImageIcon from "../svg/AddImageIcon";
import GradientBorderButton from "../components/GradientBorderButton";
import ResetIcon from "../svg/ResetIcon";
import CoinsIcon from "../svg/CoinsIcon";
import DropdownMenu from "../components/DropdownMenu";

const SideBar = () => {
  const upscalerStyles = [
    "GENERAL",
    "2D ART & ILLUSTRATION",
    "CINEMATIC",
    "CG ART & GAME ASSETS",
  ];
  // To-do: extract this to upscaler context
  const [upscalerRequest, setUpscalerRequest] = useState({
    // To-do: initImageId
    // To-do: variationId
    upscalerStyle: "GENERAL",
    creativityStrength: 8,
    upscaleMultiplier: 1.5,
    generatedImageId: "",
    prompt: "",
  });
  return (
    <div className="relative flex h-full bg-van-gogh-dark-blue-gradient">
      <div className="flex">
        <div className="relative ml-2.5 min-w-[21rem]">
          <form className="absolute top-0 left-0 w-full">
            <div className="flex flex-col w-full h-full pt-2.5 pb-6 px-2">
              <div className="flex flex-col gap-2 pb-4">
                <div className="flex items-center gap-2">
                  <p className="text-van-gogh-sm font-semibold">Source Image</p>
                  <Tooltip label="The original image to be upscaled. Click to upload or drag and drop your file.">
                    <span>
                      <QuestionMarkIcon />
                    </span>
                  </Tooltip>
                </div>
                <div className="relative flex flex-col gap-1 justify-center items-center w-full h-full min-h-[9.75rem] rounded-lg border border-van-gogh-grey-100 bg-van-gogh-blue-200">
                  <AddImageIcon />
                  <span className="text-van-gogh-sm font-medium">Add Image</span>
                </div>
                <div className="h-10 w-full">
                  <RecentImagesDropdown setValue={() => {}} images={[]} />
                </div>
                <button
                  className={`flex justify-center items-center relative h-10 w-full text-van-gogh-sm bg-van-gogh-purple-gradient px-12 rounded-lg 
              }`}
                >
                  <p className="font-semibold mr-2">Upscale</p>
                  <div className="flex">
                    <CoinsIcon white={true} />
                    <span>30</span>
                  </div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-semibold">Upscale Settings</p>
                  <Tooltip label="Adjust from below properties to manipulate the outcome of your upscale">
                    <span>
                      <QuestionMarkIcon />
                    </span>
                  </Tooltip>
                </div>
                <div className="flex h-8">
                  <GradientBorderButton
                    text="Reset"
                    classname="px-2.5"
                    icon={<ResetIcon />}
                  />
                </div>
              </div>
              <div className="pt-4">
                <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 opacity-60 mb-5" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <p className="text-van-gogh-sm font-medium">
                      Upscaler Style
                    </p>
                    <Tooltip label="Choose the preferred style for image enhancement. Different options can influence the final look and detail of the upscale.">
                      <span>
                        <QuestionMarkIcon />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="h-10 mb-4">
                    <DropdownMenu
                      value="General"
                      options={[]}
                      setValue={() => {}}
                      isDisabled={true}
                      headerTheme={false}
                      large={false}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <SliderOption
                    title="Creativity Strength"
                    tooltipText="Drag to slider to control the artistic intensity. Higher values yield more creativity, lower values keep closer to the source image."
                    setValue={(x) =>
                      setUpscalerRequest((prev) => ({
                        ...prev,
                        creativityStrength: x,
                      }))
                    }
                    value={upscalerRequest.creativityStrength}
                    min={1}
                    max={10}
                  />
                  <SliderOption
                    title="Upscale Multiplier"
                    tooltipText="Drag to slider to determine the final image size. A higher multiplier results in a larger, more detailed output."
                    setValue={(x) =>
                      setUpscalerRequest((prev) => ({
                        ...prev,
                        creativityStrength: x,
                      }))
                    }
                    value={upscalerRequest.creativityStrength}
                    min={1}
                    max={2}
                  />
                  <div className="flex items-center gap-2">
                    <p className="text-van-gogh-sm font-medium">
                      Upscale Dimensions
                    </p>
                    <Tooltip label="Set the desired size for the output, based on the original image's aspect ratio.">
                      <span>
                        <QuestionMarkIcon />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
