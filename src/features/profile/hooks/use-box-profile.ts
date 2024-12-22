import { useAppSelector } from "@/stores/store";
import { useBoxProfileTypes } from "../types/use-box-profile-types";

export default function useBoxProfile(): useBoxProfileTypes {
  const user = useAppSelector((state) => state.user);

  return { user };
}
