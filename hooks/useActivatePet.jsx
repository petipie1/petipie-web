import { useMutation, useQueryClient } from "@tanstack/react-query";
import { activatePet as activatePetApi } from "./../services/supabase/petService";
// import toast from "react-hot-toast";

export function useActivatePet(id) {
  const queryClient = useQueryClient();
  const { mutate: activatePet, isLoading } = useMutation({
    mutationFn: ({ activatePetData }) => activatePetApi(activatePetData, id),
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
