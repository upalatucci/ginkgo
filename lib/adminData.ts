import { kv } from "@vercel/kv";

const CANZONE_KEY = "canzone-contributi-ginkgo";
const DIALOGHI_KEY = "dialoghi-ginkgo";
const DOMANDE_KEY = "domande-ginkgo";
const GOALS_KEY = "obiettivi-ginkgo";
const DAIMOKU_KEY = "daimoku-ginkgo";

export interface CanzoneEntry {
  testo: string;
  data: string;
}

export interface DialogoEntry {
  numero: number;
  nota: string;
  data: string;
}

export async function getAdminData() {
  const [canzone, dialoghi, domande, goals, daimoku] = await Promise.all([
    kv.lrange<CanzoneEntry>(CANZONE_KEY, 0, -1),
    kv.lrange<DialogoEntry>(DIALOGHI_KEY, 0, -1),
    kv.lrange<string>(DOMANDE_KEY, 0, -1),
    kv.lrange<string>(GOALS_KEY, 0, -1),
    kv.get<number>(DAIMOKU_KEY),
  ]);

  return {
    canzone: canzone ?? [],
    dialoghi: dialoghi ?? [],
    domande: domande ?? [],
    goals: goals ?? [],
    daimoku: daimoku ?? 0,
  };
}
