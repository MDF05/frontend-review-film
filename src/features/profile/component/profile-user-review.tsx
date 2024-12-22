import { HStack } from "@chakra-ui/react";
import { useProfileUserReview } from "../hooks/use-profile-user-review";
import CardReview from "@/features/review/component/Card-Review";

export function ProfileUserReview(): React.ReactNode {
  const { reviews } = useProfileUserReview();

  return (
    <HStack p={"50px 10px"} gap={"20px"} w={"100%"} display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      {reviews?.map((review) => {
        return <CardReview key={review.id} review={review} />;
      })}
    </HStack>
  );
}
