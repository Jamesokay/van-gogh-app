import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

const ImageInputModal: FC<{
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}> = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal variant="imageInputModal" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold text-van-gogh-2xl">Select Image Input</p>
            <ModalCloseButton />
          </div>
          <div className="flex">
            <div className="flex px-7 gap-7 border-b border-van-gogh-border-grey-300">
              <div className="py-3 van-gogh-header-link">Your Uploads</div>
              <div className="py-3 van-gogh-header-link">Your Generations</div>
              <div className="py-3 van-gogh-header-link">Community Feed</div>
              <div className="py-3 van-gogh-header-link">Follower Feed</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <div className="flex justify-between items-stretch gap-3">
              <div className="flex items-center gap-7">
                <div className="flex gap-3 items-stretch min-w-96">
                  <div
                    className="placeholder w-full"
                    style={{ background: "#171717" }}
                  ></div>
                  <div className="relative flex text-van-gogh-sm h-10 bg-van-gogh-pink-gradient p-[1px] rounded-lg hover:shadow-van-gogh-purple-glow">
                    <button className="flex gap-1 bg-van-gogh-input-grey-700 h-full w-full flex items-center justify-center px-14 rounded-lg">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="placeholder w-40"
                style={{ background: "#171717" }}
              ></div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>Body section</div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageInputModal;
