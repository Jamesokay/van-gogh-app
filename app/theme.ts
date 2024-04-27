import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";
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

const outline = defineStyle({
  border: "1px solid",
  borderColor: "transparent",
  background: "rgb(16, 22, 34)",
  borderRadius: "0.5rem",
  fontSize: "1.25rem",
  color: "rgb(151, 151, 151)",
  width: "100%",
  minH: "none",
  h: "45px",
  resize: "none",
  outline: "none",
  paddingTop: "0.875rem",
  paddingBottom: "0.875rem",
  overflow: "hidden",
  _hover: {
    background: "rgb(16, 22, 34)",
    borderColor: "transparent",
  },
  _focus: {
    borderColor: "vanGoghPurple.400",
    background: "transparent",
  },
  _placeholder: {
    color: "rgb(81, 81, 81)",
  },
});

// "input-number appearance-none bg-transparent rounded-corners-xs border border-thin border-van-gogh-grey-blue hover:border-van-gogh-grey-d focus:border-van-gogh-purple outline-none h-10 w-full min-w-input-width text-van-gogh-sm p-4 mb-4"

const textareaTheme = defineStyleConfig({
  variants: { outline },
});

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
    Textarea: textareaTheme,
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
