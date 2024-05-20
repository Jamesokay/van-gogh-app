import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)
const baseStyle = definePartsStyle({
  // define the part you're going to style
  content: {
    bg: 'transparent',
    border: 'none',
    w: 'auto'
  },
  body: {
    display: 'flex',
    flexDir: 'column',
    bg: 'black',
    borderRadius: '0.375rem',
    border: '1px solid #242C3E',
    p: 0,
    overflow: "hidden"
  }
})
export const popoverTheme = defineMultiStyleConfig({ baseStyle })