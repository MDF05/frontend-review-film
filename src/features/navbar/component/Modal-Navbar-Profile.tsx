import { Button } from "@/components/ui/button";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import Profile from "./Profile";
import useModalNavbar from "../hooks/use-modal-navbar";
import { DialogDescription } from "./../../../components/ui/dialog";
import { Avatar } from "@/components/ui/avatar";
import { HStack, VStack } from "@chakra-ui/react";
import ButtonLogout from "./Button-Logout";
import ReactRouterButton from "@/components/component/React-Router-Button";
import { ButtonToggleDarkMode } from "./Toggle-Dark-Mode";
import ModalAddReview from "@/features/home/compnent/Modal-Add-Review";

export default function ModalNavbarProfile(): React.ReactNode {
  const { user } = useModalNavbar();
  return (
    <DialogRoot size="xs" placement="top" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button variant="plain" size="xs" p={0} m={0}>
          <Profile />
        </Button>
      </DialogTrigger>
      <DialogContent position={"fixed"} right={"2px"} top={"-25px"} w={"200px"}>
        <DialogHeader justifyItems={"center"}>
          <Avatar height={"60px"} width={"60px"} src={user.image} />
          <VStack w={"full"} alignItems={"start"} gap={0}>
            <DialogTitle w={"full"} textAlign={"start"} m={0} p={0}>
              {user.name || "user"}
            </DialogTitle>
            <DialogDescription>{user.email || "user@gmail.com"}</DialogDescription>
          </VStack>

          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody borderY={"1px solid rgb(0,0,0, 0.3)"}>
          <VStack gap={"5px"}>
            <ReactRouterButton to={"/"}>Home</ReactRouterButton>
            <ReactRouterButton to={"/profile"}>Edit Profile</ReactRouterButton>
          </VStack>
        </DialogBody>
        <DialogFooter>
          <VStack w={"100%"}>
            <ButtonToggleDarkMode display={{ base: "inherit", md: "none" }} bg={"red"}></ButtonToggleDarkMode>
            <ButtonLogout />
            {user.email && (
              <HStack display={{ base: "inherit", md: "none" }} w={"100%"} h={"40px"}>
                <ModalAddReview />
              </HStack>
            )}
          </VStack>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
