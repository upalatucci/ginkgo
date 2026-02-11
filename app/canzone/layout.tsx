import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CanzoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) return redirect("/login");
  return <>{children}</>;
}
