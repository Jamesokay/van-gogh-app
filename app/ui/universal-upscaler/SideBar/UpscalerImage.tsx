"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import {
  defaultSourceImage,
  defaultUpscalerRequest,
} from "@/app/lib/dataConstants";
import { CloseIcon } from "@chakra-ui/icons";

const UpscalerImage = () => {
  const {
    selectedUpscaleHistoryItem,
    newUpscaleSourceImage,
    setSelectedUpscaleHistoryItem,
    setNewUpscaleSourceImage,
    setUpscalerRequest,
  } = useUpscaler();
  const handleClearImage = () => {
    if (selectedUpscaleHistoryItem) setSelectedUpscaleHistoryItem(null);
    setNewUpscaleSourceImage(defaultSourceImage);
    setUpscalerRequest(defaultUpscalerRequest);
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

  return (
    <div className={newUpscaleSourceImage.src ? "relative flex" : "hidden"}>
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
  );
};

export default UpscalerImage;
