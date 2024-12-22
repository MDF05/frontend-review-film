import { reviewSchema, ReviewSchema } from "@/schema/review-schema";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { updateReviewAsync } from "@/stores/review/review-async";
import { ReviewDTO } from "@/DTO/review-DTO";

export default function useModalEditReview(review: ReviewDTO) {
  const [rating, setRating] = useState<number>(review.rating);
  const { handleSubmit, register, watch, reset, setValue } = useForm<ReviewSchema>({ resolver: zodResolver(reviewSchema) });
  const dispatch = useAppDispatch();
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const images = watch("images");
  const state = useAppSelector((state) => state.review);

  setValue("tittle", review.tittle);
  setValue("opinion", review.opinion);
  setValue("release", review.release);

  useEffect(() => {
    if (images) {
      for (const image of images) {
        const url = URL.createObjectURL(image);
        setImagesUrl((prev) => [...prev, url]);
      }
    }
  }, [images]);

  async function onSubmit(event: ReviewSchema) {
    const formData = new FormData();

    if (event.images) {
      for (const image of event.images) {
        formData.append("images", image);
      }
    }

    formData.append("id", review.id);
    formData.append("tittle", event.tittle);
    formData.append("release", event.release);
    formData.append("opinion", event.opinion);
    formData.append("rating", rating.toString());

    await dispatch(updateReviewAsync(formData));
    reset();
  }

  return { rating, setRating, handleSubmit, register, onSubmit, imagesUrl, listImage: review.images, state };
}
