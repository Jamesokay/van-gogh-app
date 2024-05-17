import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";

const RecentImagesDropdown: FC<{
  setValue: (value: string) => void;
  images: string[];
}> = ({ setValue, images }) => {
  return (
    <Menu>
      <MenuButton textAlign="left">
        <div className="flex w-full justify-between items-center px-3 py-2">
          <span className="text-van-gogh-sm font-light">
            Select from&nbsp;<span className="font-medium">Recent Images</span>
          </span>
          &nbsp;
          <TriangleDownIcon w={2.5} />
        </div>
      </MenuButton>
      <MenuList maxH="18rem" w="584px" overflowY="scroll">
        <MenuGroup>
          <p className="py-1.5 px-2.5 text-van-gogh-xs text-van-gogh-grey-700">
            Generations
          </p>
          <div
            className="px-2.5 pb-2.5 gap-2.5"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr)",
            }}
          >
            {images.map((image) => (
              <MenuItem
                key={image}
                onClick={() => setValue(image)}
                h="75px"
                w="100%"
                minW="75px"
                p="0"
              >
                <div
                  role="button"
                  className="relative w-full h-full overflow-hidden rounded-md"
                >
                  <img
                    src={image}
                    className="absolute w-full h-full object-cover"
                    alt="recent image"
                  />
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default RecentImagesDropdown;
