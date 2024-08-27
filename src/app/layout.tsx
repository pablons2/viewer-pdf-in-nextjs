import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viewer de PDF no NEXT.js",
  description: "pabloN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen bg-slate-900 relative">
        <header className="fixed w-full flex justify-center items-center bg-violet-600 h-[5rem] top-0">
          topo
        </header>
        <section className="top-[5rem] flex justify-start items-center fixed bg-slate-100 w-screen h-full flex-row">
        <nav className="w-[4.5rem] bg-gray-300 flex justify-center items-center h-full">
          menu
        </nav>
        <main className="w-full flex-grow bg-slate-700 h-full flex m-0">
        {children}
        </main>
        </section>

        </main>

        </body>
    </html>
  );
}
