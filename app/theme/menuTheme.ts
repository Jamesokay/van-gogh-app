import { menuAnatomy } from "@chakra-ui/anatomy";

import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseMenuStyle = definePartsStyle({
  // TODO: style button part of Menu here too
  list: {
    bg: "vanGoghBlue.900",
    border: "1px",
    borderColor: "vanGoghGrey.400",
  },
  item: {
    bg: "vanGoghBlue.900",
    fontSize: "0.75rem",
  },
});

const modelMenu = definePartsStyle({
  button: {
    h: "3.5rem",
    minW: "20rem",
    bg: "vanGoghBlue.900",
    border: "1px",
    borderColor: "transparent",
    borderRadius: "0.375rem",
    fontWeight: 500,
    paddingRight: "0.5rem",
    paddingLeft: "0.75rem",
    color: "white",
    _active: {
      borderColor: "vanGoghPurple.400",
    },
  },
  list: {
    padding: 0,
    borderWidth: "0.0625rem",
    overflow: "hidden",
  },
  item: {
    fontSize: "0.875rem",
    borderBottom: "0.03rem solid",
    borderColor: "rgb(36, 44, 62)",
    bg: "rgb(11, 15, 23)",
    height: "2.5rem",
    _hover: {
      bg: "rgb(22, 23, 27)",
    },
  },
});

export const menuTheme = defineMultiStyleConfig({
  baseStyle: baseMenuStyle,
  variants: { modelMenu },
});
