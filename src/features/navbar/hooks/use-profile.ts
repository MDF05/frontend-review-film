import { useAppSelector } from "@/stores/store";
import { useProfileTypes } from "../types/use-profile-types";

export default function useProfile(): useProfileTypes {
  const user = useAppSelector((state) => state.user);

  return { user };
}
