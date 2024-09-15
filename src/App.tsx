import {
  ChakraProvider,
  ColorModeProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import customTheme from "./theme";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

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
