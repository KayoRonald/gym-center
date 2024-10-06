import { useState } from "react";
import { Box, Heading, chakra, VStack } from "@chakra-ui/react";
import { Toggle } from "./components/toggle";
import PricingSection from "./components/section-price";

const PricingHeading = () => (
  <VStack spacing={2} textAlign="center" gap={"24px"}>
    <chakra.span fontWeight={700} fontSize={"18px"} color={"primary.500"}>
      Pricing
    </chakra.span>
    <Heading as="h1" fontSize="5xl">
      Our List Packages
    </Heading>
  </VStack>
);

export const PricingContent = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box py={8} mt={2}>
      <PricingHeading />
      <Toggle isMonthly={isMonthly} handleChange={handleChange} />
      <PricingSection isMonthly={isMonthly} />
    </Box>
  );
};
