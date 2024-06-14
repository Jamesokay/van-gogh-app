import { FC } from "react";
import TickIcon from "../../svg/TickIcon";
import { ImageInputGridProps } from "@/app/lib/definitions";

const ImageInputGrid: FC<ImageInputGridProps> = ({
  selected,
  columns,
  columnImages,
  handleSelect,
  mobile
}) => {
  return (
    <div
      className={mobile ? "grid gap-4 md:hidden" : "hidden md:grid gap-4"}
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
                selected?.id === image.id
                  ? "selected-image-with-border"
                  : "image-with-border"
              } relative border-transparent border-4 flex justify-center mb-4 w-full rounded-2xl`}
              onClick={() => handleSelect(selected?.id, image)}
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
                ${selected?.id === image.id ? "opacity-100" : "opacity-0"}`}
              >
                <TickIcon fill={"#fff"} className="h-10 w-10" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageInputGrid;
