import { ImageCardButtonProps } from "@/app/lib/definitions";
import { Tooltip } from "@chakra-ui/react";
import { FC } from "react";

const ImageCardButton: FC<ImageCardButtonProps> = ({
  children,
  label,
  onClick = () => {},
  rounded = "",
  disabled = false,
  className = "",
}) => {
  const roundedClassName =
    rounded === "t"
      ? "rounded-t-full"
      : rounded === "b"
      ? "rounded-b-full"
      : "rounded-full";
  return (
    <Tooltip label={label} hasArrow>
      <button
        type="button"
        className={`${className} bg-van-gogh-black-opal-500 h-10 w-10 ${roundedClassName} flex items-center justify-center grayscale hover:grayscale-0 hover:bg-transparent hover:bg-van-gogh-transparent-purple-gradient transition-all ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        aria-label={label}
        onClick={onClick}
      >
        {children}
      </button>
    </Tooltip>
  );
};

export default ImageCardButton;
