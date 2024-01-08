import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi} from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useDeleteProduct() {
    const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: (id) => deleteProductApi(id),
    onSuccess: () => {
      toast.success("Produkt úspešne vymazaný");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => toast.error(err),
  });
  return {isDeleting, deleteProduct}
}