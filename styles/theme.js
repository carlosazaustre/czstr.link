import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#FBD065",
      500: "#FBDA89",
      100: "#FBE5B0",
    },
    secondary: {
      900: "#202225",
      500: "#2A2D31",
      100: "#3B3F45",
    },
    grayblue: {
      900: "#E2E8F0",
      500: "#A1A6AB",
      100: "#797C81",
    },
  },
  fonts: {
    body: "Poppins",
  },
});

export { ChakraProvider as ThemeProvider };
export default theme;
