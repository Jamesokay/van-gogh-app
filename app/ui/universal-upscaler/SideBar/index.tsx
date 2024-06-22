"use client";

import { Input } from "@chakra-ui/react";
import RecentImagesDropdown from "../../image-guidance/ImageGuidanceUpload/RecentImagesDropdown";
import SliderOption from "../../components/SliderOption";
import AddImageIcon from "../../svg/AddImageIcon";
import GradientBorderButton from "../../components/GradientBorderButton";
import ResetIcon from "../../svg/ResetIcon";
import DropdownMenu from "../../components/DropdownMenu";
import TitleWithTooltip from "../../svg/TitleWithTooltip";
import { GeneratedImage } from "@/app/lib/definitions";
import { useUpscaler } from "@/app/context/UpscalerContext";
import {
  defaultUpscalerRequest,
  upscalerStyles,
} from "@/app/lib/dataConstants";
import {
  convertStringToUpscalerStyle,
  convertUpscalerStyleToString,
  isDefaultUpscalerRequest,
} from "@/app/lib/helpers";
import DimensionDisplay from "../../components/DimensionDisplay";
import UpscalerUpload from "./UpscalerUpload";
import VariantDropdownMenu from "./VariantDropdownMenu";
import UpscalerImage from "./UpscalerImage";
import UpscaleButton from "./UpscaleButton";

const SideBar = () => {
  const {
    upscalerRequest,
    selectedUpscaleHistoryItem,
    newUpscaleSourceImage,
    setUpscalerRequest,
    setSelectedUpscaleHistoryItem,
    setNewUpscaleSourceImage,
  } = useUpscaler();
  const disabled =
    !upscalerRequest.generatedImageId && !upscalerRequest.initImageId;
  const disableReset = isDefaultUpscalerRequest(upscalerRequest);

  const handleReset = () => {
    setUpscalerRequest((prev) => ({
      ...defaultUpscalerRequest,
      initImageId: prev.initImageId,
      generatedImageId: prev.generatedImageId,
    }));
  };

  const handleRecentImageSelect = (image: GeneratedImage) => {
    if (selectedUpscaleHistoryItem) setSelectedUpscaleHistoryItem(null);
    setNewUpscaleSourceImage((prev) => ({ ...prev, src: image.url }));
    setUpscalerRequest((prev) => ({ ...prev, generatedImageId: image.id }));
  };

  return (
    <div className="relative flex h-full bg-van-gogh-dark-blue-gradient border-r border-van-gogh-grey-100">
      <div className="flex">
        <div className="relative ml-2.5 min-w-[21rem] overflow-y-auto overflow-x-hidden">
          <div className="absolute top-0 left-0 w-full">
            <div className="flex flex-col w-full h-full pt-2.5 pb-6 px-2">
              <div className="flex flex-col gap-2.5 pb-4">
                <div className="flex justify-between items-center">
                  <TitleWithTooltip
                    title="Source Image"
                    tooltip="The original image to be upscaled. Click to upload or drag and drop your file."
                  />
                  <p
                    className={
                      newUpscaleSourceImage.src && !selectedUpscaleHistoryItem
                        ? "text-van-gogh-xs text-van-gogh-grey-700"
                        : "hidden"
                    }
                  >{`${newUpscaleSourceImage.width}x${newUpscaleSourceImage.height}`}</p>
                </div>
                <div className={selectedUpscaleHistoryItem ? "flex" : "hidden"}>
                  <VariantDropdownMenu />
                </div>
                <UpscalerUpload>
                  <div
                    className={
                      newUpscaleSourceImage.src
                        ? "hidden"
                        : "relative flex flex-col gap-1 justify-center items-center w-full h-full min-h-[9.75rem] rounded-lg border border-van-gogh-grey-100 bg-van-gogh-blue-200 transition-all hover:bg-van-gogh-blue-800"
                    }
                  >
                    <AddImageIcon className="w-10 h-10" />
                    <span className="text-van-gogh-sm font-medium">
                      Add Image
                    </span>
                  </div>
                </UpscalerUpload>
                <UpscalerImage />
                <div className="flex h-10 w-full gap-2">
                  <RecentImagesDropdown
                    setValue={(x) => handleRecentImageSelect(x)}
                    variant="upscalerRecentImagesMenu"
                    showReplaceButton={!!newUpscaleSourceImage.src}
                  />
                </div>
                <UpscaleButton disabled={disabled} />
              </div>
              <div className="flex items-center justify-between">
                <TitleWithTooltip
                  title="Upscale Settings"
                  tooltip="Adjust from below properties to manipulate the outcome of your upscale"
                  large
                />
                <div className="flex h-8">
                  <GradientBorderButton
                    text="Reset"
                    classname="px-2.5"
                    icon={<ResetIcon />}
                    onClick={() => handleReset()}
                    disabled={disableReset}
                  />
                </div>
              </div>
              <div className="pt-4">
                <hr className="w-full border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 opacity-60 mb-5" />
                <div className="flex flex-col gap-1">
                  <TitleWithTooltip
                    title="Upscaler Style"
                    tooltip="Choose the preferred style for image enhancement. Different options can influence the final look and detail of the upscale."
                  />
                  <div className="h-10 mb-4">
                    <DropdownMenu
                      value={convertUpscalerStyleToString(
                        upscalerRequest.upscalerStyle
                      )}
                      options={upscalerStyles.map((style) =>
                        convertUpscalerStyleToString(style)
                      )}
                      setValue={(x) =>
                        setUpscalerRequest((prev) => ({
                          ...prev,
                          upscalerStyle: convertStringToUpscalerStyle(x),
                        }))
                      }
                      isDisabled={disabled}
                      headerTheme={false}
                      large={true}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <SliderOption
                    title="Creativity Strength"
                    tooltipText="Drag to slider to control the artistic intensity. Higher values yield more creativity, lower values keep closer to the source image."
                    setValue={(x) => {
                      setUpscalerRequest((prev) => ({
                        ...prev,
                        creativityStrength: x,
                      }));
                    }}
                    value={upscalerRequest.creativityStrength}
                    min={1}
                    max={10}
                    disabled={disabled}
                  />
                  <SliderOption
                    title="Upscale Multiplier"
                    tooltipText="Drag to slider to determine the final image size. A higher multiplier results in a larger, more detailed output."
                    setValue={(x) => {
                      setUpscalerRequest((prev) => ({
                        ...prev,
                        upscaleMultiplier: x,
                      }));
                    }}
                    value={upscalerRequest.upscaleMultiplier}
                    min={1}
                    max={2}
                    disabled={disabled}
                    enhanceGranularity
                  />
                  <TitleWithTooltip
                    title="Upscale Dimensions"
                    tooltip="Set the desired size for the output, based on the original image's aspect ratio."
                  />
                  <div className="flex items-center justify-between px-2">
                    <DimensionDisplay
                      height={Math.round(
                        newUpscaleSourceImage.height *
                          upscalerRequest.upscaleMultiplier
                      )}
                      width={Math.round(
                        newUpscaleSourceImage.width *
                          upscalerRequest.upscaleMultiplier
                      )}
                    />
                    <div className="flex">
                      <p className="text-van-gogh-xs font-medium mr-4">3.15</p>
                      <p className="text-van-gogh-xs font-medium pr-2">MP</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <TitleWithTooltip
                      title="Prompt Guidance (Optional)"
                      tooltip="Optionally add a short prompt describing the image to help guide the upscaler. At higher creativity strengths, this may have undesirable effects and cause more hallucinations."
                    />
                    <Input
                      variant="promptGuidanceInput"
                      type="text"
                      placeholder="Type a prompt..."
                      value={upscalerRequest.prompt || ""}
                      onChange={(e) => {
                        setUpscalerRequest((prev) => ({
                          ...prev,
                          prompt: e.target.value,
                        }));
                      }}
                      disabled={disabled}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
