import { notFound } from "next/navigation";
import BrandDetailPageClient from "@/components/BrandDetailPageClient";
import { findBrandBySlug, laboratoryBrands } from "@/data/brands";

export function generateStaticParams() {
  return laboratoryBrands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = findBrandBySlug(laboratoryBrands, slug);

  if (!brand) {
    return {};
  }

  return {
    title: `${brand.name} para laboratorios`,
    description: `Información de ${brand.name} dentro de la selección de marcas para laboratorios de TRASOR.`,
    alternates: {
      canonical: `/laboratory/${brand.slug}`,
    },
  };
}

export default async function LaboratoryBrandPage({ params }) {
  const { slug } = await params;
  const brand = findBrandBySlug(laboratoryBrands, slug);

  if (!brand) {
    notFound();
  }

  return <BrandDetailPageClient brand={brand} categoryKey="laboratory" />;
}
