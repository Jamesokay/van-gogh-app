import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { DropdownMenuProps } from "@/app/lib/definitions";

const DropdownMenu = <T extends string = string>({
  options,
  value,
  setValue,
  isDisabled,
  align
}: DropdownMenuProps<T>) => {
  return (
    <Menu>
      <MenuButton
        isDisabled={isDisabled}
        w="100%"
        bg="vanGoghBlue.900"
        border="1px"
        borderColor="vanGoghGrey.400"
        color="white"
        fontSize="0.75rem"
        textAlign={align}
        _hover={{ borderColor: isDisabled ? "vanGoghGrey.400" : "vanGoghPurple.400" }}
        _active={{ bg: "vanGoghBlue.900", borderColor: "vanGoghPurple.400" }}
        as={Button}
        rightIcon={<TriangleDownIcon w={2.5} />}
      >
        {value}
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => setValue(option)}
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
