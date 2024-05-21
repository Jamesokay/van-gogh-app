import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const imageModal = definePartsStyle({
  body: {
    padding: 0,
    marginTop: 0,
  },
  overlay: {
    bg: "rgba(0, 0, 0, 0.48)",
    backdropFilter: "blur(2rem)",
  },
  closeButton: {
    bg: "rgba(0, 0, 0, 0.34)",
    borderRadius: "999px",
    zIndex: 50
  },
  dialog: {
    bg: "rgb(23, 23, 23)",
    width: "auto",
    margin: "auto",
    maxW: "90vw",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px"
  },
  dialogContainer: {
    overflow: "hidden",
  },
  footer: {
    padding: 0,
  },
});

const imageInputModal = definePartsStyle({
  header: {
    padding: '1.75rem 1.5rem',
    background: 'rgb(17, 17, 17)',
    borderBottom: "1px solid rgb(38, 39, 44)"
  },
  body: {
    padding: 0,
    marginTop: 0,
  },
  overlay: {
    bg: "rgba(0, 0, 0, 0.48)",
    backdropFilter: "blur(2rem)",
  },
  closeButton: {
    bg: "rgba(0, 0, 0, 0.34)",
    borderRadius: "999px",
    zIndex: 50
  },
  // content
  dialog: {
    bg: "rgb(23, 23, 23)",
    width: "auto",
    margin: "auto",
    maxW: "1150px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px"
  },
  // content container
  dialogContainer: {
    overflow: "hidden",
  },
  footer: {
    padding: 0,
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { imageModal, imageInputModal },
});
