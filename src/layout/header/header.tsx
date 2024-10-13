import React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";

export const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <chakra.header
    shadow="md"
    transition="all 0.5s ease-in-out"
    pos="fixed"
    top="0"
    zIndex="modal"
    w="full"
    px={{ base: 2, sm: 4 }}
    py={4}
    mb={10}
    css={{
      backdropFilter: "saturate(180%) blur(5px)",
      backgroundColor: useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(26, 32, 44, 0.8)"
      ),
    }}
  >
    {children}
  </chakra.header>
);
