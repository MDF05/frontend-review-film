import { DialogContent, DialogRoot, DialogTrigger, DialogCloseTrigger } from "@/components/ui/dialog";
import { Box } from "@chakra-ui/react";
import { ModalDetailReviewProps } from "../types/modal-detail-review-types";
import CardDetailReview from "./Card-Detail-Review";

export default function ModalDetailReview(props: ModalDetailReviewProps): React.ReactNode {
  const { children, review } = props;

  return (
    <DialogRoot size="lg" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Box>{children}</Box>
      </DialogTrigger>
      <DialogContent pb={"20px"} bg={"transparent"}>
        <CardDetailReview review={review}></CardDetailReview>
        <DialogCloseTrigger color={"white"} _dark={{ color: "black", _hover: { color: "white" } }} borderColor={"black"} _hover={{ color: "black" }} rounded={"10px"}>
          close
        </DialogCloseTrigger>
      </DialogContent>
    </DialogRoot>
  );
}
