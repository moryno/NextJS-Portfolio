import { Metadata } from "next";
import { Inter } from "next/font/google"
import "./css/card.css";
import "./css/globals.css";
const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Maurice Nganga Next JS Porfolio Website",
  description: "Next JS Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
      <main className="overflow-x-hidden antialiased">
        <section className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
        </section>
        {children}
      </main>
      </body>
    </html>
  );
}
