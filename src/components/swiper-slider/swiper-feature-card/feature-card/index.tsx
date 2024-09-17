import { Box, Center, Icon, Text, chakra } from "@chakra-ui/react";

interface SlideProps {
  isActive: boolean;
  icon: React.ElementType;
  name: string;
  description: string;
}

export const FeatureCard = ({
  isActive,
  icon,
  name,
  description,
}: SlideProps) => {
  return (
    <Box
      bg={isActive ? "blue.500" : "gray.700"}
      p={6}
      rounded="lg"
      textAlign="center"
      pos="relative"
      height="80%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      transition="background-color 0.3s"
    >
      <Center>
        <Icon
          mr={3}
          w={8}
          h={8}
          as={icon}
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          color={isActive ? "white" : "primary.500"}
        />
      </Center>
      <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
        {name}
      </chakra.h3>
      <Text fontSize="md" mt={4}>
        {description}
      </Text>
    </Box>
  );
};
