import "./globals.css";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

const NotoKufi = Noto_Kufi_Arabic({
  weight: "500",
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
});

const Madani = localFont({
  src: [
    {
      path: "../public/Madani.ttf",
      weight: "400",
    },
  ],
  variable: "--font-madani",
});

export const metadata = {
  title: "Saadudinalshamy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${Madani.variable} ${NotoKufi.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
