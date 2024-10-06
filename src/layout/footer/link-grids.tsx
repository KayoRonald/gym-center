import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SocialMediaLinks } from "./social-media";

export const LinkGrids = (props: SimpleGridProps) => (
  <SimpleGrid columns={[2, 2, 3]} {...props} spacing={{ base: "10", lg: "20" }}>
    <Box minW="130px">
      <Stack spacing={4} align="flex-start">
        <Text fontSize="lg" fontWeight="bold">
          Sitemap
        </Text>
        <Link href="#">About Us</Link>
        <Link href="#">Promos</Link>
        <Link href="#">News & Blog</Link>
        <Link href="#">Help Center</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack spacing={4} align="flex-start">
        <Text fontSize="lg" fontWeight="bold">
          Support
        </Text>
        <Link href="#">FAQ</Link>
        <Link href="#">Support Center</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack spacing={4} align="flex-start">
        <Text fontSize="lg" fontWeight="bold">
          Social Media
        </Text>
        <SocialMediaLinks />
      </Stack>
    </Box>
  </SimpleGrid>
);
