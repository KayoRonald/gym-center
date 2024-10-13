import { BoxProps } from "@chakra-ui/layout";

export interface Plan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  benefits: string[];
  isHighlighted: boolean;
}

export interface ContainerContentProps extends BoxProps {
  children: React.ReactNode;
  isHighlighted: boolean;
}