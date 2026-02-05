import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

interface CanzoneData {
  count: number;
}

const useCanzone = (): [
  CanzoneData | undefined,
  (testo: string) => Promise<void>
] => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["canzone"],
    queryFn: async (): Promise<CanzoneData> => {
      const response = await fetch("/api/canzone");
      const jsonBody = await response.json();
      return {
        count: jsonBody.count ?? 0,
      };
    },
  });

  const addContributo = useCallback(
    async (testo: string) => {
      const response = await fetch("/api/canzone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ testo }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Errore nel salvataggio");
      }

      queryClient.invalidateQueries({
        queryKey: ["canzone"],
        refetchType: "all",
      });
    },
    [queryClient]
  );

  return [data, addContributo];
};

export default useCanzone;
