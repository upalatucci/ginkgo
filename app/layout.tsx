import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { unbounded } from "./fonts";
import NotificationToken from "@/components/NotificationToken";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "1º Meeting nazionale Ginkgo",
  description:
    "1º Meeting nazionale Ginkgo - Domenica 08 Febbraio 10:30/12:00 in diretta streaming su Zoom. Non poniamo limiti ai legami di amicizia che possiamo creare e vinciamo su tutto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <head>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={`${unbounded.variable} antialiased`}>
          <NotificationToken />
          <ScrollUp />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
