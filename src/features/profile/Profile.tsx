import { Box, HStack, VStack } from "@chakra-ui/react";
import BoxProfile from "./component/Box-Profile";
import { ProfileUserReview } from "./component/profile-user-review";
import { useAppDispatch } from "@/stores/store";
import { getReviewUserAsync } from "@/stores/user/user-async";

export default function Profile(): React.ReactNode {
  const dispatch = useAppDispatch();

  dispatch(getReviewUserAsync()); // Uncomment this line to fetch reviews from the API
  return (
    <VStack h={"100vh"} w={"100vw"}>
      <Box display={"flex"} w={"100%"} justifyContent={"center"} boxSizing={"border-box"} p={"40px"} flexDirection={"column"} alignItems={"center"}>
        <HStack
          w={"50%"}
          bg={"white"}
          _dark={{ bg: "white", boxShadow: "basicLight" }}
          rounded={"20px"}
          height={"100%"}
          display={"grid"}
          border={"2px solid"}
          borderColor={"rgba(0, 0, 0, 0.2)"}
          boxShadow={"basicDark"}
          position={"relative"}
        >
          <BoxProfile />
        </HStack>
        <ProfileUserReview></ProfileUserReview>
      </Box>
    </VStack>
  );
}
