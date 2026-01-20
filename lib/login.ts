"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export type LoginState = { error: string };

export const login = async (
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> => {
  try {
    await signIn("credentials", {
      password: formData.get("password"),
      redirectTo: "/",
    });

    return { error: "" };
  } catch (apiError) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((apiError as any).type === undefined) redirect("/");
    return { error: "Password errata" };
  }
};
