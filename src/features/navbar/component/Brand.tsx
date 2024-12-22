import React from "react";
import { Box, BoxProps, Text } from "@chakra-ui/react";

export default function Brand(props: BoxProps): React.ReactNode {
  const { ...otherProps } = props;
  return (
    <Box>
      <Text as="h1" fontWeight="bold" fontSize="2xl" _dark={{ color: "black" }} {...otherProps}>
        Review Film
      </Text>
    </Box>
  );
}
