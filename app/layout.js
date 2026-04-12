import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "TRASOR",
  description: "Distribución de materiales dentales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white text-[#2f2f2f]">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="w-full border-t border-gray-200 mt-10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center">
            © {new Date().getFullYear()} TRASOR
          </div>
        </footer>
      </body>
    </html>
  );
}