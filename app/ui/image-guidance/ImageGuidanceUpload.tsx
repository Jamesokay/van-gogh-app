import UploadIcon from "../svg/UploadIcon";
import DropdownMenu from "../components/DropdownMenu";
import Switch from "../components/Switch";
import { imageGuidanceStrings } from "@/app/lib/stringConstants";

const ImageGuidanceUpload = () => {
  const text = imageGuidanceStrings.uploadStrings;
  return (
    <div className="flex flex-col h-full bg-van-gogh-dark-blue-alt rounded-lg">
      <div className="flex justify-between py-3.5 px-4">
        <div className="flex gap-3.5 text-van-gogh-sm">
          <div className="flex items-center justify-center w-5 h-5 bg-van-gogh-dark-blue rounded-md text-van-gogh-3xs">
            1
          </div>
          <p className="font-medium">{text.title}</p>
        </div>
        <Switch enabled={false} handleToggle={() => {}} />
      </div>
      <div className="flex flex-col gap-1.5 py-2.5 px-4">
        <p className="text-van-gogh-xs font-medium">{text.description}</p>
        <button className="flex flex-col items-center justify-center gap-2.5 px-2 py-4 bg-van-gogh-dark-blue border border-van-gogh-grey-blue rounded-lg">
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
