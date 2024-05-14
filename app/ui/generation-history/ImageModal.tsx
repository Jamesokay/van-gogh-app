import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import TriangleNavIcon from "../svg/TriangleNavIcon";
import Image from "next/image";
import DownloadIcon from "../svg/DownloadIcon";
import CopyOutlineIcon from "../svg/CopyOutlineIcon";
import RemoveBackgroundIcon from "../svg/RemoveBackgroundIcon";
import UpscalerIcon from "../svg/UpscalerIcon";
import DeleteFilledIcon from "../svg/DeleteFilledIcon";
import { badgeText, tooltipText } from "@/app/lib/stringConstants";
import BadgeWrapper from "../components/BadgeWrapper";
import ImageCardButton from "../components/ImageCardButton";
import ImageDownloadButton from "../components/ImageDownloadButton";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleImageNav: (direction: "forward" | "back") => void;
  width: number;
  height: number;
  src: string;
};

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  handleImageNav,
  width,
  height,
  src,
}) => {
  return (
    <Modal variant="imageModal" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <button
          className="bg-van-gogh-black-opal-200 left-image-nav flex justify-center items-center rounded-full bg-black w-8 h-8 absolute top-1/2 hover:shadow-purple-glow"
          onClick={() => handleImageNav("back")}
        >
          <TriangleNavIcon />
        </button>
        <button
          className="bg-van-gogh-black-opal-200 right-image-nav flex justify-center items-center rounded-full bg-black w-8 h-8 absolute top-1/2 hover:shadow-purple-glow"
          onClick={() => handleImageNav("forward")}
        >
          <TriangleNavIcon className="rotate-180" />
        </button>
        <ModalBody>
          <div
            className="flex justify-center md:min-w-van-gogh-modal-width max-w-van-gogh-modal-width md:min-h-van-gogh-modal-height max-h-van-gogh-modal-height"
            style={{
              aspectRatio: `auto ${width} / ${height}`,
            }}
          >
            <div className="relative flex justify-center h-auto w-[768px] min-h-fit min-w-fit max-h-full max-w-fit">
              <Image
                className="rounded-t-lg"
                width={width}
                height={height}
                alt=""
                src={src}
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="flex w-full p-4 gap-5 justify-end">
            <div className="flex gap-1">
              <ImageDownloadButton src={src} />
              <ImageCardButton label={tooltipText.copy}>
                <CopyOutlineIcon />
              </ImageCardButton>
              <ImageCardButton label={tooltipText.removeBackground}>
                <RemoveBackgroundIcon />
              </ImageCardButton>
            </div>
            <BadgeWrapper label={badgeText.new}>
              <ImageCardButton label={tooltipText.alchemyUpscaler}>
                <UpscalerIcon />
              </ImageCardButton>
            </BadgeWrapper>
            <BadgeWrapper label={badgeText.premium}>
              <ImageCardButton label={tooltipText.premiumToDelete}>
                <DeleteFilledIcon />
              </ImageCardButton>
            </BadgeWrapper>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
