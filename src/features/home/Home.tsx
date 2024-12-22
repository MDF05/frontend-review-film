import { VStack } from "@chakra-ui/react";
import React from "react";
import { Reviews } from "../review/Review";
import useHome from "./hooks/use-home";

export default function Home(): React.ReactNode {
  useHome();
  return (
    <VStack display={"Flex"} w={"100%"}>
      <Reviews></Reviews>
    </VStack>
  );
}
