import { ReviewDTO } from "@/DTO/review-DTO";
import { createSlice } from "@reduxjs/toolkit";
import { createReviewAsync, getReviewsAsync, updateReviewAsync } from "./review-async";

export interface ReviewInisialState {
  reviews: ReviewDTO[];
  loading: boolean;
}

const initialState = {} as ReviewInisialState;

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers(builders) {
    builders
      .addCase(createReviewAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createReviewAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createReviewAsync.rejected, (state) => {
        state.loading = false;
      });
    builders
      .addCase(getReviewsAsync.rejected, (state) => {
        state.reviews = [];
        state.loading = false;
      })
      .addCase(getReviewsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.content.reviews;
      })
      .addCase(getReviewsAsync.pending, (state) => {
        state.loading = true;
      });
    builders
      .addCase(updateReviewAsync.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateReviewAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateReviewAsync.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default reviewSlice.reducer;
