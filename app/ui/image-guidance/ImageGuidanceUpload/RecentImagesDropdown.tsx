import { LeonardoGeneratedImage } from "@/app/lib/definitions";
import { ArrowForwardIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import ImageInputModal from "./ImageInputModal";

const RecentImagesDropdown: FC<{
  setValue: (value: LeonardoGeneratedImage) => void;
  images: LeonardoGeneratedImage[];
}> = ({ setValue, images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu variant="recentImagesMenu">
      <MenuButton>
        <div className="flex w-full justify-between items-center px-3 py-2">
          <span className="text-van-gogh-sm font-light">
            Select from&nbsp;<span className="font-medium">Recent Images</span>
          </span>
          &nbsp;
          <TriangleDownIcon w={2.5} />
        </div>
      </MenuButton>
      <MenuList>
        <div className="flex flex-col max-h-[18rem] overflow-y-auto">
          <MenuGroup>
            <p className="py-1.5 px-2.5 text-van-gogh-xs text-van-gogh-grey-700">
              Generations
            </p>
            <div className="grid grid-cols-van-gogh-auto-fit-minmax-75px px-2.5 pb-2.5 gap-2.5">
              {images.map((image) => (
                <MenuItem key={image.id} onClick={() => setValue(image)}>
                  <div
                    role="button"
                    className="relative w-full h-full overflow-hidden rounded-md"
                  >
                    <img
                      src={image.url}
                      className="absolute w-full h-full object-cover"
                      alt="recent image"
                    />
                  </div>
                </MenuItem>
              ))}
            </div>
          </MenuGroup>
        </div>
        <button
          className="flex justify-center items-center gap-1 w-full h-8 bg-van-gogh-blue-500"
          onClick={onOpen}
        >
          <span className="text-van-gogh-sm font-medium">Show more</span>
          <ArrowForwardIcon />
        </button>
        <ImageInputModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </MenuList>
    </Menu>
  );
};

export default RecentImagesDropdown;
