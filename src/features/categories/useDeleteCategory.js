import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategories";
import toast from "react-hot-toast";

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCategory, error } = useMutation({
    mutationFn: (id) => deleteCategoryApi(id),
    onSuccess: () => {
      toast.success("Kategória úspešne zmazaná");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => {
      toast.error("Kategóriu sa nepodarilo vymazať pretože obsahuje produkty. Presuňte produkty do inej kategórie");
    },
  });
  return { isDeleting, deleteCategory, error };
}
