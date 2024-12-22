import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthProps } from "../types/use-auth-types";
import { toast } from "react-toastify";

export default function useAuth(): useAuthProps {
  const [checkedInput, setCheckedInput] = useState<boolean>(false);
  const { pathname } = useLocation();
  const urlPathname = pathname.replace("/", "");
  const navigate = useNavigate();

  const register = document.getElementById("register");
  const login = document.getElementById("login");

  useEffect(() => {
    if (urlPathname === "register") {
      setCheckedInput(true);
    }
    if (urlPathname === "login") {
      setCheckedInput(false);
    }
    if (sessionStorage.getItem("token")) {
      toast.warning("you has been logged in");
      setTimeout(() => navigate("/"), 2000);
    }
  }, []);

  if (register && login) {
    if (checkedInput) {
      register.style.opacity = "0";
      login.style.opacity = "1";
    } else {
      login.style.opacity = "0";
      register.style.opacity = "1";
    }
  }

  return { urlPathname, setCheckedInput, checkedInput };
}
