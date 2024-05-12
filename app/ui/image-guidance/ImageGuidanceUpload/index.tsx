"use client";

import Switch from "../../components/Switch";
import { imageGuidanceStrings } from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
import UploadedImageComponent from "./UploadedImageComponent";
import ImageUploadInput from "./ImageUploadInput";
import { useRef } from "react";

const ImageGuidanceUpload = () => {
  const { setKeyOfGenerationRequest, interfaceState, setKeyOfInterfaceState } = useSettings();
  const inputRef = useRef<HTMLInputElement>(null);
  const text = imageGuidanceStrings.uploadStrings;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setKeyOfGenerationRequest('init_generation_image', reader.result);
        }
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    }
  };

  const openFileSystem = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col h-full bg-van-gogh-dark-blue-alt rounded-lg">
      <div
        className={`flex justify-between py-3.5 px-4 border border-t-0 border-r-0 border-b border-l-0 border-van-gogh-grey-blue ${
          interfaceState.enableImageGuidance ? "bg-darkblue-to-purple-gradient" : ""
        }`}
      >
        <div className="flex gap-3.5 text-van-gogh-sm">
          <div className="flex items-center justify-center w-5 h-5 bg-van-gogh-dark-blue rounded-md text-van-gogh-3xs">
            1
          </div>
          <p className="font-medium">{text.title}</p>
        </div>
        <Switch
          enabled={interfaceState.enableImageGuidance}
          handleToggle={() =>
            setKeyOfInterfaceState('enableImageGuidance', !interfaceState.enableImageGuidance)
          }
        />
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileChange}
      ></input>
      <ImageUploadInput openFileSystem={openFileSystem} />
      <UploadedImageComponent openFileSystem={openFileSystem} />
    </div>
  );
};

export default ImageGuidanceUpload;
