import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";

export function useGetProduct(name) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product", name], // Use a unique key to differentiate queries
    queryFn: () => getProduct(name), // Pass the `name` to the query function
    enabled: !!name, // Only run query if `name` is truthy
  });

  return { isLoading, product, error };
}