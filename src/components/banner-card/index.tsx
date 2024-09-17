import {
  SimpleGrid,
  Box,
  Flex,
  Image,
  Button,
  Badge,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import { SplitWithIcon } from "./list-card";

export default function Card() {
  return (
    <Box as="section" my={12} mx={{ base: "1rem", md: "5rem" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} as="article">
        <Flex bg="brand.400">
          <Image
            src={"/group.png"}
            alt={"Hero Image"}
            fit="cover"
            w="full"
            loading="lazy"
            opacity={0.9}
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          pl={{ base: 4, md: 8, lg: 10 }}
          py={10}
        >
          <Box
            mb={4}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
            Transform your physique with our fitness plan.
          </Box>
          <SplitWithIcon />
          <ButtonGroup>
            <Button
              w={{ base: "full", sm: "auto" }}
              bg="primary.500"
              _hover={{ bg: "primary.500" }}
              color="gray.100"
            >
              Join Now
            </Button>
            <Button
              w={{ base: "full", sm: "auto" }}
              bg="transparent"
              color="gray.100"
            >
              Contact Us
            </Button>
          </ButtonGroup>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
