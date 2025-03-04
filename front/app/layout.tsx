import { Zen_Old_Mincho } from "next/font/google";
import "./styles/globals.css";
import "./styles/embla.css";
import Header from "@/components/layouts/Header";

const zenOldMincho = Zen_Old_Mincho({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Note Stacker",
  description: "記事にコメントをつけて保存できるアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={zenOldMincho.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
