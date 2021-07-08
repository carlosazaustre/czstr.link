import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
});

export { ChakraProvider as ThemeProvider };
export default theme;
