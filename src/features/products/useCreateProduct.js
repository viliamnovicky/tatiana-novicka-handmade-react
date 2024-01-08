import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditProduct as createProductApi } from "../../services/apiProducts";

export function useCreateProduct() {
  
  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: isCreating } = useMutation({
    
    mutationFn: createProductApi,
    onSuccess: () => {
      toast.success("Nový produkt vytvorený");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return {isCreating, createProduct}
}
