import { Button } from "@/components/ui/button";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Box, Flex, Image, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import useModalEditReview from "../hooks/use-modal-edit-review";
import { imageDTO, ReviewDTO } from "@/DTO/review-DTO";
import ListStars from "@/features/home/compnent/List-Stars";

export default function ModalEditReview({ review }: { review: ReviewDTO }): React.ReactNode {
  const { rating, setRating, handleSubmit, onSubmit, register, listImage, imagesUrl, state } = useModalEditReview(review);

  return (
    <DialogRoot size="lg" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Box color={"orange"} textAlign={"center"} borderBottom={"1px solid grey"} w={"full"} py={"10px"} cursor={"pointer"}>
          Edit
        </Box>
      </DialogTrigger>
      <DialogContent pb={"20px"} position={"relative"}>
        <Box as={"form"} onSubmit={handleSubmit((event) => onSubmit(event))}>
          <DialogHeader justifyItems={"center"}>
            <DialogCloseTrigger />
          </DialogHeader>
          <DialogBody display={"grid"} gap={"20px"}>
            <Field label="Enter image related">
              <Flex gap={"10px"}>
                {imagesUrl.length == 0
                  ? listImage.map((image: imageDTO) => {
                      return <Image src={image.imageUrl}></Image>;
                    })
                  : imagesUrl.map((image) => {
                      return <Image src={image}></Image>;
                    })}
              </Flex>
              <Input type="file" {...register("images")} multiple />
            </Field>
            <Field label="Enter movie title">
              <Input type="text" {...register("tittle")} />
            </Field>
            <Field label="Enter movie Release year">
              <Input type="text" {...register("release")} />
            </Field>
            <Field label="Enter movie opinion">
              <Textarea resize={"none"} height={"200px"} {...register("opinion")}></Textarea>
            </Field>
            <Field label="Enter your rating">
              <ListStars rating={rating} setRating={setRating}></ListStars>
            </Field>
          </DialogBody>
          <DialogFooter>
            <Button
              type="submit"
              bg={"grey"}
              w={"full"}
              border={"1px solid"}
              rounded={"5px"}
              textTransform={"capitalize"}
              fontWeight={"bold"}
              _dark={{ color: "white" }}
              loading={state.loading}
              loadingText={"loading ..."}
            >
              update
            </Button>
          </DialogFooter>
        </Box>
      </DialogContent>
    </DialogRoot>
  );
}
