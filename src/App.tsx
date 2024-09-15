import {
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import 'swiper/css'
import customTheme from "./theme";
import { router } from "./router/router";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="Gym Center - %s" />
      <ChakraProvider theme={customTheme}>
        <ColorModeScript
          initialColorMode={customTheme.config?.initialColorMode}
        />
        <RouterProvider router={router} />
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
