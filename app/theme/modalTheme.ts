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
    padding: 0,
    background: 'rgb(17, 17, 17)',
    borderBottom: "1px solid rgb(38, 39, 44)"
  },
  body: {
    padding: '1.75rem',
    marginTop: 0,
    overflowY: "scroll"
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
    width: "100%",
    margin: "auto",
    maxW: "1150px",
    maxH: "calc(-2.5rem + 100vh)",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px",
    borderRadius: '1rem',
    overflow: 'hidden'
  },
  // content container
  dialogContainer: {
    overflow: "hidden"
  },
  footer: {
    background: 'rgb(17, 17, 17)',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1.75rem",
    borderTop: "1px solid rgb(38, 39, 44)"
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { imageModal, imageInputModal },
});
