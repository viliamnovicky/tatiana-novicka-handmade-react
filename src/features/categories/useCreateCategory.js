import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategory as createCategoryApi } from "../../services/apiCategories";

export function useCreateCategory() {
  
  const queryClient = useQueryClient();

  const { mutate: createCategory, isLoading: isCreating } = useMutation({
    
    mutationFn: createCategoryApi,
    onSuccess: () => {
      toast.success("Nový produkt vytvorený");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return {isCreating, createCategory}
}
