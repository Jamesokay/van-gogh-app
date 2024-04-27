import { extendTheme } from "@chakra-ui/react";
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
    _hover: {
      bg: "vanGoghGrey.400",
    },
  },
});

const menuTheme = defineMultiStyleConfig({ baseStyle: baseMenuStyle });

const theme = extendTheme({
  colors: {
    vanGoghBlue: {
      900: "#0c1622",
    },
    vanGoghGrey: {
      400: "rgb(36, 44, 62)",
    },
    vanGoghPurple: {
      400: "rgb(114, 88, 242)",
    },
  },
  components: {
    Menu: menuTheme,
  },
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
});

export default theme;
