import { extendTheme } from "@chakra-ui/react";
// const theme = {
//   colors: {
//     primary: "rebeccapurple",
//   },
// }

export const fonts = {
  helvetica: "Helvetica Neue, Helvetica, Arial, sans-serif",
};

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#FFFFFF",
      100: "#F1F1F1",
      150: "#E3E3E3",
      200: "#D5D5D5",
      250: "#C6C6C6",
      300: "#B8B8B8",
      350: "#AAAAAA",
      400: "#9C9C9C",
      450: "#8E8E8E",
      500: "#808080",
      550: "#717171",
      600: "#636363",
      650: "#555555",
      700: "#474747",
      750: "#393939",
      800: "#2B2B2B",
      850: "#1C1C1C",
      900: "#0E0E0E",
      950: "#000000",
    },
  },
  fonts: {
    heading: fonts.helvetica,
    body: fonts.helvetica,
  },
});

export default theme;
