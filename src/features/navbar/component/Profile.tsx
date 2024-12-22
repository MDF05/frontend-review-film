import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Button } from "@chakra-ui/react";
import React from "react";
import useProfile from "../hooks/use-profile";

export default function Profile(): React.ReactNode {
  const { user } = useProfile();

  return (
    <Button bg={"none"} height={"100%"}>
      {user.name}
      <AvatarGroup height={"100%"}>
        <Avatar height={"30px"} width={"30px"} src={user.image} />
      </AvatarGroup>
    </Button>
  );
}
