"use client";

import { useUpscaler } from "@/app/context/UpscalerContext";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

type UpscaleVariant = "originalImage" | "upscaledImage";

const VariantDropdownMenu = () => {
  const {
    selectedUpscaleHistoryItem,
    setUpscalerRequest,
    setNewUpscaleSourceImage,
  } = useUpscaler();
  const [selectedVariant, setSelectedVariant] =
    useState<UpscaleVariant>("originalImage");

  const handleVariantSelect = (variant: UpscaleVariant) => {
    setSelectedVariant(variant);
    const imageId =
      variant === "originalImage"
        ? selectedUpscaleHistoryItem?.sourceImage?.id
        : selectedUpscaleHistoryItem?.upscaledImage?.id;
    const src =
      variant === "originalImage"
        ? selectedUpscaleHistoryItem?.sourceImage?.url
        : selectedUpscaleHistoryItem?.upscaledImage?.url;
    if (!src || !imageId) return;
    setNewUpscaleSourceImage((prev) => ({ ...prev, src: src }));
    setUpscalerRequest((prev) => ({ ...prev, generatedImageId: imageId }));
  };
  return (
    <Menu variant="newMenu" size="lg" matchWidth>
      <MenuButton>
        <div className="flex items-center justify-between text-van-gogh-xs">
          <span className="font-medium">
            {selectedVariant === "originalImage"
              ? "Original Image"
              : "Upscaled Image"}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-van-gogh-grey-700">
              {selectedVariant === "originalImage"
                ? `${selectedUpscaleHistoryItem?.sourceImage?.width}x${selectedUpscaleHistoryItem?.sourceImage?.height}`
                : `${selectedUpscaleHistoryItem?.upscaledImage?.width}x${selectedUpscaleHistoryItem?.upscaledImage?.height}`}
            </span>
            <TriangleDownIcon w={2.5} />
          </div>
        </div>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleVariantSelect("originalImage")}>
          <div className="flex w-full justify-between text-van-gogh-xs">
            <span className="font-medium">Original Image</span>
            <span className="text-van-gogh-grey-700">{`${selectedUpscaleHistoryItem?.sourceImage?.width}x${selectedUpscaleHistoryItem?.sourceImage?.height}`}</span>
          </div>
        </MenuItem>
        <MenuItem onClick={() => handleVariantSelect("upscaledImage")}>
          <div className="flex w-full justify-between text-van-gogh-xs">
            <span className="font-medium">Upscaled Image</span>
            <span className="text-van-gogh-grey-700">{`${selectedUpscaleHistoryItem?.upscaledImage?.width}x${selectedUpscaleHistoryItem?.upscaledImage?.height}`}</span>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default VariantDropdownMenu;
