import { ImageGenModel } from "@/app/lib/definitions";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import DimensionsIcon from "../svg/DimensionsIcon";
import PageIcon from "../svg/PageIcon";
import { TriangleDownIcon } from "@chakra-ui/icons";
import LightningIcon from "../svg/LightningIcon";

const ModelDropdownMenu: FC<{
  options: ImageGenModel[];
  value: ImageGenModel;
  setValue: (value: ImageGenModel) => void;
}> = ({ options, value, setValue }) => {
  return (
    <Menu>
      <MenuButton
        h="3.5rem"
        minW="20rem"
        bg="vanGoghBlue.900"
        border="1px"
        borderColor="transparent"
        fontWeight={500}
        paddingRight="0.5rem"
        paddingLeft="0.75rem"
        color="white"
        _hover={{ bg: "vanGoghBlue.900" }}
        _active={{
          bg: "vanGoghBlue.900",
          borderColor: "vanGoghPurple.400",
        }}
        as={Button}
        
      >
        <div className="flex items-center">
          <Image
            height={30}
            width={30}
            src={value.img}
            alt={`Image for ${value.modelName}`}
            className="mr-2 min-h-[30px] rounded-corners-s"
          />
          <div className="flex flex-col w-full items-start gap-1">
            <div className="flex justify-between w-full text-van-gogh-xs text-van-gogh-grey-m">
              <span>{value.ModelType}</span>
              <div className="flex">
                <DimensionsIcon />
                {value.dimensions}
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
      <MenuList padding="0" borderWidth="0.0625rem" overflow="hidden">
        {options.map((model) => (
          <MenuItem
            key={model.modelId}
            onClick={() => setValue(model)}
            fontSize="0.875rem"
            borderBottom="0.03rem solid"
            borderColor="rgb(36, 44, 62)"
            bg="rgb(11, 15, 23)"
            height="2.5rem"
            _hover={{ bg: "rgb(22, 23, 27)" }}
          >
            <div className="flex justify-between w-full items-center">
              <p>{model.modelName}</p>
              <div className="flex items-center">
                <div className={model.lightning ? "flex ml-2" : "hidden"}>
                  <LightningIcon />
                </div>
                <div
                  className={
                    model.alchemy
                      ? "flex ml-2 bg-van-gogh-black-opal rounded-corners-m py-1 px-2.5"
                      : "hidden"
                  }
                >
                  <p className="van-gogh-gradient-text">Alchemy V2</p>
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
