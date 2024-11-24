import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../services/apiProducts";

export function useProductsByCategory() {
    const {
        isLoading,
        data: categoryProducts,
        error
      } = useQuery({
        queryKey: ["products"],
        queryFn: (category) => getProductsByCategory(category),
      });
      return {isLoading, categoryProducts, error}
}