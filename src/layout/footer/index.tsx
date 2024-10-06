import { Box, Stack, StackDivider } from "@chakra-ui/react";
import { Copyright } from "./copyright";
import { Logo } from "./logo";
import { LinkGrids } from "./link-grids";

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      padding={"0px 20px"}
      maxW="6xl"
      // py="12"
      // px={{ base: "4", md: "8" }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          // spacing={{ base: "10", lg: "40" }}
          padding="80px 0px 100px"
          gap={"24px"}
        >
          <Box flex="1">
            <Logo />
          </Box>
          <Stack direction={{ base: "column", md: "row" }} spacing={2}>
            <LinkGrids spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
          </Stack>
        </Stack>
        <Copyright />
      </Stack>
    </Box>
  );
}