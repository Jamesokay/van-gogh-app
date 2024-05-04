import CanvasIcon from "../svg/CanvasIcon";
import DownloadIcon from "../svg/DownloadIcon";
import ImageGuidanceIcon from "../svg/ImageGuidanceIcon";
import MotionVideoIcon from "../svg/MotionVideoIcon";
import RemoveBackgroundIcon from "../svg/RemoveBackgroundIcon";
import UpscalerIcon from "../svg/UpscalerIcon";
import TickIcon from "../svg/TickIcon";
import { Tooltip } from "@chakra-ui/react";
import DeleteFilledIcon from "../svg/DeleteFilledIcon";

const ImageCardHoverOverlay = () => {
  return (
    <div
      className="hover-child flex flex-col justify-between rounded-md absolute left-0 top-0 cursor-pointer z-10 w-full h-full opacity-0 transition-opacity duration-300"
      style={{
        background:
          "linear-gradient(rgba(18, 19, 21, 0) -2.43%, rgb(18, 19, 21) 97.57%)",
      }}
    >
      <Tooltip label="Select image" hasArrow>
        <button
          type="button"
          className="flex justify-center items-center p-2 w-fit rounded-full ml-4 mt-4 bg-transparent-purple-gradient grayscale hover:grayscale-0 hover:backdrop-blur-[3px] hover:backdrop-brightness-95 transition-all"
          aria-label="Select image"
        >
          <TickIcon />
        </button>
      </Tooltip>
      <div className="flex self-center mb-4">
        <div className="flex items-end gap-3">
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
          <div className="flex flex-col">
            <div
              className="overflow-hidden grayscale hover:grayscale-0 transition-all"
              style={{
                borderRadius: "5rem 5rem 0px 0px",
                borderBottom: "calc(0.0625rem) solid rgba(255, 255, 255, 0.24)",
              }}
            >
              <Tooltip label="Remove background" hasArrow>
                <button
                  className="flex items-center justify-center h-10 w-10"
                  type="button"
                  style={{ background: "rgba(25, 25, 25, 0.5)" }}
                  aria-label="Remove background - "
                >
                  <RemoveBackgroundIcon />
                </button>
              </Tooltip>
            </div>
            <Tooltip label="Generate a Motion video" hasArrow>
              <div
                className="relative"
                style={{
                  borderRadius: "0px 0px 5rem 5rem",
                }}
              >
                <div className="absolute top-px left-1/2 transform -translate-x-1/2 w-fit flex justify-center z-10 bg-purple-gradient text-van-gogh-5xs font-medium px-1.5 py-0.25 text-white rounded-full">
                  NEW
                </div>

                <button
                  type="button"
                  style={{ background: "rgba(25, 25, 25, 0.5)" }}
                  className="flex items-center justify-center h-10 w-10 grayscale hover:grayscale-0 transition-all"
                  aria-label="Generate Motion video"
                >
                  <MotionVideoIcon />
                </button>
              </div>
            </Tooltip>
          </div>
          <div className="flex flex-col">
            <Tooltip label="Alchemy Upscaler" hasArrow>
              <div className="relative mt-0" style={{ borderRadius: "2.5rem" }}>
                <div className="absolute top-px left-1/2 transform -translate-x-1/2 z-10 w-fit flex justify-center bg-purple-gradient text-van-gogh-5xs font-medium px-1.5 py-0.25 text-white rounded-full">
                  NEW
                </div>
                <button
                  type="button"
                  style={{ background: "rgba(25, 25, 25, 0.5)" }}
                  className="flex items-center justify-center h-10 w-10 grayscale hover:grayscale-0 transition-all"
                  aria-label="Alchemy Upscaler - use this to refine and upscale your images. This can improve faces and hands as part of the process. "
                >
                  <UpscalerIcon />
                </button>
              </div>
            </Tooltip>
          </div>
          <div className="flex flex-col">
            <div
              className="grayscale hover:grayscale-0 transition-all"
              style={{
                borderRadius: "calc(5rem) calc(5rem) 0px 0px",
                borderBottom: "calc(0.0625rem) solid rgba(255, 255, 255, 0.24)",
              }}
            >
              <Tooltip label="Use as Image Guidance input" hasArrow>
                <button
                  type="button"
                  style={{ background: "rgba(25, 25, 25, 0.5)" }}
                  className="flex items-center justify-center h-10 w-10"
                  aria-label="Use as image guidance input"
                >
                  <ImageGuidanceIcon />
                </button>
              </Tooltip>
            </div>
            <Tooltip label="Edit in canvas" hasArrow>
              <div
                className="grayscale hover:grayscale-0 transition-all"
                style={{
                  borderRadius: "0px 0px calc(5rem) calc(5rem)",
                }}
              >
                <button
                  type="button"
                  style={{ background: "rgba(25, 25, 25, 0.5)" }}
                  className="flex items-center justify-center h-10 w-10"
                  aria-label="Edit in canvas"
                >
                  <CanvasIcon />
                </button>
              </div>
            </Tooltip>
          </div>
          <Tooltip label="Upgrade to Premium to delete images" hasArrow>
            <div className="relative">
              <div className="flex w-fit bg-purple-gradient absolute z-10 top-px left-1/2 transform -translate-x-1/2 text-van-gogh-4xs font-medium text-white rounded-full px-1.5">
                Premium
              </div>
              <button
                type="button"
                style={{ background: "rgba(25, 25, 25, 0.5)" }}
                className="flex items-center justify-center h-10 w-10 grayscale cursor-not-allowed"
                aria-label="Upgrade to premium to delete image"
              >
                <DeleteFilledIcon />
              </button>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ImageCardHoverOverlay;
