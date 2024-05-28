import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const imageInputSearch = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "transparent",
    fontWeight: 400,
    background: "#171717",
    _focus: {
      borderColor: "vanGoghPurple.400"
    }
  },
})

const authInput = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "transparent",
    fontWeight: 400,
    background: "#171717",
    _focus: {
      borderColor: "vanGoghPurple.400"
    }
  },
})

export const inputTheme = defineMultiStyleConfig({ variants: { imageInputSearch, authInput } })