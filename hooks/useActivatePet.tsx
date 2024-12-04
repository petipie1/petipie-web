import { useMutation, useQueryClient } from "@tanstack/react-query";
import { activatePet as activatePetApi } from "../services/supabase/petService";
// import toast from "react-hot-toast";

export function useActivatePet(id: any) {
  const queryClient = useQueryClient();
  const { mutate: activatePet, isLoading }: any = useMutation({
    mutationFn: ({ activatePetData }: any) =>
      activatePetApi(activatePetData, id),
    onSuccess: () => {
      //   toast.success("Cabin edited successfully.");
      queryClient.invalidateQueries({
        queryKey: ["Pet", id],
      });
    },
    onError: (error) => console.log("Could not activate pet: ", error),
  });

  return { isLoading, activatePet };
}
