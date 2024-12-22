import { LoginDTO } from "@/DTO/login-DTO";
import { RegisterDTO } from "@/DTO/register-dto";
import { ResponseDTO } from "@/DTO/response-DTO";
import { ReviewDTO } from "@/DTO/review-DTO";
import { apiV1 } from "@/libs/axios";
import { LoginSchema } from "@/schema/login-schema";
import { RegisterSchema } from "@/schema/register-schema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginAsync = createAsyncThunk<ResponseDTO<LoginDTO>, LoginSchema>("/login", async (dto, thunkApi) => {
  try {
    const response = await apiV1.post("/login", dto);

    toast.success("succesfull login waiting to redirect to page ");
    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("Failed to login");
    return thunkApi.rejectWithValue(err);
  }
});

export const registerAsync = createAsyncThunk<ResponseDTO<RegisterDTO>, RegisterSchema>("/register", async (dto, thunkApi) => {
  try {
    const response = await apiV1.post("/register", dto);

    toast.success("succesfull register waiting to redirect to page ");
    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("Failed to register");
    return thunkApi.rejectWithValue(err);
  }
});

export const checkTokenAsync = createAsyncThunk<ResponseDTO<RegisterDTO>, string>("/token", async (token, thunkApi) => {
  try {
    const response = await apiV1.get(`/token/${token}`);

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("you was logout, please login again");
    return thunkApi.rejectWithValue(err);
  }
});

export const updateUserAsync = createAsyncThunk<ResponseDTO<RegisterDTO>, FormData>("/update/user", async (dto, thunkApi) => {
  try {
    const response = await apiV1.put(`/profile`, dto, { headers: { "Content-Type": "multipart/form-data" } });

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("update profile failed");
    return thunkApi.rejectWithValue(err);
  }
});

export const getReviewUserAsync = createAsyncThunk<ResponseDTO<ReviewDTO[]>, void>("/review/user", async (_, thunkApi) => {
  try {
    const response = await apiV1.get(`/review`);

    return thunkApi.fulfillWithValue(response.data);
  } catch (err) {
    toast.error("update profile failed");
    return thunkApi.rejectWithValue(err);
  }
});
