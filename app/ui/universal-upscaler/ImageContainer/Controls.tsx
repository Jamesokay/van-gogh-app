"use client";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FC, useEffect } from "react";
import { useControls } from "react-zoom-pan-pinch";

const Controls: FC<{ zoomValue: number }> = ({ zoomValue }) => {
  const { zoomIn, zoomOut, centerView } = useControls();

  useEffect(() => {
    if (zoomValue === 100) centerView();
  }, [zoomValue]);

  return (
    <div className="flex items-center h-10 absolute bottom-24 right-3 z-50 bg-van-gogh-blue-700 rounded-md">
      <button
        className="flex items-center justify-center min-w-10"
        onClick={() => zoomIn()}
      >
        <AddIcon w={3} h={3} />
      </button>
      <button
        className="flex items-center justify-center min-w-10"
        onClick={() => zoomOut()}
      >
        <MinusIcon w={3} h={3} />
      </button>
      <p className="text-van-gogh-sm px-2 font-medium">{`${zoomValue.toFixed(
        1
      )}%`}</p>
    </div>
  );
};

export default Controls;
