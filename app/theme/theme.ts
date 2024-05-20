import { extendTheme, Popover } from "@chakra-ui/react";
import { menuTheme } from "./menuTheme";
import { textareaTheme } from "./textareaTheme";
import { tooltipTheme } from "./tooltipTheme";
import { modalTheme } from "./modalTheme";
import { cardTheme } from "./cardTheme";
import { popoverTheme } from "./popoverTheme";

const theme = extendTheme({
  colors: {
    vanGoghBlue: {
      900: "#0c1622",
    },
    vanGoghGrey: {
      400: "rgb(36, 44, 62)",
      500: "rgb(40, 40, 40)",
    },
    vanGoghPurple: {
      400: "rgb(114, 88, 242)",
    },
  },
  components: {
    Card: cardTheme,
    Menu: menuTheme,
    Modal: modalTheme,
    Popover: popoverTheme,
    Textarea: textareaTheme,
    Tooltip: tooltipTheme,
  },
  styles: {
    global: {
      body: {
        background: "linear-gradient(112deg, #020305 0%, #070A0F 100%)",
        color: "white",
      },
    },
  },
});

export default theme;
