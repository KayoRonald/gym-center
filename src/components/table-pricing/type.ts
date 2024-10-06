import { BoxProps } from "@chakra-ui/layout";

export interface Plan {
  name: string;
  isHighlighted: boolean;
  monthlyPrice: string;
  yearlyPrice: string;
  benefits: string[];
}

export interface ContainerContentProps extends BoxProps {
  children: React.ReactNode;
  isHighlighted: boolean;
}