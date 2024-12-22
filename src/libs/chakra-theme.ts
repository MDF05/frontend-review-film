import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        blue: {
          primary: { value: "#3182CE" },
          secondary: { value: "#63C2DE" },
          tertiary: { value: "#90D5EA" },
          quaternary: { value: "#C6E4F1" },
          brand: { value: "#205589" },
        },
        green: {
          primary: { value: "#008000" },
          secondary: { value: "#00FF00" },
        },
        dark: {
          input: {
            value: "rgb(33, 41, 57)",
          },
        },
      },
      shadows: {
        basicDark: {
          value: "2px 2px 2px 2px rgba(0, 0, 0, 0.2),-2px -2px 2px 2px rgba(0, 0, 0, 0.2)",
        },
        basicLight: {
          value: "2px 2px 2px 2px rgba(255, 255, 255, 0.3), -2px -2px 2px 2px rgba(255, 255, 255, 0.2) ",
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
