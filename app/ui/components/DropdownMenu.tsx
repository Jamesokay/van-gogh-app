import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

type DropdownMenuProps = {
  options: string[];
  value: string;
  setValue: (value: string) => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, value, setValue }) => {
  return (
    <Menu>
      <MenuButton
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
