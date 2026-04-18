import AboutPageClient from "@/components/AboutPageClient";

export const metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce TRASOR, distribuidor de material dental en España con 25 años de experiencia y una red profesional de distribución.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
