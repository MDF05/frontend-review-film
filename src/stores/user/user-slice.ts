import { createSlice } from "@reduxjs/toolkit";
import { checkTokenAsync, getReviewUserAsync, loginAsync, registerAsync, updateUserAsync } from "./user-async";
import { ReviewDTO } from "@/DTO/review-DTO";

export interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  gender: string | null;
  loading: boolean;
  image?: string;
  Review: ReviewDTO[];
}

const initialState: UserState = {} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.loading = false;
    },
    removeUser(state) {
      sessionStorage.removeItem("token");
      state.id = null;
      state.name = null;
      state.email = null;
      state.gender = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        sessionStorage.setItem("token", action.payload.content.token);
        state.id = action.payload.content.user.id;
        state.name = action.payload.content.user.name;
        state.email = action.payload.content.user.email;
        state.gender = action.payload.content.user.gender;
        state.image = action.payload.content.user.image;
        state.loading = false;
      })
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = false;
        state.id = null;
        state.name = null;
        state.email = null;
        state.gender = null;
        state.image = undefined;
      });
    builder
      .addCase(registerAsync.fulfilled, (state, action) => {
        sessionStorage.setItem("token", action.payload.content.token);
        state.id = action.payload.content.user.id;
        state.name = action.payload.content.user.name;
        state.email = action.payload.content.user.email;
        state.gender = action.payload.content.user.gender;
        state.image = action.payload.content.user.image;
        state.loading = false;
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.rejected, (state) => {
        state.loading = false;
        state.id = null;
        state.name = null;
        state.email = null;
        state.gender = null;
      });
    builder
      .addCase(checkTokenAsync.fulfilled, (state, action) => {
        sessionStorage.setItem("token", action.payload.content.token);
        state.id = action.payload.content.user.id;
        state.name = action.payload.content.user.name;
        state.email = action.payload.content.user.email;
        state.gender = action.payload.content.user.gender;
        state.image = action.payload.content.user.image;
        state.loading = false;
      })
      .addCase(checkTokenAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkTokenAsync.rejected, (state) => {
        state.loading = false;
        state.id = null;
        state.name = null;
        state.email = null;
        state.gender = null;
      });
    builder
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.id = action.payload.content.user.id;
        state.name = action.payload.content.user.name;
        state.email = action.payload.content.user.email;
        state.gender = action.payload.content.user.gender;
        state.image = action.payload.content.user.image;
        state.loading = false;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserAsync.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(getReviewUserAsync.fulfilled, (state, action) => {
        state.Review = action.payload.content;

        state.loading = false;
      })
      .addCase(getReviewUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReviewUserAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { removeUser, setUser } = userSlice.actions;
export default userSlice.reducer;
