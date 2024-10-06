import { Image, Link, Stack, Text } from "@chakra-ui/react";

export const Logo = () => (
  <Stack spacing={4} align="flex-start" maxW="300px">
    <Link href="https://github.com/kayoronald" isExternal>
      <Image
        w="180px"
        h={"46px"}
        src="/gym-center-footer.svg"
        alt="Gym Center"
      />
    </Link>
    <Text mt={2} color="gray.500" fontSize="md">
      Highlight benefits of each exercise, both physical and mental
    </Text>
  </Stack>
);
