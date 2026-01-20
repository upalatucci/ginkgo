import { kv } from "@vercel/kv";

export const getPassword = () => {
  return kv.get("corso-uomini-password");
};
