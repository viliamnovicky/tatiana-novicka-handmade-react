import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {

  const {
    data: user,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 0,
    cacheTime: 0,
  });

  return {isLoading, user, isAuthenticated: user?.role === "authenticated"}
}
