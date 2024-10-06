import { Box } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/layout";

interface Props extends BoxProps {
  children: React.ReactNode;
}

export function PriceWrapper({ children, ...props }: Props) {
  return (
    <Box
      mb={4}
      alignSelf={{ base: "center", lg: "flex-start" }}
      bg={'gray.700'}
      borderRadius={"xl"}
      {...props}
    >
      {children}
    </Box>
  );
}
