import { Text, Stack, VStack } from "@chakra-ui/react";

interface ToggleProps {
  isMonthly: boolean;
  handleChange: () => void;
}

export const Toggle = ({ isMonthly, handleChange }: ToggleProps) => {
  return (
    <VStack spacing={2} textAlign="center" gap={"24px"} mt="20px" mb='24px'>
      <Stack
        bg="#FFFFFF"
        w="336px"
				h={'62px'}
        padding={"8px 12px"}
        rounded={"md"}
        onClick={handleChange}
        direction={"row"}
        cursor="pointer"
      >
        <Text
          fontWeight="bold"
          fontSize="sm"
          bg={isMonthly ? "white" : "gray.700"}
          padding={"11px 24px"}
          w="150px"
          color={isMonthly ? "gray.700" : "gray.400"}
          rounded={"md"}
        >
          Billed Montly
        </Text>
        <Text
          color={!isMonthly ? "gray.700" : "gray.400"}
          fontWeight="bold"
          fontSize="sm"
          padding={"11px 24px"}
          bg={!isMonthly ? "white" : "gray.700"}
          w="150px"
          rounded={"md"}
        >
          Billed Yearly
        </Text>
      </Stack>
    </VStack>
  );
};
