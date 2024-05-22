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

const ImageInputModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  images: LeonardoGeneratedImage[];
}> = ({ isOpen, onClose, images }) => {
  const [selectedTab, setSelectedTab] = useState("Your Uploads");
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

  useEffect(() => {
    const array: LeonardoGeneratedImage[][] = Array.from(
      { length: columns },
      () => []
    );
    images.forEach((image, index) => {
      array[index % columns].push(image);
    });
    setColumnImages(array);
  }, [columns]);

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
                <button>
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
                <button>
                  <AddIcon w={3} />
                </button>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))`,
            }}
          >
            {columnImages.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col">
                {col.map((image, imgIndex) => (
                  <div key={imgIndex} className="mb-4 rounded-2xl overflow-hidden">
                    <img src={image.url} alt="Generated image" />
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
          <button className="font-semibold w-80 h-12 bg-van-gogh-purple-gradient rounded-md hover:shadow-van-gogh-purple-glow">
            Confirm
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageInputModal;
