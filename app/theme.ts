import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    vanGoghBlue: {
      900: "#0c1622", // Your custom RGB value
    },
    vanGoghGrey: {
      400: "rgb(36, 44, 62)",
    },
    vanGoghPurple: {
      400: "rgb(114, 88, 242)",
    },
  },
  styles: {
    global: {
      body: {
        color: "white", // Setting text color globally to white
      },
    },
  },
});

export default theme;
