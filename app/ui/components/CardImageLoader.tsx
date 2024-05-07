"use client";

import { FC, useState } from "react";
import Image from "next/image";
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
        className="absolute w-full h-full transition-all duration-300"
        style={{ opacity: loaded ? 0 : 1 }}
      >
        <ImageCardSkeleton />
      </div>
      <Tooltip
        placement="left"
        hasArrow
        label={tooltipText.premiumPrivateImages}
      >
        <div
          style={{ display: !loaded ? "none" : "flex" }}
          role="button"
          className="absolute z-20 right-4 top-4 rounded-full h-10 w-10 flex justify-center items-center bg-van-gogh-grey-opal backdrop-blur-md text-white"
        >
          <EyeIcon />
        </div>
      </Tooltip>
      <ImageCardHoverOverlay src={src} hidden={!loaded} />
      <img
        src={src}
        alt={alt}
        className="transition-all duration-300"
        style={{ opacity: loaded ? "1" : "0" }}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </div>
  );
};

export default CardImageLoader;
