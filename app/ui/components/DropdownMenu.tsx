import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

type DropdownMenuProps<T extends string = string> = {
  options: T[];
  value: T;
  setValue: (value: T) => void;
};

const DropdownMenu = <T extends string = string>({
  options,
  value,
  setValue,
}: DropdownMenuProps<T>) => {
  return (
    <Menu>
      <MenuButton
        w="100%"
        bg="vanGoghBlue.900"
        border="1px"
        borderColor="vanGoghGrey.400"
        color="white"
        fontSize="0.75rem"
        _hover={{ border: "1px", borderColor: "vanGoghPurple.400" }}
        _active={{ bg: "vanGoghBlue.900", borderColor: "vanGoghPurple.400" }}
        as={Button}
        rightIcon={<TriangleDownIcon w={2.5} />}
      >
        {value}
      </MenuButton>
      <MenuList bg="vanGoghBlue.900" border="1px" borderColor="vanGoghGrey.400">
        {options.map((option) => (
          <MenuItem
            bg="vanGoghBlue.900"
            fontSize="0.75rem"
            _hover={{ bg: "vanGoghGrey.400" }}
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
