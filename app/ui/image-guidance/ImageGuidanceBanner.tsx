"use client";

import { useSettings } from "@/app/context/SettingsContext";
import Image from "next/image";

const ImageGuidanceBanner = () => {
  const { generationRequest } = useSettings();
  const hidden = !!generationRequest.init_generation_image_id;
  return (
    <div
      className={
        hidden
          ? "hidden"
          : "flex w-full overflow-hidden p-[1px] rounded-md min-h-16 bg-van-gogh-pink-gradient"
      }
    >
      <div className="flex bg-black rounded-md items-center w-full font-medium md:text-van-gogh-sm">
        <Image
          src="/leonardo-wizard.webp"
          height={45}
          width={45}
          className="min-h-[45px]"
          alt="An image of a wizard"
        />
        <div className="py-3">
          Leverage&nbsp;
          <span className="van-gogh-gradient-text">images & photos</span>&nbsp;
          to guide your generations. Upload an image to get started.
        </div>
      </div>
    </div>
  );
};

export default ImageGuidanceBanner;
