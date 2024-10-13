import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <Box px={{ base: 6, md: 3 }}>
      <Container
        maxW={"6xl"}
        bg={"primary.600"}
        rounded={"md"}
        my={"40px"}
        p={"40px"}
        
      >
        <VStack spacing={4} textAlign={"center"} align={"center"}>
          <Heading color="white" fontSize={{ base: "xl", md: "4xl" }}>
           {t("newsletter.subscribe")}
          </Heading>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "sm", md: "md" }}
            maxW={"590px"}
          >
            {t("newsletter.benefits")}
          </Text>
          <InputGroup size="lg" w={{ base: "100%", md: "600px" }}>
            <Input
              bg="white"
              rounded="md"
              _placeholder={{ color: "gray.500" }}
              _focus={{
                borderColor: "purple.700",
                boxShadow: "none",
              }}
              color={"gray.800"}
            />
            <InputRightElement width={{ base: "80px", md: "180px" }} mr={1}>
              <Button
                w="100%"
                h="40px"
                size="sm"
                bg="black"
                color="white"
                rounded="md"
                _hover={{ bg: "gray.700" }}
              >
                {t("newsletter.button")}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Container>
    </Box>
  );
};
