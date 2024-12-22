import { useAppDispatch } from "@/stores/store";
import { checkTokenAsync } from "@/stores/user/user-async";

interface useProtectRouteProps {
  token: string | null;
}

export default function useProtectRoute(): useProtectRouteProps {
  const token = sessionStorage.getItem("token");
  const dispatch = useAppDispatch();

  if (token) dispatch(checkTokenAsync(token));

  return { token };
}
