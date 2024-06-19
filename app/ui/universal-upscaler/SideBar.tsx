"use client";

import { Input, Tooltip } from "@chakra-ui/react";
import RecentImagesDropdown from "../image-guidance/ImageGuidanceUpload/RecentImagesDropdown";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import SliderOption from "../components/SliderOption";
import { useRef } from "react";
import AddImageIcon from "../svg/AddImageIcon";
import GradientBorderButton from "../components/GradientBorderButton";
import ResetIcon from "../svg/ResetIcon";
import CoinsIcon from "../svg/CoinsIcon";
import DropdownMenu from "../components/DropdownMenu";
import DimensionLinkIcon from "../svg/DimensionLinkIcon";
import TitleWithTooltip from "../svg/TitleWithTooltip";
// import { getPresignedUrl, uploadImageViaPresignedURL } from "@/app/lib/actions";
import { CloseIcon } from "@chakra-ui/icons";
import { GeneratedImage, LeonardoUpscalerStyle } from "@/app/lib/definitions";
import { useUpscaler } from "@/app/context/UpscalerContext";
import {
  defaultSourceImage,
  defaultUpscalerRequest,
} from "@/app/lib/dataConstants";
import {
  convertStringToUpscalerStyle,
  convertUpscalerStyleToString,
  isDefaultUpscalerRequest,
} from "@/app/lib/helpers";

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
  const upscalerStyles: LeonardoUpscalerStyle[] = [
    "GENERAL",
    "2D ART & ILLUSTRATION",
    "CINEMATIC",
    "CG ART & GAME ASSETS",
  ];

  const inputRef = useRef<HTMLInputElement>(null);

  const readFileToLocalState = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setNewUpscaleSourceImage((prev) => ({
          ...prev,
          src: reader.result as string,
        }));
      }
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  const handleReset = () => {
    setUpscalerRequest((prev) => ({
      ...defaultUpscalerRequest,
      initImageId: prev.initImageId,
      generatedImageId: prev.generatedImageId,
    }));
  };

  const handleClearImage = () => {
    if (selectedUpscaleHistoryItem) setSelectedUpscaleHistoryItem(null);
    setNewUpscaleSourceImage(defaultSourceImage);
    setUpscalerRequest(defaultUpscalerRequest);
  };

  const uploadFileToAPI = async (file: File) => {
    console.log("upload to API");
    // try {
    //   const details = await getPresignedUrl();
    //   if (!details?.url || !details?.fields) return;
    //   const { url, fields, id } = details;
    //   const parsedFields = JSON.parse(fields);
    //   const formData = new FormData();
    //   for (const key in parsedFields) {
    //     formData.append(key, parsedFields[key]);
    //   }
    //   formData.append("file", file);

    //   await uploadImageViaPresignedURL(formData, url);
    //   setUpscalerRequest((prev) => ({
    //     ...prev,
    //     initImageId: id,
    //     generatedImageId: null,
    //   }));
    // } catch (err) {
    //   console.error("Error during upload process:", err);
    // }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      readFileToLocalState(file);
      uploadFileToAPI(file);
    }
  };

  const openFileSystem = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleImageLoaded = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setNewUpscaleSourceImage((prev) => ({
      ...prev,
      width: naturalWidth,
      height: naturalHeight,
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
                {/* To-do: dropdown if selectedUpscaleHistoryItem */}
                <div className="flex justify-between items-center">
                  <TitleWithTooltip
                    title="Source Image"
                    tooltip="The original image to be upscaled. Click to upload or drag and drop your file."
                  />
                  <p
                    className={
                      newUpscaleSourceImage.src
                        ? "text-van-gogh-xs text-van-gogh-grey-700"
                        : "hidden"
                    }
                  >{`${newUpscaleSourceImage.width}x${newUpscaleSourceImage.height}`}</p>
                </div>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  className={
                    newUpscaleSourceImage.src
                      ? "hidden"
                      : "relative flex flex-col gap-1 justify-center items-center w-full h-full min-h-[9.75rem] rounded-lg border border-van-gogh-grey-100 bg-van-gogh-blue-200 transition-all hover:bg-van-gogh-blue-800"
                  }
                  onClick={() => openFileSystem()}
                >
                  <AddImageIcon className="w-10 h-10" />
                  <span className="text-van-gogh-sm font-medium">
                    Add Image
                  </span>
                </button>
                <div
                  className={
                    newUpscaleSourceImage.src ? "relative flex" : "hidden"
                  }
                >
                  <button
                    className="absolute right-2 top-2 rounded-full flex items-center p-2.5 bg-van-gogh-black-opal-400 transition-all hover:bg-van-gogh-black-opal-600"
                    onClick={() => handleClearImage()}
                  >
                    <CloseIcon w={3} h={3.5} />
                  </button>
                  <img
                    src={newUpscaleSourceImage.src}
                    alt="Image to be upscaled"
                    onLoad={handleImageLoaded}
                  />
                </div>
                <div className="flex h-10 w-full gap-2">
                  <RecentImagesDropdown
                    setValue={(x) => handleRecentImageSelect(x)}
                    variant="upscalerRecentImagesMenu"
                    showReplaceButton={!!newUpscaleSourceImage.src}
                  />
                </div>
                <button
                  className={`flex justify-center items-center relative h-10 w-full text-van-gogh-sm bg-van-gogh-purple-gradient px-12 rounded-lg transition-all hover:shadow-van-gogh-purple-glow ${
                    disabled ? "grayscale opacity-30 cursor-not-allowed" : ""
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
                    <div className="flex items-center">
                      <div className="flex pr-2">
                        <div className="flex h-10 w-full relative select-none">
                          <p className="h-10 mr-4 flex items-center justify-center text-van-gogh-sm font-medium">
                            W
                          </p>
                          <p className="flex items-center justify-center text-center font-semibold h-full text-van-gogh-xs py-4 mr-2 min-w-8">
                            {Math.round(
                              newUpscaleSourceImage.width *
                                upscalerRequest.upscaleMultiplier
                            )}
                          </p>
                          <p className="h-10 flex items-center justify-center font-medium text-van-gogh-xs">
                            px
                          </p>
                        </div>
                      </div>
                      <DimensionLinkIcon />
                      <div className="flex pl-2">
                        <div className="flex h-10 w-full relative select-none">
                          <p className="h-10 mr-4 flex items-center justify-center text-van-gogh-sm font-medium">
                            H
                          </p>
                          <p className="flex items-center justify-center text-center font-semibold h-full text-van-gogh-xs py-4 mr-2 min-w-8">
                            {Math.round(
                              newUpscaleSourceImage.height *
                                upscalerRequest.upscaleMultiplier
                            )}
                          </p>
                          <p className="h-10 flex items-center justify-center font-medium text-van-gogh-xs">
                            px
                          </p>
                        </div>
                      </div>
                    </div>
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
