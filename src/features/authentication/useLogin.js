import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    staleTime: 0,
    cacheTime: 0,
    onSuccess: async (user) => {
        queryClient.setQueryData(["user"], user.user)
      queryClient.invalidateQueries(["user"]);
      navigate("/admin", {replace: true});
      toast.success("Prihlásenie prebehlo úspešne")
      console.log(user);
    },

    onError: (err) => {
      console.log("Error:", err);
      toast.error("Nesprávny email alebo heslo");
    },
  });

  return { login, isLoading };
}
