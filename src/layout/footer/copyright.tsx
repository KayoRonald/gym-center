import { Link, Stack, Text } from "@chakra-ui/react";

export const Copyright = () => (
  <Stack
    direction={{ base: "column", md: "row" }}
    spacing={3}
    justify="space-between"
    align={{ base: "flex-start", md: "center" }}
    pb="24px"
  >
    <Text>© {new Date().getFullYear()} Fitness Center</Text>
    <Stack spacing={2} direction={{ base: "column", md: "row" }}>
      <Link href="#">Term of Use</Link>
      <Link href="#">Privacy Policy</Link>
    </Stack>
  </Stack>
);
