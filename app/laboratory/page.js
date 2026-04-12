import SimpleTranslatedPage from "@/components/SimpleTranslatedPage";

export const metadata = {
  title: "Material dental para laboratorios",
  description:
    "Material dental para laboratorios distribuido por TRASOR en España, con fabricantes seleccionados y experiencia en el sector dental.",
  alternates: {
    canonical: "/laboratory",
  },
};

export default function LaboratoryPage() {
  return <SimpleTranslatedPage pageKey="laboratory" />;
}
