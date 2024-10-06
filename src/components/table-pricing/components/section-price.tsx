import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { plans } from "../data";
import { ActionButton } from "./action-button";
import { BenefitList } from "./benefit-list";
import { BestOfferBadge } from "./best-offer-badge";
import { PriceHeading } from "./price-heading";
import { ContainerContentProps } from "../type";

const ContainerContent = ({
  children,
  textColor,
  isHighlighted,
  ...rest
}: ContainerContentProps) => (
  <Box
    bg={isHighlighted ? "primary.600" : "gray.700"}
    p={6}
    overflow={"hidden"}
    borderRadius="md"
    textAlign="center"
    position="relative"
    height={isHighlighted ? "564px" : "537px"}
    w={"100%"}
    mt={isHighlighted ? "-16px" : "0"}
    display="flex"
    flexDirection="column"
    {...rest}
  >
    {children}
  </Box>
);

export default function PricingSection({ isMonthly }: { isMonthly: boolean }) {
  const buttonBg = "blue.500";

  return (
    <SimpleGrid
      as={Container}
      maxW={"7xl"}
      columns={[1, null, 4]}
      gap={"24px"}
      p={8}
      alignItems="flex-start"
    >
      {plans.map((plan, index) => (
        <ContainerContent
          key={index}
          isHighlighted={plan.isHighlighted}
          color="white"
        >
          {plan.isHighlighted && <BestOfferBadge />}
          <PriceHeading
            type={plan.name}
            price={!isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
            isHighlighted={plan.isHighlighted}
          />
          <BenefitList benefits={plan.benefits} />
          <ActionButton
            buttonBg={buttonBg}
            isHighlighted={plan.isHighlighted}
          />
        </ContainerContent>
      ))}
    </SimpleGrid>
  );
}
