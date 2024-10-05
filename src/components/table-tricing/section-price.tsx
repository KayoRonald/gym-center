import {
  Box,
  Button,
  Flex,
  Icon,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { plans } from "./data";
import { FaCheck } from "react-icons/fa";
import { PriceHeading } from "./price-heading";

export default function PricingSection({ isMonthly }: { isMonthly: boolean }) {
  const cardBg = useColorModeValue("gray.800", "gray.700");
  const highlightedCardBg = "blue.500";
  const textColor = "white";
  const buttonBg = "blue.500";

  return (
    <SimpleGrid
      maxW={"7xl"}
      columns={[1, null, 4]}
      gap={"24px"}
      p={8}
      alignItems="flex-start"
    >
      {plans.map((plan, index) => (
        <Box
          key={index}
          bg={plan.isHighlighted ? highlightedCardBg : cardBg}
          color={textColor}
          p={6}
          overflow={"hidden"}
          borderRadius="md"
          textAlign="center"
          position="relative"
          height={plan.isHighlighted ? "580px" : "537px"}
          w={"100%"}
          mt={plan.isHighlighted ? "-16px" : "0"}
          display="flex"
          flexDirection="column"
        >
          {plan.isHighlighted && (
            <Box
              position="absolute"
              top="18px"
              right="-55px"
              p="16px"
              color="black"
              bg={"white"}
              fontSize="16px"
              transform="rotate(45deg)"
              w={"207.46px"}
              fontWeight={400}
            >
              Best Offer
            </Box>
          )}

          <PriceHeading
            type={plan.name}
            price={!isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
            isHighlighted={plan.isHighlighted}
          />

          <List as={Stack} spacing={3} mb={6} alignItems={"flex-start"}>
            {plan.benefits.map((benefit, i) => (
              <ListItem key={i} display="flex" alignItems="center" gap={2}>
                <Flex
                  w={5}
                  h={5}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={"gray.400"}
                >
                  <Icon as={FaCheck} color={"black"} w={2} h={2} />
                </Flex>
                {benefit}
              </ListItem>
            ))}
          </List>

          <Box mt="auto">
            <Button
              bg={plan.isHighlighted ? "black" : buttonBg}
              color={plan.isHighlighted ? "white" : "white"}
              _hover={{
                bg: plan.isHighlighted ? "blackAlpha.800" : "blue.600",
              }}
              size="lg"
              width="100%"
              fontSize="sm"
              rounded={"md"}
            >
              Register Now
            </Button>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
