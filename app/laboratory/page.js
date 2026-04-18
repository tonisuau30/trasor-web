import BrandIndexPageClient from "@/components/BrandIndexPageClient";
import CategoryHeroClient from "@/components/CategoryHeroClient";
import { laboratoryBrands } from "@/data/brands";

export const metadata = {
  title: "Material dental para laboratorios",
  description:
    "Marcas de material dental para laboratorios distribuidas por TRASOR en España.",
  alternates: {
    canonical: "/laboratory",
  },
};

export default function LaboratoryPage() {
  return (
    <>
      <CategoryHeroClient
        categoryKey="laboratory"
        backgroundImage="/images/backgrounds/laboratory/laboratory-hero-bg.png"
        targetId="laboratory-products"
      />

      <BrandIndexPageClient
        brands={laboratoryBrands}
        categoryKey="laboratory"
        basePath="/laboratory"
        sectionId="laboratory-products"
      />
    </>
  );
}
