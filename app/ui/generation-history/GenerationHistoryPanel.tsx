"use client";

import { modelData } from "@/app/lib/dataConstants";
import { GenerationHistoryProps } from "@/app/lib/definitions";
import { Card, CardBody, Tooltip, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { FC, Suspense, useState } from "react";
import CopyIcon from "../svg/CopyIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import DimensionsIcon from "../svg/DimensionsIcon";
import PaintDropIcon from "../svg/PaintDropIcon";
import ImagesIcon from "../svg/ImagesIcon";
import ImageCardHoverOverlay from "../components/ImageCardHoverOverlay";
import EyeIcon from "../svg/EyeIcon";
import ImageModal from "./ImageModal";
import ImageCardSkeleton from "../components/ImageCardSkeleton";
import { tooltipText } from "@/app/lib/stringConstants";

const GenerationHistoryPanel: FC<GenerationHistoryProps> = ({
  prompt,
  images,
  modelId,
  style,
  width,
  height,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedModel =
    modelData.find((x) => x.modelId === modelId) || modelData[0];
  const emptyDivsCount = 4 - images.length;
  const copyPrompt = () => console.log("copy prompt");
  const reusePromps = () => console.log("reuse promps");

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const handleImageNav = (direction: "forward" | "back") => {
    if (direction === "forward") {
      if (selectedImageIndex >= images.length - 1) setSelectedImageIndex(0);
      else setSelectedImageIndex((prev) => prev + 1);
    } else {
      if (selectedImageIndex === 0) setSelectedImageIndex(images.length - 1);
      else setSelectedImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="flex gap-8 mt-8 mb-3">
        <div className="flex w-full">
          <div className="flex w-full items-center">
            <p className="truncate max-w-full">{prompt}</p>
            <div className="flex ml-4 gap-2 items-center">
              <Tooltip label="Copy prompt">
                <button
                  onClick={() => copyPrompt()}
                  className="text-van-gogh-grey-subdued"
                >
                  <CopyIcon />
                </button>
              </Tooltip>
              <Tooltip label="Reuse prompt">
                <button
                  className="flex justify-center items-center h-8 w-8 bg-van-gogh-white-opal rounded-md border border-van-gogh-border-grey hover:bg-van-gogh-white-opal-hover"
                  onClick={() => reusePromps()}
                >
                  <ArrowUpIcon />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="flex w-full justify-end h-8">
            <div className="pl-2 flex flex-nowrap gap-1 items-center text-van-gogh-xs">
              <div className="flex gap-1.5 items-center pl-1 pr-2">
                <div className="flex w-4.5 h-4.5">
                  <Image
                    width={15}
                    height={15}
                    src={selectedModel.img}
                    alt=""
                  />
                </div>
                <p>{selectedModel.modelName}</p>
              </div>
              <div className="flex px-2 gap-1 items-center">
                <PaintDropIcon />
                <p>{style}</p>
              </div>
              <div className="p-2 flex gap-1 items-center">
                <ImagesIcon />
                <span>{images.length}</span>
              </div>
              <div className="flex gap-1 p-2 items-center">
                <DimensionsIcon />
                <span>{`${width} x ${height}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-auto-fit-minmax-16 gap-4">
        {images.map((image, index) => (
          <Suspense fallback={<ImageCardSkeleton />}>
            <Card
              key={image}
              overflow={"hidden"}
              className="hover-parent"
              onClick={() => {
                openModal(index);
              }}
            >
              <CardBody padding={0}>
                <img src={image} alt="" />
                <Tooltip
                  placement="left"
                  hasArrow
                  label={tooltipText.premiumPrivateImages}
                >
                  <div
                    role="button"
                    className="absolute z-20 right-4 top-4 rounded-full h-10 w-10 flex justify-center items-center bg-van-gogh-grey-opal backdrop-blur-md text-white"
                  >
                    <EyeIcon />
                  </div>
                </Tooltip>
                <ImageCardHoverOverlay src={image} />
              </CardBody>
            </Card>
          </Suspense>
        ))}
        {[...Array(emptyDivsCount)].map((_, index) => (
          <div key={`empty-${index}`}></div>
        ))}
      </div>
      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        width={width}
        height={height}
        handleImageNav={handleImageNav}
        src={images[selectedImageIndex]}
      />
    </div>
  );
};

export default GenerationHistoryPanel;
