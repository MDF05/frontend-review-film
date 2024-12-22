import { reviewSchema, ReviewSchema } from "@/schema/review-schema";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { createReviewAsync, getReviewsAsync } from "@/stores/review/review-async";
import { useLocation } from "react-router-dom";
import { getReviewUserAsync } from "@/stores/user/user-async";

export default function useModalAddReview() {
  const [rating, setRating] = useState<number>(0);
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<ReviewSchema>({ resolver: zodResolver(reviewSchema) });
  const dispatch = useAppDispatch();
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const images = watch("images");
  const { pathname } = useLocation();
  const state = useAppSelector((state) => state.review);

  useEffect(() => {
    if (images) {
      for (const image of images) {
        const url = URL.createObjectURL(image);
        setImagesUrl((prev) => [...prev, url]);
      }
    }
  }, [images]);

  async function onSubmit(event: ReviewSchema) {
    const formDate = new FormData();

    if (event.images) {
      for (const image of event.images) {
        formDate.append("images", image);
      }
    }

    formDate.append("tittle", event.tittle);
    formDate.append("release", event.release);
    formDate.append("opinion", event.opinion);
    formDate.append("rating", rating.toString());

    await dispatch(createReviewAsync(formDate));
    await dispatch(getReviewsAsync());
    if (pathname == "/profile") await dispatch(getReviewUserAsync());
    reset();
  }

  return { rating, setRating, handleSubmit, register, onSubmit, imagesUrl, reset, setImagesUrl, state, errors };
}
