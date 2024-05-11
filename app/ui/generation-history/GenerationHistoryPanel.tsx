"use client";

import { modelData } from "@/app/lib/dataConstants";
import {
  LeonardoGeneratedImage,
  LeonardoGenerationResponse,
} from "@/app/lib/definitions";
import {
  AspectRatio,
  Card,
  CardBody,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import CopyIcon from "../svg/CopyIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import DimensionsIcon from "../svg/DimensionsIcon";
import PaintDropIcon from "../svg/PaintDropIcon";
import ImagesIcon from "../svg/ImagesIcon";
import ImageModal from "./ImageModal";
import CardImageLoader from "../components/CardImageLoader";
import TickIcon from "../svg/TickIcon";
import ImageCardSkeletonRow from "../components/ImageCardSkeletonRow";
import { formatDate } from "@/app/lib/helpers";

const GenerationHistoryPanel: FC<LeonardoGenerationResponse> = ({
  prompt,
  generated_images: initialImages,
  modelId,
  presetStyle,
  imageWidth,
  imageHeight,
  createdAt,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState<LeonardoGeneratedImage[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const copyRef = useRef<NodeJS.Timeout | number | null>(null);
  const selectedModel =
    modelData.find((x) => x.modelId === modelId) || modelData[0];
  const emptyDivsCount = 4 - images.length;
  const reusePromps = () => console.log("reuse promps");
  const formattedDate = formatDate(createdAt);

  useEffect(() => {
    setImages(initialImages);
    return () => {
      if (copyRef.current !== null) clearTimeout(copyRef.current);
    };
  }, []);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      if (copyRef.current !== null) clearTimeout(copyRef.current);
      copyRef.current = setTimeout(() => {
        setCopied(false);
        copyRef.current = null;
      }, 1000);
    } catch (err) {
      console.log("Failed to copy!");
      setCopied(false);
    }
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
    <div className="flex flex-col">
      <div className="mt-8 mb-4 flex justify-center">
        <p className="text-van-gogh-grey-subdued text-van-gogh-md">
          {formattedDate}
        </p>
      </div>
      <div className="flex gap-8 mb-3">
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="flex items-center overflow-hidden">
            <Tooltip label={prompt}>
              <p className="truncate text-van-gogh-sm">{prompt}</p>
            </Tooltip>
            <div className="flex ml-auto gap-2 items-center">
              <Tooltip label="Copy prompt">
                <button
                  onClick={() => copyPrompt()}
                  className="relative text-van-gogh-grey-subdued w-8 h-8"
                >
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      copied ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <TickIcon fill="green" />
                  </span>
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      copied ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <CopyIcon />
                  </span>
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
          <div className="flex-none w-auto justify-end h-8 self-end">
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
              <div className="hidden md:flex px-2 gap-1 items-center">
                <PaintDropIcon />
                <p>{presetStyle}</p>
              </div>
              <div className="p-2 flex gap-1 items-center">
                <ImagesIcon />
                <span>{images.length}</span>
              </div>
              <div className="flex gap-1 p-2 items-center">
                <DimensionsIcon />
                <span>{`${imageWidth} x ${imageHeight}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageCardSkeletonRow hidden={images.length > 0} />
      <div className="grid grid-cols-1 lg:grid-cols-auto-fit-minmax-16 gap-4">
        {images.map((image, index) => (
          <AspectRatio key={image.id} ratio={imageWidth / imageHeight}>
            <Card
              overflow={"hidden"}
              className="hover-parent"
              onClick={() => {
                openModal(index);
              }}
            >
              <CardBody padding={0} h={"100%"} w={"100%"}>
                <CardImageLoader src={image.url} alt="" />
              </CardBody>
            </Card>
          </AspectRatio>
        ))}
        {[...Array(emptyDivsCount)].map((_, index) => (
          <div key={`empty-${index}`}></div>
        ))}
      </div>
      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        width={imageWidth}
        height={imageHeight}
        handleImageNav={handleImageNav}
        src={images?.[selectedImageIndex]?.url}
      />
    </div>
  );
};

export default GenerationHistoryPanel;
