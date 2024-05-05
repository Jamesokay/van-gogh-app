import { menuAnatomy } from "@chakra-ui/anatomy";

import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseMenuStyle = definePartsStyle({
  button: {
    bg: "vanGoghBlue.900",
    h: "100%",
    w: "100%",
    border: "1px",
    borderColor: "vanGoghGrey.400",
    borderRadius: "0.375rem",
    color: "white",
    fontWeight: 500,
    _hover: {
      borderColor: "vanGoghPurple.400",
    },
    _active: {
      borderColor: "vanGoghPurple.400",
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
      _hover: {
        borderColor: "vanGoghGrey.400",
      },
    }
  },
  list: {
    bg: "vanGoghBlue.900",
    borderColor: "vanGoghGrey.400",
    padding: 0,
    borderWidth: "0.0625rem",
    overflow: "hidden",
  },
  item: {
    bg: "vanGoghBlue.900",
    _hover: {
      bg: "vanGoghGrey.400",
    },
  },
});

const lg = defineStyle({
  fontSize: "0.875rem",
  minH: '2.5rem'
});

const md = defineStyle({
  fontSize: "0.75rem",
});

const sizes = {
  lg: definePartsStyle({ button: lg, item: lg }),
  md: definePartsStyle({ button: md, item: md }),
};

const headerMenu = {
  button: {
    maxH: "3.5rem",
    border: "transparent"
  }
};

const modelMenu = definePartsStyle({
  button: {
    maxH: "3.5rem",
    maxW: "20rem",
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
  variants: { modelMenu, headerMenu },
  sizes: sizes,
});
