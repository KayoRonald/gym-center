import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

export default function Error404() {
  return (
    <>
      <Helmet title="Not Found" />
      <Flex
        flexDirection="column"
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          px={7}
          width="94%"
          maxWidth="900px"
          borderRadius="sm"
          textAlign="center"
          mt={10}
        >
          <Box p={4}>
            <VStack
              justify="center"
              spacing="4"
              textAlign="center"
              as="article"
              mt={5}
            >
              <Heading fontSize="5xl" fontWeight={700} color="#3B72FF">
                ERROR 404
              </Heading>
              <Text>Page not found! </Text>
              <Button
                bg={{
                  base: "#3B72FF",
                  md: "#3B72FF",
                }}
                _hover={{
                  bg: "#3B72FF",
                }}
                color="white"
                onClick={() => {
                  window.history.back();
                }}
                w={"100%"}
                maxW={"14rem"}
              >
                Voltar
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
