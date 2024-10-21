import { ChakraProvider } from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "@fontsource/urbanist/700.css";
import "@fontsource/poppins";
import { router } from "./router/router";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n/";
import { theme } from "./theme";
import { ColorModeProvider } from "./components/ui/color-mode";

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18next}>
        <Helmet titleTemplate="Gym Center - %s" />
        <ChakraProvider value={theme}>
          <ColorModeProvider forcedTheme="dark">
            <RouterProvider router={router} />
          </ColorModeProvider>
        </ChakraProvider>
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;
