import { deleteReviewAsync, getReviewsAsync } from "@/stores/review/review-async";
import { useAppDispatch } from "@/stores/store";
import { getReviewUserAsync } from "@/stores/user/user-async";
import { useLocation } from "react-router-dom";

export default function useButtonDelete(id: string) {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  async function handleDelete(event: React.MouseEvent<HTMLInputElement>) {
    try {
      event.preventDefault();
      const isConfirm = confirm("apakah yakin ingin mengahapus review ini ");

      if (!isConfirm) return;
      await dispatch(deleteReviewAsync(id));
      await dispatch(getReviewsAsync());
      if (pathname == "/profile") await dispatch(getReviewUserAsync());
    } catch (err) {
      return err;
    }
  }

  return { handleDelete };
}
