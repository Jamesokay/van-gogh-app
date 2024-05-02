import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { DropdownMenuProps } from "@/app/lib/definitions";

const DropdownMenu = <T extends string = string>({
  options,
  value,
  setValue,
  isDisabled,
  align,
  leftIcon,
  headerTheme,
  large
}: DropdownMenuProps<T>) => {
  return (
    <Menu>
      <MenuButton
        isDisabled={isDisabled}
        w="100%"
        h="100%"
        bg="vanGoghBlue.900"
        border="1px"
        borderColor={headerTheme ? "transparent" : "vanGoghGrey.400"}
        color="white"
        fontSize={headerTheme? "0.875rem" : "0.75rem"}
        fontWeight={500}
        textAlign={align}
        _hover={{
          borderColor: isDisabled ? "vanGoghGrey.400" : "vanGoghPurple.400",
        }}
        _active={{ bg: "vanGoghBlue.900", borderColor: "vanGoghPurple.400" }}
        as={Button}
        rightIcon={<TriangleDownIcon w={2.5} />}
        leftIcon={leftIcon}
      >
        {value}
      </MenuButton>
      <MenuList padding="0" borderWidth="0.0625rem" overflow="hidden">
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => setValue(option)}
            bg={headerTheme ? "rgb(11, 15, 23)" : ""}
            h={large ? "2.5rem" : ""}
            fontSize={headerTheme ? "0.875rem" : "0.75rem"}
            _hover={
              headerTheme
                ? { bg: "rgb(22, 23, 27)" }
                : { bg: "vanGoghGrey.400" }
            }
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
