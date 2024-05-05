import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { DropdownMenuProps } from "@/app/lib/definitions";

const DropdownMenu = <T extends string = string>({
  options,
  value,
  setValue,
  isDisabled,
  leftIcon,
  headerTheme,
  large,
}: DropdownMenuProps<T>) => {
  return (
    <Menu
      variant={headerTheme ? "headerMenu" : "base"}
      size={large ? "lg" : "md"}
    >
      <MenuButton disabled={isDisabled}>
        <div className="flex items-center px-2">
          {leftIcon}
          <span className="flex flex-auto justify-center">{value}</span>
          <TriangleDownIcon w={2.5} />
        </div>
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => setValue(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
