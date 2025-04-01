import { Cabin } from "next/font/google";
import "./css/card.scss";
import "./css/globals.scss";

const cabin = Cabin({ subsets: ["latin"] });

import Navbar from "./components/navbar";

export const metadata = {
  title: "Portfolio",
  description: "Next JS Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cabin.className}
      >
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
