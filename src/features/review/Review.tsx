import { HStack } from "@chakra-ui/react";
import CardReview from "./component/Card-Review";
import useReviews from "./hooks/use-reviews";

export function Reviews(): React.ReactNode {
  const { reviews } = useReviews();

  return (
    <HStack p={"50px 10px"} gap={"20px"} w={"100%"} display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      {reviews?.map((review) => {
        return <CardReview key={review.id} review={review} />;
      })}
    </HStack>
  );
}
