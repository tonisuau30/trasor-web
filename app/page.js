import HomePageClient from "@/components/HomePageClient";

export const metadata = {
  title: "Distribuidor de material dental en España",
  description:
    "TRASOR distribuye material dental para clínicas y laboratorios en España, con más de 20 años de experiencia y una selección cuidada de fabricantes.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
