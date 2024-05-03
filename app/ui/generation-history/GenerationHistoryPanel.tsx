"use client";

import { modelData } from "@/app/lib/dataConstants";
import { GenerationHistoryProps } from "@/app/lib/definitions";
import { Card, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import CopyIcon from "../svg/CopyIcon";
import ArrowUpIcon from "../svg/ArrowUpIcon";
import DimensionsIcon from "../svg/DimensionsIcon";
import PaintDropIcon from "../svg/PaintDropIcon";
import ImagesIcon from "../svg/ImagesIcon";

const GenerationHistoryPanel: FC<GenerationHistoryProps> = ({
  prompt,
  images,
  modelId,
  style,
  width,
  height,
}) => {
  const selectedModel =
    modelData.find((x) => x.modelId === modelId) || modelData[0];
  const emptyDivsCount = 4 - images.length;
  const copyPrompt = () => console.log("copy prompt");
  const reusePromps = () => console.log("reuse promps");
  return (
    <div>
      <div className="flex gap-8 mt-8 mb-3">
        <div className="flex w-full">
          <div className="flex w-full items-center">
            <p>{prompt}</p>
            <div className="flex ml-4 gap-2 items-center">
              <button
                onClick={() => copyPrompt()}
                className="text-van-gogh-grey-subdued"
              >
                <CopyIcon />
              </button>
              <button
                className="flex justify-center items-center h-8 w-8 bg-van-gogh-white-opal rounded-md border border-van-gogh-border-grey hover:bg-van-gogh-white-opal-hover"
                onClick={() => reusePromps()}
              >
                <ArrowUpIcon />
              </button>
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
          <Card key={image} overflow={"hidden"}>
            <CardBody padding={0}>
              <img src={image} alt="" />
            </CardBody>
          </Card>
        ))}
        {[...Array(emptyDivsCount)].map((_, index) => (
          <div key={`empty-${index}`}></div>
        ))}
      </div>
    </div>
  );
};

export default GenerationHistoryPanel;
