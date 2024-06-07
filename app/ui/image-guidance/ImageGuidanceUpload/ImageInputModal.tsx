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
import { GeneratedImage } from "@/app/lib/definitions";
import TickIcon from "../../svg/TickIcon";
import { useSettings } from "@/app/context/SettingsContext";
import { imageInputTabs } from "@/app/lib/dataConstants";
import ImageInputGrid from "./ImageInputGrid";
import GridToggle from "./GridToggle";

const ImageInputModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  images: GeneratedImage[];
}> = ({ isOpen, onClose, images }) => {
  const { setKeyOfGenerationRequest, setKeyOfInterfaceState } = useSettings();
  const [selectedTab, setSelectedTab] = useState("Your Generations");
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Upscaled">(
    "All"
  );
  const [webColumnImages, setWebColumnImages] = useState<GeneratedImage[][]>(
    []
  );
  const [webColumns, setWebColumns] = useState(4);
  const [mobileColumnImages, setMobileColumnImages] = useState<
    GeneratedImage[][]
  >([]);
  const [mobileColumns, setMobileColumns] = useState(2);
  const [selected, setSelected] = useState<{ id: string; url: string }>({
    id: "",
    url: "",
  });

  useEffect(() => {
    const array: GeneratedImage[][] = Array.from(
      { length: webColumns },
      () => []
    );
    images.forEach((image, index) => {
      array[index % webColumns]?.push(image);
    });
    setWebColumnImages(array);
  }, [webColumns]);

  useEffect(() => {
    const array: GeneratedImage[][] = Array.from(
      { length: mobileColumns },
      () => []
    );
    images.forEach((image, index) => {
      array[index % mobileColumns]?.push(image);
    });
    setMobileColumnImages(array);
  }, [mobileColumns]);

  const handleToggle = (
    current: number,
    dir: "plus" | "minus",
    view: "mobile" | "web"
  ) => {
    if (view === "web") {
      if (dir === "minus") {
        if (current === 1) return;
        setWebColumns(current - 1);
      } else {
        if (current === 5) return;
        setWebColumns(current + 1);
      }
    } else {
      if (dir === "minus") {
        if (current === 1) return;
        setMobileColumns(current - 1);
      } else {
        if (current === 5) return;
        setMobileColumns(current + 1);
      }
    }
  };

  const handleSelect = (currentId: string, newImage: GeneratedImage) => {
    if (currentId !== newImage.id)
      setSelected({ id: newImage.id, url: newImage.url });
    else setSelected({ id: "", url: "" });
  };

  const handleConfirm = () => {
    setKeyOfInterfaceState("enableImageGuidance", true);
    setKeyOfInterfaceState("imageGuidanceSrc", selected.url);
    setKeyOfGenerationRequest("init_generation_image_id", selected.url);
    setSelected({ id: "", url: "" });
    onClose();
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
              {imageInputTabs.map((tab) => (
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
            <div className="flex justify-between items-stretch gap-3 flex-wrap">
              <div className="flex items-center gap-7 flex-wrap">
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
                <div className="w-full md:w-auto flex min-w-60 border border-van-gogh-white-opal-200 rounded-md">
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
              <GridToggle
                view="web"
                columns={webColumns}
                setColumns={setWebColumns}
                handleToggle={handleToggle}
              />
              <GridToggle
                view="mobile"
                columns={mobileColumns}
                setColumns={setMobileColumns}
                handleToggle={handleToggle}
              />
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <ImageInputGrid
            selected={selected}
            columns={webColumns}
            columnImages={webColumnImages}
            handleSelect={handleSelect}
            mobile={false}
          />
          <ImageInputGrid
            selected={selected}
            columns={mobileColumns}
            columnImages={mobileColumnImages}
            handleSelect={handleSelect}
            mobile={true}
          />
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
            onClick={() => handleConfirm()}
          >
            Confirm
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageInputModal;
