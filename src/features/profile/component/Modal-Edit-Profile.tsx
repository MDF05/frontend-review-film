import { Button } from "@/components/ui/button";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Box, Input } from "@chakra-ui/react";
import useModalEditPofile from "../hooks/use-modal-profile";
import { Avatar } from "@/components/ui/avatar";
import { BsCloudUpload } from "react-icons/bs";

export default function ModalEditProfile(): React.ReactNode {
  const { register, handleSubmit, onSubmit, imageURL, user, loading } = useModalEditPofile();

  return (
    <DialogRoot size="lg" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button variant="plain" size="xs" p={0} m={0} bg={"orange"} padding={"10px"}>
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Box as={"form"} onSubmit={handleSubmit((event) => onSubmit(event))}>
          <DialogHeader justifyItems={"center"}>
            <DialogCloseTrigger />
          </DialogHeader>
          <DialogBody>
            <Field display={"grid"} justifyContent={"center"} justifyItems={"center"} position={"relative"} bg={"blue.brand"} rounded={"20px"} _dark={{ bg: "white" }}>
              <label htmlFor="image-user" style={{ position: "relative" }}>
                <Avatar as={BsCloudUpload} position={"absolute"} zIndex={"100"} left={"40%"} top={"50%"} border={"2px solid white"} boxShadow={"0px 0px 2px 4px rgb(0,0,0,0.5)"} />
                <Avatar w={"200px"} height={"200px"} src={imageURL || user.image} />
              </label>
              <Input type={"file"} hidden id="image-user" {...register("image")}></Input>
            </Field>
            <Field label="name">
              <Input placeholder={"name"} type={"text"} bgColor={"white"} {...register("name")} />
            </Field>
            <Field label="email">
              <Input placeholder={"email"} type={"text"} bgColor={"white"} {...register("email")} />
            </Field>
            <Field label="gender">
              <select id="" style={{ width: "100%", padding: "10px", border: "1px solid grey" }} {...register("gender")}>
                <option>Gender</option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </Field>
          </DialogBody>
          <DialogFooter>
            <Button
              type="submit"
              w={"full"}
              bg={"grey"}
              border={"1px solid"}
              rounded={"5px"}
              textTransform={"capitalize"}
              fontWeight={"bold"}
              _dark={{ color: "white" }}
              loading={loading}
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
