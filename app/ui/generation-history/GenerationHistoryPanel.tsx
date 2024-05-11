"use client";

import {
  LeonardoGeneratedImage,
  LeonardoGenerationResponse,
} from "@/app/lib/definitions";
import { AspectRatio, Card, CardBody, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import CardImageLoader from "../components/CardImageLoader";
import ImageCardSkeletonRow from "../components/ImageCardSkeletonRow";
import PanelHeader from "../components/PanelHeader";

const GenerationHistoryPanel: FC<LeonardoGenerationResponse> = ({
  prompt,
  generated_images,
  modelId,
  presetStyle,
  imageWidth,
  imageHeight
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [renderedImages, setRenderedImages] = useState<
    LeonardoGeneratedImage[]
  >([]);
  const emptyDivsCount = 4 - renderedImages.length;

  useEffect(() => {
    setRenderedImages(generated_images);
  }, []);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const handleImageNav = (direction: "forward" | "back") => {
    if (direction === "forward") {
      if (selectedImageIndex >= renderedImages.length - 1)
        setSelectedImageIndex(0);
      else setSelectedImageIndex((prev) => prev + 1);
    } else {
      if (selectedImageIndex === 0)
        setSelectedImageIndex(renderedImages.length - 1);
      else setSelectedImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <PanelHeader
        prompt={prompt}
        generationLength={renderedImages.length}
        modelId={modelId}
        presetStyle={presetStyle}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
      <ImageCardSkeletonRow hidden={renderedImages.length > 0} />
      <div className="grid grid-cols-1 lg:grid-cols-auto-fit-minmax-16 gap-4">
        {renderedImages.map((image, index) => (
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
        src={renderedImages?.[selectedImageIndex]?.url}
      />
    </div>
  );
};

export default GenerationHistoryPanel;
