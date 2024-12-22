import { BoxProps } from "@chakra-ui/react";

export interface StarComponentProps extends BoxProps {
  setRating: () => void;
}
