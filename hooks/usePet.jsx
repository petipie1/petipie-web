import { useQuery } from "@tanstack/react-query";
import { getPet } from "../services/supabase/petService";

export function usePet(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["Pet", id],
    queryFn: () => getPet(id),
    retry: false,
  });

  return { isLoading, data, error };
}
