import { UserDTO } from "./user-DTO";

export interface imageDTO {
  id: string;
  imageUrl: string;
  reviewId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewDTO {
  id: string;
  userId: string;
  tittle: string;
  opinion: string;
  release: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  images: imageDTO[];
  user: UserDTO;
}
