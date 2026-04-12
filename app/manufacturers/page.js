import ManufacturersPageClient from "@/components/ManufacturersPageClient";

export const metadata = {
  title: "Fabricantes y marcas dentales",
  description:
    "Fabricantes internacionales de material dental seleccionados por TRASOR para la distribución profesional en clínicas y laboratorios.",
  alternates: {
    canonical: "/manufacturers",
  },
};

export default function ManufacturersPage() {
  return <ManufacturersPageClient />;
}
