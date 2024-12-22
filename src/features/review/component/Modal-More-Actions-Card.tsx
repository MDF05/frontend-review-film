import { DialogBody, DialogContent, DialogRoot, DialogTrigger, Flex, Icon } from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ModalEditReview from "./Modal-Edit-Review";
import { ReviewDTO } from "@/DTO/review-DTO";
import ButtonDeleteReview from "./Button-Delete-Review";

export default function ModalMoreActionsCards({ review }: { review: ReviewDTO }): React.ReactNode {
  return (
    <DialogRoot size="xs" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Flex w={"full"} justifyContent={"end"}>
          <Icon fontSize={"2rem"} color={"white"} _dark={{ color: "black" }} boxShadow={"0px 0px 4px black"} rounded={"full"} bg={"rgb(128, 128, 128, .4)"}>
            <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
          </Icon>
        </Flex>
      </DialogTrigger>
      <DialogContent width={"260px"} height={"max-content"} top={"0"} right={"35px"} position={"absolute"} zIndex={"100"}>
        <DialogBody display={"grid"} p={" 0px"}>
          <ModalEditReview review={review}></ModalEditReview>
          <ButtonDeleteReview id={review.id} />
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
