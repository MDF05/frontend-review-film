import { useAppSelector } from "@/stores/store";
import { useModalNavbarTypes } from "../types/use-modal-navbar-types";

export default function useModalNavbar(): useModalNavbarTypes {
  const user = useAppSelector((state) => state.user);

  return { user };
}
