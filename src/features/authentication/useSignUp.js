import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Sign up successful. Please verify the new account from the user's email address"
      );
    },
    onError: (err) => {
      console.log(err);
      toast.error("Something went wrong:", err);
    },
  });
  return {signup, isLoading}
}
