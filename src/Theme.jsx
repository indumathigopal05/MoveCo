import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "32em",  // 512px
    md: "48em",  // 768px
    lg: "64em",  // 1024px
    xl: "80em",  // 1280px
  },
});

export default theme;
