import { useAppSelector } from "@/stores/store";

export function useProfileUserReview() {
  const state = useAppSelector((state) => state.user);

  return { reviews: state.Review };
}
