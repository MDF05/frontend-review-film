import { getReviewsAsync } from "@/stores/review/review-async";
import { useAppDispatch } from "@/stores/store";

export default function useHome() {
  const dispatch = useAppDispatch();
  dispatch(getReviewsAsync());
}
