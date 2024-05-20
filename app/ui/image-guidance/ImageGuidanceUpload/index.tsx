"use client";

import Switch from "../../components/Switch";
import { imageGuidanceStrings } from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
import UploadedImageComponent from "./UploadedImageComponent";
import ImageUploadInput from "./ImageUploadInput";
import { FC, useRef } from "react";
import { Tooltip } from "@chakra-ui/react";
import { LeonardoGeneratedImage } from "@/app/lib/definitions";
import { getPresignedUrl, uploadImageViaPresignedURL } from "@/app/lib/actions";

const ImageGuidanceUpload: FC<{ recentImages: LeonardoGeneratedImage[] }> = ({
  recentImages,
}) => {
  const {
    generationRequest,
    setKeyOfGenerationRequest,
    interfaceState,
    setKeyOfInterfaceState,
  } = useSettings();
  const inputRef = useRef<HTMLInputElement>(null);
  const text = imageGuidanceStrings.uploadStrings;
  const noImageProvided =
    !generationRequest.init_generation_image_id &&
    !generationRequest.init_image_id;

  const readFileToLocalState = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        if (!interfaceState.enableImageGuidance) {
          setKeyOfInterfaceState("enableImageGuidance", true);
        }
        setKeyOfInterfaceState("imageGuidanceSrc", reader.result);
      }
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };


  const uploadFileToAPI = async (file: File) => {
    try {
      const details = await getPresignedUrl();
      if (!details?.url || !details?.fields) return;
      const { url, fields, id } = details;
      const parsedFields = JSON.parse(fields);
      const formData = new FormData();
      for (const key in parsedFields) {
        formData.append(key, parsedFields[key]);
      }
      formData.append('file', file);
  
      await uploadImageViaPresignedURL(formData, url);
      setKeyOfGenerationRequest("init_image_id", id);
      setKeyOfGenerationRequest("init_generation_image_id", null);
    } catch (err) {
      console.error("Error during upload process:", err);
    }
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

  const handleToggle = () => {
    if (noImageProvided) return;
    setKeyOfInterfaceState(
      "enableImageGuidance",
      !interfaceState.enableImageGuidance
    );
  };

  return (
    <div className="flex flex-col h-full bg-van-gogh-blue-700 rounded-lg">
      <div
        className={`flex justify-between py-3.5 px-4 border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-800 ${
          interfaceState.enableImageGuidance
            ? "bg-van-gogh-blue-to-purple-gradient"
            : ""
        }`}
      >
        <div className="flex gap-3.5 text-van-gogh-sm">
          <div className="flex items-center justify-center w-5 h-5 bg-van-gogh-blue-500 rounded-md text-van-gogh-3xs">
            1
          </div>
          <p className="font-medium">{text.title}</p>
        </div>
        <Tooltip label={noImageProvided ? "Upload an image to begin" : ""}>
          <span className="flex">
            <Switch
              enabled={interfaceState.enableImageGuidance}
              handleToggle={handleToggle}
              inactive={noImageProvided}
            />
          </span>
        </Tooltip>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileChange}
      ></input>
      <ImageUploadInput
        recentImages={recentImages}
        openFileSystem={openFileSystem}
      />
      <UploadedImageComponent openFileSystem={openFileSystem} />
    </div>
  );
};

export default ImageGuidanceUpload;
