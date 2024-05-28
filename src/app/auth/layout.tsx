import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login or Signup",
  description: "Login or Signup",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  console.log(session);

  if (session) {
    return redirect(`/`);
  }

  return <>{children}</>;
}
