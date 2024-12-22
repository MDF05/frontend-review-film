import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "./../../../schema/register-schema";
import { registerAsync } from "@/stores/user/user-async";
import { useAppDispatch } from "@/stores/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useRegister() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>();

  async function onSubmit(event: RegisterSchema) {
    setLoading(true);

    try {
      const user = await dispatch(registerAsync(event)).unwrap();

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

  return { handleSubmit, register, onSubmit, loading, errors };
}
