"use client";

import { AddIcon, MinusIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import RangeSlider from "../../components/RangeSlider";
import GridIcon from "../../svg/GridIcon";
import { LeonardoGeneratedImage } from "@/app/lib/definitions";
import TickIcon from "../../svg/TickIcon";
import { useSettings } from "@/app/context/SettingsContext";

const ImageInputModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  images: LeonardoGeneratedImage[];
}> = ({ isOpen, onClose, images }) => {
  const { setKeyOfGenerationRequest, setKeyOfInterfaceState } = useSettings();
  const [selectedTab, setSelectedTab] = useState("Your Generations");
  const tabs = [
    "Your Uploads",
    "Your Generations",
    "Community Feed",
    "Follower Feed",
  ];
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Upscaled">(
    "All"
  );
  const [columnImages, setColumnImages] = useState<LeonardoGeneratedImage[][]>(
    []
  );
  const [columns, setColumns] = useState(4);
  const [selected, setSelected] = useState<{ id: string; url: string }>({
    id: "",
    url: "",
  });

  useEffect(() => {
    const array: LeonardoGeneratedImage[][] = Array.from(
      { length: columns },
      () => []
    );
    images.forEach((image, index) => {
      array[index % columns]?.push(image);
    });
    setColumnImages(array);
  }, [columns]);

  const handleToggle = (current: number, dir: "plus" | "minus") => {
    if (dir === "minus") {
      if (current === 1) return;
      setColumns(current - 1);
    } else {
      if (current === 5) return;
      setColumns(current + 1);
    }
  };

  const handleSelect = (
    currentId: string,
    newImage: LeonardoGeneratedImage
  ) => {
    if (currentId !== newImage.id)
      setSelected({ id: newImage.id, url: newImage.url });
    else setSelected({ id: "", url: "" });
  };

  return (
    <Modal variant="imageInputModal" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center justify-between mb-4 pt-7 px-6">
            <p className="font-bold text-van-gogh-2xl">Select Image Input</p>
            <ModalCloseButton />
          </div>
          <div className="flex border-b border-van-gogh-border-grey-300 px-6">
            <div className="flex gap-7 text-van-gogh-md w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`py-3 ${
                    tab === selectedTab
                      ? "van-gogh-header-link"
                      : "text-van-gogh-grey-700 hover:text-white border-b-[0.125rem] border-b border-transparent"
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6">
            <div className="flex justify-between items-stretch gap-3">
              <div className="flex items-center gap-7">
                <div className="flex gap-3 items-stretch min-w-96">
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon />
                    </InputLeftElement>
                    <Input
                      variant="imageInputSearch"
                      type="text"
                      placeholder="Search Prompts"
                    />
                  </InputGroup>
                  <div className="relative flex text-van-gogh-sm h-10 bg-van-gogh-pink-gradient p-[1px] rounded-lg hover:shadow-van-gogh-purple-glow">
                    <button className="flex gap-1 bg-van-gogh-grey-50 h-full w-full flex items-center justify-center px-4 rounded-lg text-van-gogh-sm">
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex min-w-60 border border-van-gogh-white-opal-200 rounded-md">
                  <button
                    className={`flex-1 flex justify-center items-center px-5 h-10 rounded-l-md text-van-gogh-sm transition-all ${
                      selectedFilter === "All"
                        ? "bg-van-gogh-purple-gradient"
                        : "bg-van-gogh-grey-50 text-van-gogh-grey-700 hover:bg-van-gogh-grey-500 hover:text-white"
                    }`}
                    onClick={() => setSelectedFilter("All")}
                  >
                    All
                  </button>
                  <button
                    className={`flex-1 flex justify-center items-center px-5 h-10  rounded-r-md text-van-gogh-sm transition-all
                  ${
                    selectedFilter === "Upscaled"
                      ? "bg-van-gogh-purple-gradient"
                      : "bg-van-gogh-grey-50 text-van-gogh-grey-700 hover:bg-van-gogh-grey-500 hover:text-white"
                  }
                  `}
                    onClick={() => setSelectedFilter("Upscaled")}
                  >
                    Upscaled
                  </button>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <GridIcon />
                <button onClick={() => handleToggle(columns, "minus")}>
                  <MinusIcon w={3} />
                </button>
                <div className="w-36">
                  <RangeSlider
                    value={columns}
                    min={1}
                    max={5}
                    setValue={(x) => setColumns(x)}
                    purple
                  />
                </div>
                <button onClick={() => handleToggle(columns, "plus")}>
                  <AddIcon w={3} />
                </button>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))`,
            }}
          >
            {columnImages.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col items-center">
                {col.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    role="button"
                    className={`${
                      selected.id === image.id
                        ? "selected-image-with-border"
                        : "image-with-border"
                    } relative border-transparent border-4 flex justify-center mb-4 w-full rounded-2xl`}
                    onClick={() => handleSelect(selected.id, image)}
                  >
                    <div className="absolute w-full h-full bg-van-gogh-black-opal-600 z-10 rounded-2xl"></div>
                    <div
                      className={`image-interior transition-all z-20 rounded-2xl w-full ${
                        columns === 1 ? "max-w-[512px]" : ""
                      }`}
                    >
                      <img
                        src={image.url}
                        alt="Generated image"
                        className="rounded-2xl"
                      />
                    </div>
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-van-gogh-purple-gradient rounded-full z-50 flex justify-center items-center transition-all
                    ${selected.id === image.id ? "opacity-100" : "opacity-0"}`}
                    >
                      <TickIcon fill={"#fff"} className="h-10 w-10" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="font-semibold w-80 h-12 border border border-van-gogh-white-opal-200 rounded-md transition-all hover:bg-van-gogh-grey-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            disabled={!selected.id}
            className={`font-semibold w-80 h-12 bg-van-gogh-purple-gradient rounded-md hover:shadow-van-gogh-purple-glow transition-all ${
              !selected.id ? "grayscale cursor-not-allowed opacity-40" : ""
            }`}
            onClick={() => {
              setKeyOfInterfaceState("enableImageGuidance", true);
              setKeyOfInterfaceState("imageGuidanceSrc", selected.url);
              setKeyOfGenerationRequest(
                "init_generation_image_id",
                selected.url
              );
              setSelected({ id: "", url: "" });
              onClose();
            }}
          >
            Confirm
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageInputModal;
