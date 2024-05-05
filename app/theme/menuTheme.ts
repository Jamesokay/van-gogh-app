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

export const menuTheme = defineMultiStyleConfig({ baseStyle: baseMenuStyle });