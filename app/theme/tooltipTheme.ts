import { cssVar, defineStyleConfig } from "@chakra-ui/react";

const $arrowBg = cssVar("popper-arrow-bg");
const baseTooltipStyle = {
  background: "vanGoghGrey.500",
  borderRadius: "0.375rem",
  [$arrowBg.variable]: "colors.vanGoghGrey.500",
};

export const tooltipTheme = defineStyleConfig({ baseStyle: baseTooltipStyle });
