import { whiten } from "@chakra-ui/theme-tools";

export const buttonStyles = {
  variants: {
    green: {
      w: "130px",
      h: "60px",
      borderRadius: "8px",
      bg: "primary",
      color: "white",
      _hover: { bg: whiten("primary", 50) },
      _focus: { boxShadow: "none" },
    },
    gray: {
      w: "130px",
      h: "60px",
      borderRadius: "8px",
      bg: "gray.100",
      color: "gray.300",
      _hover: {
        bg: "gray.300",
        color: "gray.100",
      },
      _focus: { boxShadow: "none" },
    },
    greenMd: {
      w: "130px",
      h: "40px",
      borderRadius: "8px",
      bg: "primary",
      color: "white",
      _hover: { bg: whiten("primary", 50) },
      _focus: { boxShadow: "none" },
    },
    grayMd: {
      w: "130px",
      h: "40px",
      borderRadius: "8px",
      bg: "gray.100",
      color: "gray.300",
      _hover: {
        bg: "gray.300",
        color: "gray.100",
      },
      _focus: { boxShadow: "none" },
    },
  },
};
