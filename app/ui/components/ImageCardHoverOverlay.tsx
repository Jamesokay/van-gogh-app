import { DeleteIcon } from "@chakra-ui/icons";
import CanvasIcon from "../svg/CanvasIcon";
import DownloadIcon from "../svg/DownloadIcon";
import ImageGuidanceIcon from "../svg/ImageGuidanceIcon";
import MotionVideoIcon from "../svg/MotionVideoIcon";
import RemoveBackgroundIcon from "../svg/RemoveBackgroundIcon";
import UpscalerIcon from "../svg/UpscalerIcon";
import TickIcon from "../svg/TickIcon";

const ImageCardHoverOverlay = () => {
  return (
    <div
      className="flex flex-col justify-between rounded-md absolute left-0 top-0 cursor-pointer z-index-2 w-full h-full opacity-0 transition-opacity hover:opacity-100 duration-300"
      style={{
        background:
          "linear-gradient(rgba(18, 19, 21, 0) -2.43%, rgb(18, 19, 21) 97.57%)",
      }}
    >
      <button
        type="button"
        className="flex justify-center items-center p-2 w-fit rounded-full ml-4 mt-4"
        style={{
          background: "rgba(170, 170, 170, 0.28)",
          filter: "contrast(0) brightness(1.5)",
        }}
        aria-label="Select image"
      >
        <TickIcon />
      </button>
      <div className="flex self-center mb-4">
        <div className="flex items-end gap-3">
          <button
            type="button"
            className="h-10 w-10 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(25, 25, 25, 0.5)",
              filter: "grayscale(100%) contrast(1) brightness(1.5)",
            }}
            aria-label="Download image"
          >
            <span className="flex">
              <DownloadIcon />
            </span>
          </button>
          <div className="flex flex-col">
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "5rem 5rem 0px 0px",
                borderBottom: "calc(0.0625rem) solid rgba(255, 255, 255, 0.24)",
              }}
            >
              <button
                className="flex items-center justify-center h-10 w-10"
                type="button"
                style={{ background: "rgba(25, 25, 25, 0.5)" }}
                aria-label="Remove background - "
              >
                <RemoveBackgroundIcon />
              </button>
            </div>
            <div
              className="relative"
              style={{
                borderRadius: "0px 0px 5rem 5rem",
              }}
            >
              <div className="absolute top-0 left-0 w-8 flex justify-center bg-purple-gradient text-van-gogh-3xs text-white rounded-full">
                New
              </div>
              <button
                type="button"
                style={{ background: "rgba(25, 25, 25, 0.5)" }}
                className="flex items-center justify-center h-10 w-10"
                aria-label="Generate Motion video"
              >
                <MotionVideoIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative mt-0" style={{ borderRadius: "2.5rem" }}>
              <div className="absolute top-0 left-0 w-full flex justify-center bg-purple-gradient text-van-gogh-3xs text-white rounded-full">
                New
              </div>
              <button
                type="button"
                style={{ background: "rgba(25, 25, 25, 0.5)" }}
                className="flex items-center justify-center h-10 w-10"
                aria-label="Alchemy Upscaler - use this to refine and upscale your images. This can improve faces and hands as part of the process. "
              >
                <UpscalerIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              style={{
                borderRadius: "calc(5rem) calc(5rem) 0px 0px",
                borderBottom: "calc(0.0625rem) solid rgba(255, 255, 255, 0.24)",
              }}
            >
              <button
                type="button"
                style={{ background: "rgba(25, 25, 25, 0.5)" }}
                className="flex items-center justify-center h-10 w-10"
                aria-label="Use as image guidance input"
              >
                <ImageGuidanceIcon />
              </button>
            </div>
            <div
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
          </div>
          <div className="relative">
            <button
              type="button"
              style={{ background: "rgba(25, 25, 25, 0.5)" }}
              className="flex items-center justify-center h-10 w-10"
              aria-label="Upgrade to premium to delete image"
            >
              <DeleteIcon color="white" opacity={0.4} />
            </button>
            <div
              className="flex w-fit bg-purple-gradient absolute right-0 top-0 text-van-gogh-3xs text-white rounded-full py-0.5 px-1.5"
              style={{ left: "calc(0.125rem * -1)" }}
            >
              Premium
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardHoverOverlay;
