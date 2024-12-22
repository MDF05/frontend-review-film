import { LoginSchema, loginSchema } from "@/schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/stores/store";
import { loginAsync } from "@/stores/user/user-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useLogin() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(event: LoginSchema) {
    setLoading(true);
    try {
      const user = await dispatch(loginAsync(event)).unwrap();

      if (user.success) {
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setLoading(false);
      return err;
    }
  }

  return { handleSubmit, register, onSubmit, loading, errors, isValid };
}
