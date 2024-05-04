"use client";

import { modelData } from "@/app/lib/dataConstants";
import { GenerationHistoryProps } from "@/app/lib/definitions";
import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC, useState } from "react";
import CopyIcon from "../svg/CopyIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import DimensionsIcon from "../svg/DimensionsIcon";
import PaintDropIcon from "../svg/PaintDropIcon";
import ImagesIcon from "../svg/ImagesIcon";
import ImageCardHoverOverlay from "../components/ImageCardHoverOverlay";
import EyeIcon from "../svg/EyeIcon";
import { findApproximateAspectRatio } from "@/app/lib/actions";
import DownloadIcon from "../svg/DownloadIcon";
import CopyOutlineIcon from "../svg/CopyOutlineIcon";
import RemoveBackgroundIcon from "../svg/RemoveBackgroundIcon";
import UpscalerIcon from "../svg/UpscalerIcon";
import DeleteFilledIcon from "../svg/DeleteFilledIcon";
import TriangleNavIcon from "../svg/TriangleNavIcon";

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

  const handleImageNav = (direction: "forward" | "back", currentIndex: number) => {
    if (direction === "forward") {
      if (currentIndex >= images.length - 1) setSelectedImageIndex(0);
      else setSelectedImageIndex((prev) => prev + 1);
    } else {
      if (currentIndex === 0) setSelectedImageIndex(images.length - 1);
      else setSelectedImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="flex gap-8 mt-8 mb-3">
        <div className="flex w-full">
          <div className="flex w-full items-center">
            <p>{prompt}</p>
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
                label="The image is public. Please subscribe to a paid plan if you wish to generate private images."
              >
                <div
                  role="button"
                  className="absolute z-20 right-4 top-4 rounded-full h-10 w-10 flex justify-center items-center bg-van-gogh-grey-opal backdrop-blur-md text-white"
                >
                  <EyeIcon />
                </div>
              </Tooltip>
              <ImageCardHoverOverlay />
            </CardBody>
          </Card>
        ))}
        {[...Array(emptyDivsCount)].map((_, index) => (
          <div key={`empty-${index}`}></div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="rgba(0, 0, 0, 0.48)"
          backdropFilter="blur(calc(2rem))"
        />
        <ModalContent
          bg="rgb(23, 23, 23)"
          maxW="90vw"
          width="auto"
          margin="auto"
        >
          <ModalCloseButton
            zIndex={100}
            bg={"rgba(0, 0, 0, 0.36)"}
            borderRadius={"999px"}
          />
          <button
            className="flex justify-center items-center rounded-full bg-black w-8 h-8 absolute top-1/2 hover:shadow-purple-glow"
            style={{
              left: "calc(3rem * -1)",
              background: "rgba(25, 25, 25, 0.5)",
            }}
            onClick={() => handleImageNav('back', selectedImageIndex)}
          >
            <TriangleNavIcon />
          </button>
          <button
            className="flex justify-center items-center rounded-full bg-black w-8 h-8 absolute top-1/2 hover:shadow-purple-glow"
            style={{
              right: "calc(3rem * -1)",
              background: "rgba(25, 25, 25, 0.5)",
            }}
            onClick={() => handleImageNav('forward', selectedImageIndex)}
          >
            <TriangleNavIcon className="rotate-180" />
          </button>
          <ModalBody padding={0} marginTop={0}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                minWidth: "calc(32rem)",
                minHeight: "calc(32rem)",
                maxHeight: "calc(-10rem + 100vh)",
                maxWidth: "90vw",
                aspectRatio: `auto ${width} / ${height}`,
              }}
            >
              <div className="relative flex justify-center h-auto w-[768px] min-h-fit min-w-fit max-h-full max-w-fit">
                <Image
                  className="rounded-t-lg"
                  width={width}
                  height={height}
                  alt=""
                  src={images[selectedImageIndex]}
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter padding={0}>
            <div className="flex w-full p-4 gap-5 justify-end">
              <div className="flex gap-1">
                <Tooltip label="Download image" hasArrow>
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full flex items-center justify-center backdrop-brightness-150 grayscale hover:grayscale-0 transition-all"
                    style={{
                      background: "rgba(25, 25, 25, 0.5)",
                    }}
                    aria-label="Download image"
                  >
                    <span className="flex">
                      <DownloadIcon />
                    </span>
                  </button>
                </Tooltip>
                <Tooltip label="Copy to clipboard" hasArrow>
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full flex items-center justify-center backdrop-brightness-150 grayscale hover:grayscale-0 transition-all"
                    style={{
                      background: "rgba(25, 25, 25, 0.5)",
                    }}
                    aria-label="Download image"
                  >
                    <span className="flex">
                      <CopyOutlineIcon />
                    </span>
                  </button>
                </Tooltip>
                <Tooltip label="Remove background" hasArrow>
                  <button
                    className="flex items-center justify-center h-10 w-10 rounded-full backdrop-brightness-150 grayscale hover:grayscale-0 transition-all"
                    type="button"
                    style={{ background: "rgba(25, 25, 25, 0.5)" }}
                    aria-label="Remove background - "
                  >
                    <RemoveBackgroundIcon />
                  </button>
                </Tooltip>
              </div>

              <Tooltip label="Alchemy Upscaler" hasArrow>
                <div className="relative mt-0 rounded-full">
                  <div className="absolute top-px left-1/2 transform -translate-x-1/2 z-10 w-fit flex justify-center bg-purple-gradient text-van-gogh-5xs font-medium px-1.5 py-0.25 text-white rounded-full">
                    NEW
                  </div>
                  <button
                    type="button"
                    style={{ background: "rgba(25, 25, 25, 0.5)" }}
                    className="flex items-center justify-center rounded-full h-10 w-10 backdrop-brightness-150 grayscale hover:grayscale-0 transition-all"
                    aria-label="Alchemy Upscaler - use this to refine and upscale your images. This can improve faces and hands as part of the process. "
                  >
                    <UpscalerIcon />
                  </button>
                </div>
              </Tooltip>
              <Tooltip label="Upgrade to Premium to delete images" hasArrow>
                <div className="relative">
                  <div className="flex w-fit bg-purple-gradient absolute z-10 top-px left-1/2 transform -translate-x-1/2 text-van-gogh-4xs font-medium text-white rounded-full px-1.5">
                    Premium
                  </div>
                  <button
                    type="button"
                    style={{ background: "rgba(25, 25, 25, 0.5)" }}
                    className="flex items-center justify-center h-10 w-10 rounded-full backdrop-brightness-150 grayscale cursor-not-allowed"
                    aria-label="Upgrade to premium to delete image"
                  >
                    <DeleteFilledIcon />
                  </button>
                </div>
              </Tooltip>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GenerationHistoryPanel;
