import { useAppDispatch } from "@/stores/store";
import { removeUser } from "@/stores/user/user-slice";
import { useNavigate } from "react-router-dom";

export default function useButtonLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function LogOut() {
    dispatch(removeUser());
    navigate("/login");
  }

  return { LogOut };
}
