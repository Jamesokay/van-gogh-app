"use client";

import { FC, ReactNode, useState } from "react";
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import Controls from "./Controls";

const TransformContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const [zoomValue, setZoomValue] = useState<number>(100);

  const handleTransform = (ref: ReactZoomPanPinchRef) => {
    setZoomValue(ref.state.scale * 100);
  };
  return (
    <div className="flex w-full h-full">
      <TransformWrapper
        limitToBounds={false}
        centerOnInit
        panning={{ velocityDisabled: true }}
        wheel={{ smoothStep: 0.002 }}
        onTransformed={handleTransform}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <Controls zoomValue={zoomValue} />
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
            >
              <div className="flex animate-fade">{children}</div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default TransformContainer;
