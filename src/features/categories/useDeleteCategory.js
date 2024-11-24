import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategories";
import toast from "react-hot-toast";

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCategory } = useMutation({
    mutationFn: (id) => deleteCategoryApi(id),
    onSuccess: () => {
      toast.success("Kategória úspešne zmazaná");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => toast.error(err),
  });
  return { isDeleting, deleteCategory };
}
