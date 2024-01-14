import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProduct } from "../../services/apiProducts";
import { useCreateProduct } from "./useCreateProduct";
import toast from "react-hot-toast";

export function useEditProduct() {

  const queryClient = useQueryClient();
  const { mutate: editProduct, isLoading: isEditing } = useMutation({
    mutationFn: ({ newProductData, id }) => createEditProduct(newProductData, id),
    onSuccess: () => {
      toast.success("Produkt úspešne aktualizovaný");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {isEditing, editProduct}
}