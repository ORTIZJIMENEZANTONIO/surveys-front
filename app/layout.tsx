import "./globals.css";
import "@/styles/_custom.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import BootstrapClient from "@/components/global/BootstrapClient";

import NavBar from "../components/landing/NavBar";
import Footer from "../components/landing/Footer";

import ScrollProvider from "@/components/global/ScrollProvider";

export const metadata = {
  title: "Antonio - Plataforma",
  description: "Cuestionarios dinámicos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/logos/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/logos/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/logos/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/logos/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/logos/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/logos/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/logos/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/logos/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logos/apple-icon-180x180.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/logos/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logos/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/logos/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logos/favicon-16x16.png"
        />

        <link rel="manifest" href="/logos/manifest.json" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/logos/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body>
        <ScrollProvider>
          <BootstrapClient />
          <NavBar />
          <div className="container-fluid px-0">{children}</div>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
