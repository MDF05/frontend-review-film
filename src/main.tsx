import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import themeSystem from "@/libs/chakra-theme.ts";
import { ColorModeProvider } from "@/components/ui/color-mode";
import AppRouter from "./libs/react-router-dom.tsx";
import "@/css/auth.css";
import { Provider } from "react-redux";
import store from "@/stores/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider value={themeSystem}>
        <ColorModeProvider>
          <AppRouter />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>,
);
