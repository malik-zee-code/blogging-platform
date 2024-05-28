import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "components/ui/Navbar";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/lib/Provider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogging Platform",
  description: "Create, Edit and Publish your blog posts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-right" />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
