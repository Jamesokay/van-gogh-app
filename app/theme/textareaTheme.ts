import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const prompt = defineStyle({
  border: "1px solid",
  borderColor: "transparent",
  background: "rgb(16, 22, 34)",
  borderRadius: "0.5rem",
  color: "rgb(151, 151, 151)",
  width: "100%",
  minH: "45px",
  display: "flex",
  resize: "none",
  outlineColor: "transparent",
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
  _active: {
    outlineColor: "transparent",
  },
  _placeholder: {
    color: "rgb(81, 81, 81)",
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { prompt },
});
