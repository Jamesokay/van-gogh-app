import { ImageCardButtonProps } from "@/app/lib/definitions";
import { Tooltip } from "@chakra-ui/react";
import { FC } from "react";

const ImageCardButton: FC<ImageCardButtonProps> = ({
  children,
  label,
  onClick = () => {},
  rounded = "",
  disabled = false
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
        className={`bg-van-gogh-black-opal-200 h-10 w-10 ${roundedClassName} flex items-center justify-center backdrop-brightness-150 grayscale hover:grayscale-0 transition-all ${
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
