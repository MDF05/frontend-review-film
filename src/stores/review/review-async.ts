import { ResponseDTO } from "@/DTO/response-DTO";
import { ReviewDTO } from "@/DTO/review-DTO";
import { apiV1 } from "@/libs/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createReviewAsync = createAsyncThunk<ResponseDTO<ReviewDTO>, FormData>("/review/create", async (dto, thunkApi) => {
  try {
    const response = await apiV1.post("/review", dto, { headers: { "Content-Type": "multipart/form-data" } });

    toast.success("succesfull added new review ");
    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("Failed craete review");
    return thunkApi.rejectWithValue(err);
  }
});

export const getReviewsAsync = createAsyncThunk<ResponseDTO<{ reviews: ReviewDTO[] }>, void>("/review/gets", async (_, thunkApi) => {
  try {
    const response = await apiV1.get("/reviews");

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("Failed get review");
    return thunkApi.rejectWithValue(err);
  }
});

export const updateReviewAsync = createAsyncThunk<ResponseDTO<{ reviews: ReviewDTO[] }>, FormData>("/review/update", async (dto, thunkApi) => {
  try {
    const response = await apiV1.put("/review", dto, { headers: { "Content-Type": "multipart/form-data" } });

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("Failed update review");
    return thunkApi.rejectWithValue(err);
  }
});

export const deleteReviewAsync = createAsyncThunk<ResponseDTO<{ reviews: ReviewDTO[] }>, string>("/review/delete", async (reviewId, thunkApi) => {
  try {
    const response = await apiV1.delete(`/review?reviewId=${reviewId}`);

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("Failed delete review");
    return thunkApi.rejectWithValue(err);
  }
});
