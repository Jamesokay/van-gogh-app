import UploadIcon from "../svg/UploadIcon";
import DropdownMenu from "../components/DropdownMenu";
import Switch from "../components/Switch";
import { imageGuidanceStrings } from "@/app/lib/stringConstants";
import { useSettings } from "@/app/context/SettingsContext";
import { SETTINGS_KEY } from "@/app/lib/definitions";
import { useRef, useState } from "react";
import { QuestionIcon } from "@chakra-ui/icons";
import Image from "next/image";
import RangeSlider from "../components/RangeSlider";

const ImageGuidanceUpload = () => {
  const { settings, setSetting } = useSettings();
  // Temporary state for testing upload functionality
  const [base64Image, setBase64Image] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const text = imageGuidanceStrings.uploadStrings;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setBase64Image(reader.result);
          console.log(reader.result);
        }
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    }
  };

  const UploadedImageComponent = () => {
    // Wireframe for version of component to display after image uploaded
    return (
      <div className="flex gap-6 py-2.5 px-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1">
            <p className="text-van-gogh-xs">Image Source</p>
            <QuestionIcon />
          </div>
          <div>
            <Image src={base64Image} alt="" />
          </div>
        </div>
        <div className="flex gap-6 py-2.5 px-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-1">
              <p>Type</p>
              <QuestionIcon />
            </div>
            <DropdownMenu
              options={[]}
              value="Image to Image"
              setValue={() => {}}
              align="left"
              isDisabled={false}
              headerTheme={false}
            />
          </div>
          <div className="flex flex-col">
            <p>Description</p>
            <p>
              Detects the color pattern, and the overall entire look view of an
              input image, and will use this to guide your image generations
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <p>Strength</p>
                <QuestionIcon />
              </div>
              <p>0.30</p>
            </div>
            <div className="w-full">
              <RangeSlider value={50} setValue={() => {}} max={100} min={0} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-van-gogh-dark-blue-alt rounded-lg">
      <div className="flex justify-between py-3.5 px-4">
        <div className="flex gap-3.5 text-van-gogh-sm">
          <div className="flex items-center justify-center w-5 h-5 bg-van-gogh-dark-blue rounded-md text-van-gogh-3xs">
            1
          </div>
          <p className="font-medium">{text.title}</p>
        </div>
        <Switch
          enabled={settings.imageGuidance}
          handleToggle={() =>
            setSetting(SETTINGS_KEY.IMAGE_GUIDANCE, !settings.imageGuidance)
          }
        />
      </div>
      <div className="flex flex-col gap-1.5 py-2.5 px-4">
        <p className="text-van-gogh-xs font-medium">{text.description}</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleFileChange}
        ></input>
        <button
          className="flex flex-col items-center justify-center gap-2.5 px-2 py-4 bg-van-gogh-dark-blue border border-van-gogh-grey-blue rounded-lg"
          onClick={() => inputRef.current?.click()}
        >
          <UploadIcon />
          <p className="text-van-gogh-sm font-medium">{text.description}</p>
          <p className="text-van-gogh-xs text-van-gogh-text-grey">
            {text.formatAndSize}
          </p>
        </button>
        <div className="h-10 w-full">
          <DropdownMenu
            options={[""]}
            value={"Select from Recent Images"}
            setValue={() => {}}
            isDisabled={false}
            align="left"
            headerTheme={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGuidanceUpload;
