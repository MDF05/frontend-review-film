import { HStack } from "@chakra-ui/react";
import Brand from "@/features/navbar/component/Brand";

import { ButtonToggleDarkMode } from "./component/Toggle-Dark-Mode";
import ModalNavbarProfile from "./component/Modal-Navbar-Profile";
import useNavbar from "./hooks/use-navbar";
import ModalAddReview from "../home/compnent/Modal-Add-Review";
export default function Navbar() {
  const { user } = useNavbar();
  return (
    <HStack bg={"blue.brand"} _dark={{ bg: "white" }} width={"100%"} justifyContent={"space-between"} px={"10px"} height={"40px"} position={"fixed"} zIndex={"1000"}>
      <Brand color={"white"}></Brand>
      <HStack>
        <ButtonToggleDarkMode></ButtonToggleDarkMode>
        {user.email && <ModalAddReview />}
        <ModalNavbarProfile />
      </HStack>
    </HStack>
  );
}
