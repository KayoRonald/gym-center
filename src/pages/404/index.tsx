import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import BubbleBackground from "./bubble-background";

const Error404 = () => {
  const { t } = useTranslation();
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      textAlign="center"
      overflow="hidden"
    >
      <BubbleBackground />

      <VStack spacing={6} zIndex={1}>
        <HStack spacing={4}>
          <Icon as={FaDumbbell} boxSize={8} color="teal.500" />
          <Heading as="h1" size="4xl" color="teal.500">
            404
          </Heading>
          <Icon as={FaDumbbell} boxSize={8} color="teal.500" />
        </HStack>
        <Heading as="h2" size="lg">
          {t("error404.title")}
        </Heading>
        <Text fontSize="lg" maxW="md">
          {t("error404.message")}
        </Text>
        <Button
          as={Link}
          to="/"
          colorScheme="teal"
          size="lg"
          _hover={{ bg: "teal.600" }}
          px={10}
        >
          {t("error404.buttonText")}
        </Button>
      </VStack>
    </Box>
  );
};

export default Error404;
