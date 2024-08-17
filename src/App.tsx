import { ChakraProvider } from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import customTheme from "./theme";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="Odonto Clinic - %s" />
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
