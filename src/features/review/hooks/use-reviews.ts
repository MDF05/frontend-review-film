import { useAppSelector } from "@/stores/store";

export default function useReviews() {
  const state = useAppSelector((state) => state.review);

  return { reviews: state.reviews };
}
