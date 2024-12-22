import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { RiStarSFill } from "react-icons/ri";
import { ListStarsProps } from "./types/list-stars-types";

const array: number[] = [1, 2, 3, 4, 5];

export default function ListStars({ setRating, rating }: ListStarsProps) {
  return (
    <VStack w={"full"} alignItems={setRating ? "start" : "center"}>
      <HStack>
        {array.map((number, index) => {
          return (
            <Icon fontSize={"3rem"} onClick={setRating && (() => setRating(number))} color={rating > index ? "rgb(247, 222, 0)" : "black"} key={number}>
              <RiStarSFill></RiStarSFill>
            </Icon>
          );
        })}
      </HStack>
      {rating == 0 && (
        <Text color={"red"} ps={"10px"}>
          please enter your review star
        </Text>
      )}
    </VStack>
  );
}
