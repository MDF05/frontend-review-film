import { ReviewDTO } from "@/DTO/review-DTO";
import React from "react";

export interface ModalDetailReviewProps {
  review: ReviewDTO;
  children: React.ReactNode;
}
