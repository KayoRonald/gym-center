import {
  Flex,
  HStack,
  VisuallyHidden,
  Box,
  Image,
  Link,
  ButtonGroup,
  Button,
  IconButton,
  VStack,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Header } from "./header";
import { useTranslation } from "react-i18next";

export default function NavHero(){
  const mobileNav = useDisclosure();
  const { t } = useTranslation();
  return (
    <Header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        as="nav"
        maxW={"6xl"}
      >
        <Flex>
          <VisuallyHidden>Logo</VisuallyHidden>
          <Box as={ReactLink} to="/">
            <Image src="/logo.svg" alt="Logo Gym Center" maxW={"10rem"} />
          </Box>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={5}
            mr={5}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            <Link as={ReactLink} to={"/"}>
              {t("navbar.home")}
            </Link>
            <Link as={ReactLink} to="/">
              {t("navbar.program")}
            </Link>
            <Link as={ReactLink} to="/">
              {t("navbar.pricing")}
            </Link>
            <Link as={ReactLink} to="/">
              {t("navbar.community")}
            </Link>
          </HStack>
          <ButtonGroup>
            <Button
              w={99}
              borderWidth={1}
              variant={"ghost"}
              borderColor={"white"}
            >
              {t("navbar.login")}
            </Button>
            <Button w={132} bg="primary.500">
              {t("navbar.register")}
            </Button>
          </ButtonGroup>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              boxShadow={"none"}
              bg={useColorModeValue("gray.50", "#464460")}
              _hover={{ bg: useColorModeValue("gray.50", "#464460") }}
              color={useColorModeValue("gray.800", "white")}
              onClick={mobileNav.onOpen}
              icon={<AiOutlineMenu />}
            />
            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={useColorModeValue("white", "#1a202cd1")}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <Link as={ReactLink} to={"/"}>
                {t("navbar.home")}
              </Link>
              <Link as={ReactLink} to="/">
                {t("navbar.program")}
              </Link>
              <Link as={ReactLink} to="/">
                {t("navbar.pricing")}
              </Link>
              <Link as={ReactLink} to="/">
                {t("navbar.community")}
              </Link>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Header>
  );
};
