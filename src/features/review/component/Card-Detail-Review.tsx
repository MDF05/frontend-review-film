import { Flex, Text, VStack } from "@chakra-ui/react";

import SimpleImageSlider from "react-simple-image-slider";
import { Avatar } from "@/components/ui/avatar";
import { CardReviewProps } from "../types/card-review-types";
import { useAppSelector } from "@/stores/store";
import { showFormattedDate } from "@/utils/format-date";
import ModalMoreActionsCards from "./Modal-More-Actions-Card";
import ListStars from "@/features/home/compnent/List-Stars";

export default function CardDetailReview({ review }: CardReviewProps) {
  const state = useAppSelector((state) => state.user);

  return (
    <VStack
      bg={"blue.brand"}
      p={"10px"}
      rounded={"20px"}
      border={"2px solid"}
      borderColor={"rgba(0, 0, 0, 0.2)"}
      boxShadow={"basicDark"}
      _dark={{ bg: "white" }}
      width={"100%"}
      display={"grid"}
      gap={"20px"}
      justifyContent={"center"}
    >
      <Flex w={"100%"} flexDirection={"column"} p={0} position={"relative"}>
        {state.id == review.user.id && <ModalMoreActionsCards review={review} />}
        <Flex alignItems={"center"} gap={"20px"} w={"100%"} pt={state.id !== review.user.id ? "30px" : "0px"}>
          <Avatar w={"50px"} h={"50px"} src={review.user?.image} border={"2px solid grey"}></Avatar>
          <VStack w={"full"} alignItems={"start"} gap={"10px"}>
            <Text fontSize={"1.5rem"} lineClamp={"1"} color={"white"} _dark={{ color: "black" }}>
              {review.user?.name}
            </Text>
            <Text color={"grey"}>{showFormattedDate(review.createdAt)}</Text>
          </VStack>
        </Flex>
      </Flex>
      <SimpleImageSlider
        width={500}
        height={400}
        images={review.images.map((event) => {
          return { url: event.imageUrl };
        })}
        showBullets={review.images.length > 1 ? true : false}
        showNavs={review.images.length > 1 ? true : false}
      />
      <VStack gap={"0px"}>
        <Text fontSize={"2rem"} color={"white"} _dark={{ color: "black" }} textAlign={"center"} lineHeight={"40px"}>
          "{review.tittle}"
        </Text>
        <Text fontSize={"1rem"} color={"grey"} h={"20px"} mt={"10px"} mb={"10px"}>
          release : {review.release}
        </Text>
        <ListStars rating={review.rating}></ListStars>

        <VStack mt={"10px"} textAlign={"justify"} _dark={{ color: "black" }}>
          <Text minH={"150px"} color={"white"} _dark={{ color: "black" }}>
            "{review?.opinion}"
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
