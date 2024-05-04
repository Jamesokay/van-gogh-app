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
import { FC } from "react";
import CopyIcon from "../svg/CopyIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import DimensionsIcon from "../svg/DimensionsIcon";
import PaintDropIcon from "../svg/PaintDropIcon";
import ImagesIcon from "../svg/ImagesIcon";
import ImageCardHoverOverlay from "../components/ImageCardHoverOverlay";
import EyeIcon from "../svg/EyeIcon";
import { findApproximateAspectRatio } from "@/app/lib/actions";
import DownloadIcon from "../svg/DownloadIcon";

const GenerationHistoryPanel: FC<GenerationHistoryProps> = ({
  prompt,
  images,
  modelId,
  style,
  width,
  height,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const selectedModel =
    modelData.find((x) => x.modelId === modelId) || modelData[0];
  const emptyDivsCount = 4 - images.length;
  const copyPrompt = () => console.log("copy prompt");
  const reusePromps = () => console.log("reuse promps");
  console.log(findApproximateAspectRatio({ width, height }));
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
        {images.map((image) => (
          <Card
            key={image}
            overflow={"hidden"}
            className="hover-parent"
            onClick={() => {
              console.log("yo");
              onOpen();
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
        <ModalOverlay />
        <ModalContent bg="rgb(23, 23, 23)" maxW="90vw" width="auto">
          <ModalCloseButton
            zIndex={100}
            bg={"rgba(255, 255, 255, 0.06)"}
            borderRadius={"999px"}
          />
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
                <button type="button" aria-label="Close">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                    ></path>
                  </svg>
                </button>
                <img alt="" src={images[0]} crossOrigin="anonymous"></img>
              </div>
            </div>
          </ModalBody>
          <ModalFooter padding={0}>
            <div className="flex w-full p-4">
              <Tooltip label="Download image" hasArrow>
                <button
                  type="button"
                  className="h-10 w-10 rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all"
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
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GenerationHistoryPanel;
