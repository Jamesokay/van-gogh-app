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
      cursor: "not-allowed",
      opacity: "0.5",
      _hover: {
        borderColor: "vanGoghGrey.400",
      },
    },
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

const threeDotsMenu = definePartsStyle({
  button: {
    bg: "transparent",
    width: "1.875rem",
    height: "1.875rem",
    borderColor: "transparent",
    _active: {
      borderColor: "transparent",
    },
    _hover: {
      bg: "vanGoghBlue.900",
      borderColor: "transparent",
    },
  },
  item: {
    bg: "rgb(11, 15, 23)",
    height: "2.5rem",
    fontSize: "0.875rem",
    borderBottom: "0.03rem solid",
    borderColor: "rgb(36, 44, 62)",
    _hover: {
      bg: "rgb(22, 23, 27)",
    },
  },
});

const headerMenu = definePartsStyle({
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

const newMenu = definePartsStyle({
  button: {
    maxH: "3.5rem",
    maxW: "20rem",
    bg: "vanGoghBlue.900",
    border: "1px",
    borderColor: "vanGoghGrey.400",
    borderRadius: "0.375rem",
    fontWeight: 500,
    fontSize: "0.875rem",
    paddingRight: "0.75rem",
    paddingLeft: "0.75rem",
    color: "white",
    _active: {
      borderColor: "vanGoghGrey.400",
      bg: "vanGoghBlue.900"
    },
    _hover: {
      borderColor: "vanGoghGrey.400",
      bg: "rgb(22, 29, 45)"
    }
  },
  item: {
    fontSize: "0.875rem",
    borderBottom: "0.03rem solid",
    borderColor: "rgb(36, 44, 62)",
    bg: "rgb(11, 15, 23)",
    height: "2.5rem",
    width: "100%",
    _hover: {
      bg: "vanGoghBlue.900"
    },
  },
});

const recentImagesMenu = definePartsStyle({
  list: {
    w: "584px", // need mobile responsiveness
    bg: "rgb(11, 15, 23)"
  },
  item: {
    h: "75px",
    minW: "75px",
    w: "100%",
    p: 0,
  },
});

const upscalerRecentImagesMenu = definePartsStyle({
  button: {
    _hover: {
      borderColor: "vanGoghGrey.400",
      bg: "rgb(22, 29, 45)"
    },
    _active: {
      borderColor: "vanGoghGrey.400",
      bg: "rgb(22, 29, 45)"
    },
  },
  list: {
    w: "265px",
    bg: "rgb(11, 15, 23)"
  },
  item: {
    h: "75px",
    minW: "75px",
    w: "100%",
    p: 0,
  },
});

const lg = defineStyle({
  fontSize: "0.875rem",
  minH: "2.5rem",
});

const md = defineStyle({
  fontSize: "0.75rem",
});

const sizes = {
  lg: definePartsStyle({ button: lg, item: lg }),
  md: definePartsStyle({ button: md, item: md }),
};

export const menuTheme = defineMultiStyleConfig({
  baseStyle: baseMenuStyle,
  variants: { headerMenu, threeDotsMenu, recentImagesMenu, upscalerRecentImagesMenu, newMenu },
  sizes: sizes,
});
