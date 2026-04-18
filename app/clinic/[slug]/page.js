import { notFound } from "next/navigation";
import BrandDetailPageClient from "@/components/BrandDetailPageClient";
import { clinicBrands, findBrandBySlug } from "@/data/brands";

export function generateStaticParams() {
  return clinicBrands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = findBrandBySlug(clinicBrands, slug);

  if (!brand) {
    return {};
  }

  return {
    title: `${brand.name} para clínicas`,
    description: `Información de ${brand.name} dentro de la selección de marcas para clínicas de TRASOR.`,
    alternates: {
      canonical: `/clinic/${brand.slug}`,
    },
  };
}

export default async function ClinicBrandPage({ params }) {
  const { slug } = await params;
  const brand = findBrandBySlug(clinicBrands, slug);

  if (!brand) {
    notFound();
  }

  return <BrandDetailPageClient brand={brand} categoryKey="clinic" />;
}
