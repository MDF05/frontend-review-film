import { useAppSelector } from "@/stores/store";

export default function useNavbar() {
  const user = useAppSelector((state) => state.user);
  const checkbox = document.getElementById("checkbox");
  checkbox?.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

  return { user };
}
