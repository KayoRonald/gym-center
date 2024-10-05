import { Box, VStack, Text } from "@chakra-ui/react";

type PriceHeadingProps = {
  type: string;
  price: string;
  isHighlighted?: boolean;
};

export const PriceHeading: React.FC<PriceHeadingProps> = ({
  type,
  price,
  isHighlighted,
}) => {
  return (
    <Box textAlign={"start"}>
      <Text
        fontWeight="500"
        fontSize="20px"
        color={isHighlighted ? "white" : "primary.500"}
      >
        {type}
      </Text>
      <VStack justify={'flex-start'} align={'flex-start'}>
        <Text fontSize="5xl" fontWeight="900">
          {price}
        </Text>
        <Text fontSize="sm" mb={4} lineHeight={'24px'}>
          per month, billed annually
        </Text>
      </VStack>
    </Box>
  );
};
