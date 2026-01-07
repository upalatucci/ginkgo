import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { roboto } from "./fonts";
import NotificationToken from "@/components/NotificationToken";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "Divisione Ginkgo 2025",
  description:
    "Incontro Nazionale Divisione Ginkgo: costruiamo insieme un futuro luminoso per una Soka Gakkai vibrante e unita",
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
        <body className={`${roboto.variable} antialiased`}>
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
