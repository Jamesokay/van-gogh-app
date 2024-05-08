"use client";

import { FC, useState } from "react";
import ImageCardSkeleton from "./ImageCardSkeleton";
import { Tooltip } from "@chakra-ui/react";
import { tooltipText } from "@/app/lib/stringConstants";
import EyeIcon from "../svg/EyeIcon";
import ImageCardHoverOverlay from "./ImageCardHoverOverlay";

const CardImageLoader: FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      <div
        className={`absolute w-full h-full transition-all duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <ImageCardSkeleton />
      </div>
      <Tooltip
        placement="left"
        hasArrow
        label={tooltipText.premiumPrivateImages}
      >
        <div
          role="button"
          className={
            !loaded
              ? "hidden"
              : "absolute z-20 right-4 top-4 rounded-full h-10 w-10 flex justify-center items-center bg-van-gogh-grey-opal backdrop-blur-md text-white"
          }
        >
          <EyeIcon />
        </div>
      </Tooltip>
      <ImageCardHoverOverlay src={src} hidden={!loaded} />
      <img
        src={src}
        alt={alt}
        className={`transition-all duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </div>
  );
};

export default CardImageLoader;
