import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export interface DialogoEntry {
  numero: number;
  nota: string;
  data: string;
}

interface DialoghiData {
  count: number;
  entries: DialogoEntry[];
}

const useDialoghi = (): [
  DialoghiData | undefined,
  (numero: number, nota: string) => Promise<void>
] => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["dialoghi"],
    queryFn: async (): Promise<DialoghiData> => {
      const response = await fetch("/api/dialoghi");
      const jsonBody = await response.json();
      return {
        count: jsonBody.count ?? 0,
        entries: jsonBody.entries ?? [],
      };
    },
  });

  const addDialoghi = useCallback(
    async (numero: number, nota: string) => {
      const response = await fetch("/api/dialoghi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numero, nota }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Errore nel salvataggio");
      }

      queryClient.invalidateQueries({
        queryKey: ["dialoghi"],
        refetchType: "all",
      });
    },
    [queryClient]
  );

  return [data, addDialoghi];
};

export default useDialoghi;
