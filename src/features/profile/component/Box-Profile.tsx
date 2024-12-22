import { Box, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import useBoxProfile from "../hooks/use-box-profile";
import ModalEditProfile from "./Modal-Edit-Profile";

export default function BoxProfile(): React.ReactNode {
  const { user } = useBoxProfile();

  return (
    <VStack w={"100%"} alignItems={"center"} justifyItems={"start"} h={"100%"} p={"10px"}>
      <Grid gap={"10px"} w={"full"}>
        <Box bg={"blue.brand"} _dark={{ bg: "black" }} display={"flex"} w={"full"} justifyContent={"center"} rounded={"20px"}>
          <Avatar w={"200px"} height={"200px"} src={user.image} border={"1px solid white"}></Avatar>
        </Box>
        <Flex>
          <Text w={"full"} textAlign={"left"} _dark={{ color: "black" }}>
            Name :
          </Text>
          <Text w={"full"} textAlign={"left"} color={"blue.brand"}>
            {user.name}
          </Text>
        </Flex>
        <Flex>
          <Text w={"full"} textAlign={"left"} _dark={{ color: "black" }}>
            email :
          </Text>
          <Text w={"full"} textAlign={"left"} color={"blue.brand"}>
            {user.email}
          </Text>
        </Flex>
        <Flex>
          <Text w={"full"} textAlign={"left"} _dark={{ color: "black" }}>
            gender :
          </Text>
          <Text w={"full"} textAlign={"left"} color={"blue.brand"}>
            {user.gender}
          </Text>
        </Flex>
      </Grid>
      <Box mt={"20px"}>
        <ModalEditProfile></ModalEditProfile>
      </Box>
    </VStack>
  );
}
