import { Button } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import useButtonLogout from "../hooks/use-button-logout";

export default function ButtonLogout(): React.ReactNode {
  const { LogOut } = useButtonLogout();

  return (
    <Button bg={"red"} w={"full"} _dark={{ color: "white" }} onClick={LogOut}>
      Logout <MdOutlineLogout />
    </Button>
  );
}
