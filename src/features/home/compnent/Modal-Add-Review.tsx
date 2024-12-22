import { Button } from "@/components/ui/button";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Box, Flex, Icon, Image, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import useModalAddReview from "./hooks/use-modal-add-Review";
import { IoMdAddCircleOutline } from "react-icons/io";
import ListStars from "./List-Stars";

export default function ModalAddReview(): React.ReactNode {
  const { rating, setRating, handleSubmit, onSubmit, register, imagesUrl, reset, setImagesUrl, state, errors } = useModalAddReview();

  return (
    <DialogRoot size="lg" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button
          variant="plain"
          size="xs"
          p={0}
          m={0}
          bg={"grey"}
          padding={"10px"}
          color={"white"}
          _dark={{ bg: "black", color: "white", borderColor: "blue.brand" }}
          rounded={"10px"}
          border={"1px solid white"}
        >
          Add New
          <Icon fontSize={"2em"}>
            <IoMdAddCircleOutline />
          </Icon>
        </Button>
      </DialogTrigger>
      <DialogContent pb={"20px"}>
        <Box as={"form"} onSubmit={handleSubmit((event) => onSubmit(event))}>
          <DialogHeader justifyItems={"center"}>
            <DialogCloseTrigger />
          </DialogHeader>
          <DialogBody display={"grid"} gap={"20px"}>
            <Field label="Enter image related">
              <Flex overflow={"auto"} gap={"10px"}>
                {imagesUrl.map((image) => {
                  return <Image src={image}></Image>;
                })}
              </Flex>
              <Input type="file" {...register("images")} multiple />
            </Field>
            <Field label="Enter movie title" invalid={errors.tittle && true} errorText={errors.tittle?.message}>
              <Input type="text" {...register("tittle")} />
            </Field>
            <Field label="Enter movie Release year" invalid={errors.release && true} errorText={errors.release?.message}>
              <Input type="text" {...register("release")} />
            </Field>
            <Field label="Enter movie opinion" invalid={errors.opinion && true} errorText={errors.opinion?.message}>
              <Textarea resize={"none"} height={"200px"} {...register("opinion")}></Textarea>
            </Field>
            <Field label="Enter your rating">
              <ListStars rating={rating} setRating={setRating}></ListStars>
            </Field>
          </DialogBody>
          <DialogFooter display={"flex"} flexDir={"column"}>
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
              loadingText="loading..."
            >
              add
            </Button>
            <Button
              bg={"grey"}
              w={"full"}
              border={"1px solid"}
              rounded={"5px"}
              textTransform={"capitalize"}
              fontWeight={"bold"}
              _dark={{ color: "white" }}
              loading={state.loading}
              loadingText="loading..."
              onClick={() => {
                reset();
                setImagesUrl([]);
              }}
            >
              reset
            </Button>
          </DialogFooter>
        </Box>
      </DialogContent>
    </DialogRoot>
  );
}
