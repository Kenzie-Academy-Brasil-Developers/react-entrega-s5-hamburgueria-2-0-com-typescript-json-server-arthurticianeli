import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./components/buttonStyles";

export const theme = extendTheme({
  colors: {
    primary: "#27AE60",

    secondary: "#EB5757",

    gray: {
      0: "#F5F5F5",
      50: "#999999",
      100: "#E0E0E0",
      300: "#828282",
      600: "#333333",
    },

    feedback: {
      negative: "#E60000",
      warning: "#FFCD07",
      success: "#168821",
      information: "#155BCB",
    },
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },

  textStyles: {
    heading1: {
      fontSize: "26px",
      fontWeight: "bold",
    },
    heading2: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    heading3: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    headline: {
      fontSize: "16px",
    },
    body: {
      fontSize: "14px",
    },
    body600: {
      fontSize: "14px",
      fontWeight: "600",
    },
    caption: {
      fontSize: "12px",
    },
  },

  components: {
    Button,
  },

  styles: {
    global: {
      body: {
        fontFamily: "Inter, sans-serif",
        bg: "white",
        color: "gray.900",
      },
    },
  },
});
