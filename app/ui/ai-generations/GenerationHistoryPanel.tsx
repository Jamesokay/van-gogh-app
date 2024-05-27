"use client";

import {
  GeneratedImage,
  NonNullGenerationRow,
} from "@/app/lib/definitions";
import { AspectRatio, Card, CardBody, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import CardImageLoader from "../components/CardImageLoader";
import InitialRenderSkeleton from "../components/InitialRenderSkeleton";
import PanelHeader from "../components/PanelHeader";
import { useSettings } from "@/app/context/SettingsContext";

const GenerationHistoryPanel: FC<NonNullGenerationRow> = (props) => {
  const { interfaceState } = useSettings();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [renderedImages, setRenderedImages] = useState<
    GeneratedImage[]
  >([]);
  const emptyDivsCount = 4 - renderedImages.length;
  const { generated_images, id, imageWidth, imageHeight } = props;

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
    <div
      className={
        interfaceState.deletedGenerationIds.includes(id)
          ? "hidden"
          : "flex flex-col"
      }
    >
      <PanelHeader {...props} />
      <InitialRenderSkeleton
        hidden={renderedImages.length > 0}
        landscape={imageWidth > imageHeight}
      />
      <div
        className={`grid grid-cols-1 ${
          imageHeight > imageWidth
            ? "lg:grid-cols-van-gogh-auto-fit-minmax-16"
            : "lg:grid-cols-van-gogh-auto-fit-minmax-24"
        } gap-4`}
      >
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
                <CardImageLoader id={image.id} src={image.url} alt="" publicImage={props.public} />
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
