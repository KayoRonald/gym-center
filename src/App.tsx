import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "@fontsource/urbanist/700.css";
import "@fontsource/poppins";
import customTheme from "./theme";
import { router } from "./router/router";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n/";

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18next}>
        <ChakraProvider theme={customTheme}>
          <ColorModeScript
            initialColorMode={customTheme.config?.initialColorMode}
          />
          <RouterProvider router={router} />
        </ChakraProvider>
      </I18nextProvider>
      <Helmet titleTemplate="Gym Center - %s" />
    </HelmetProvider>
  );
}

export default App;
