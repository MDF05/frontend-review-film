import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { profileSchema, ProfileSchema } from "@/schema/profile-schema";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { updateUserAsync } from "@/stores/user/user-async";

export default function useModalEditPofile() {
  const { register, handleSubmit, setValue, watch } = useForm<ProfileSchema>({ resolver: zodResolver(profileSchema) });
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const watchImage = watch("image");
  const [imageURL, setImageURL] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (watchImage) {
      const image: Blob = watchImage[0];
      console.log(image);
      setImageURL(URL.createObjectURL(image));
    }
  }, [watchImage]);

  useEffect(() => {
    if (user.name && user.email && user.gender) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("gender", user.gender);
    }
  }, [user.name, user.email, user.gender]);

  async function onSubmit(event: ProfileSchema) {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("name", event.name);
      formData.append("email", event.email);
      formData.append("gender", event.gender);
      if (event.image) formData.append("image", event.image[0]);

      const user = await dispatch(updateUserAsync(formData)).unwrap();
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      return err;
    }
  }

  return { onSubmit, register, handleSubmit, imageURL, user, loading };
}
