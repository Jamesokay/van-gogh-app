import { ImageGenModel } from "@/app/lib/definitions";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import DimensionsIcon from "../svg/DimensionsIcon";
import PageIcon from "../svg/PageIcon";
import { TriangleDownIcon } from "@chakra-ui/icons";
import LightningIcon from "../svg/LightningIcon";
import { badgeText } from "@/app/lib/stringConstants";

const ModelDropdownMenu: FC<{
  options: ImageGenModel[];
  value: ImageGenModel;
  setValue: (modelId: string) => void;
}> = ({ options, value, setValue }) => {
  return (
    <Menu variant="modelMenu">
      <MenuButton>
        <div className="flex items-center">
          <Image
            height={30}
            width={30}
            src={value.img}
            alt={`Image for ${value.modelName}`}
            className="object-cover mr-2 min-h-[30px] rounded-md"
          />
          <div className="flex flex-col w-full items-start gap-1">
            <div className="flex justify-between w-full text-van-gogh-xs text-van-gogh-grey-m">
              <span>Finetuned</span>
              <div className="flex">
                <DimensionsIcon />
                {`${value.modelWidth}x${value.modelHeight}`}
              </div>
            </div>
            <p className="text-van-gogh-sm">{value.modelName}</p>
          </div>
          <div className="flex gap-4 pl-4">
            <PageIcon />
            <TriangleDownIcon w={2.5} />
          </div>
        </div>
      </MenuButton>
      <MenuList>
        {options.map((model) => (
          <MenuItem key={model.modelId} onClick={() => setValue(model.modelId)}>
            <div className="flex justify-between w-full items-center">
              <p>{model.modelName}</p>
              <div className="flex items-center">
                <div className={model.baseModel === 'SDXL_LIGHTNING' ? "flex ml-2" : "hidden"}>
                  <LightningIcon />
                </div>
                <div
                  className={
                    model.alchemy
                      ? "flex ml-2 bg-van-gogh-black-opal rounded-full py-1 px-2.5"
                      : "hidden"
                  }
                >
                  <p className="van-gogh-gradient-text">{badgeText.alchemy}</p>
                </div>
              </div>
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ModelDropdownMenu;
