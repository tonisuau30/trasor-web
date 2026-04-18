import BrandIndexPageClient from "@/components/BrandIndexPageClient";
import CategoryHeroClient from "@/components/CategoryHeroClient";
import { clinicBrands } from "@/data/brands";

export const metadata = {
  title: "Material dental para clínicas",
  description:
    "Marcas de material dental para clínicas distribuidas por TRASOR en España.",
  alternates: {
    canonical: "/clinic",
  },
};

export default function ClinicPage() {
  return (
    <>
      <CategoryHeroClient
        categoryKey="clinic"
        backgroundImage="/images/backgrounds/clinic/clinic-hero-bg.png"
        targetId="clinic-products"
      />

      <BrandIndexPageClient
        brands={clinicBrands}
        categoryKey="clinic"
        basePath="/clinic"
        sectionId="clinic-products"
      />
    </>
  );
}
