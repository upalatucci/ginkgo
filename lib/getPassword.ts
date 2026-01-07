import { kv } from "@vercel/kv";

export const getPassword = () => {
  return kv.get("divisione-ginkgo-password");
};
