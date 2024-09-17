import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaMoneyBill, FaCreditCard, FaCheck } from "react-icons/fa";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"} mb={3} gap={3}>
      <Flex
        w={5}
        h={5}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Stack>
        <Text>{text}</Text>
      </Stack>
    </Stack>
  );
};

export function SplitWithIcon() {
  return (
    <Box>
      <Feature
        icon={<Icon as={FaCheck} color={"black"} w={2} h={2} />}
        iconBg={"primary.500"}
        text={"Increase Muscle and Strength"}
      />
      <Feature
        icon={<Icon as={FaCheck} color={"black"} w={2} h={2} />}
        iconBg={"primary.500"}
        text={"Be Healthier than before"}
      />
      <Feature
        icon={<Icon as={FaCheck} color={"black"} w={2} h={2} />}
        iconBg={"primary.500"}
        text={"Increase Stamina"}
      />
    </Box>
  );
}
