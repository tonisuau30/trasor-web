import "./globals.css";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_URL } from "./siteConfig";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TRASOR | Distribuidor de material dental",
    template: "%s | TRASOR",
  },
  description:
    "Distribuidor de material dental para clínicas y laboratorios en España, con más de 20 años de experiencia.",
  applicationName: "TRASOR",
  authors: [{ name: "TRASOR" }],
  creator: "TRASOR",
  publisher: "TRASOR",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "TRASOR",
    title: "TRASOR | Distribuidor de material dental",
    description:
      "Material dental para clínicas y laboratorios, distribuido por TRASOR en España.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-[#2f2f2f]"
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="w-full border-t border-gray-200 mt-10">
            <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center">
              © {new Date().getFullYear()} TRASOR
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
