import { FC } from "react";
import DownloadIcon from "../svg/DownloadIcon";
import { Tooltip } from "@chakra-ui/react";
import { tooltipText } from "@/app/lib/stringConstants";

const ImageDownloadButton: FC<{ src: string; className?: string }> = ({
  src,
  className = "",
}) => {
  const downloadImage = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      return blobUrl;
    } catch (error) {
      console.error("Failed to download image", error);
      throw error;
    }
  };

  const getFileNameFromUrl = (url: string): string => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  const handleDownloadClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const url = await downloadImage(src);
      const filename = getFileNameFromUrl(src);

      // Create a temporary anchor to trigger the download
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Revoke the Blob URL after the download
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to create blob URL", error);
    }
  };

  return (
    <Tooltip label={tooltipText.downloadImage}>
      <button
        onClick={handleDownloadClick}
        className={`${className} bg-van-gogh-black-opal-200 h-10 w-10 rounded-full flex items-center justify-center grayscale hover:grayscale-0 hover:bg-transparent hover:bg-transparent-purple-gradient transition-all`}
      >
        <DownloadIcon />
      </button>
    </Tooltip>
  );
};

export default ImageDownloadButton;
