import SimpleTranslatedPage from "@/components/SimpleTranslatedPage";

export const metadata = {
  title: "Material dental para clínicas",
  description:
    "Material dental para clínicas distribuido por TRASOR en España a través de una red profesional de distribuidores.",
  alternates: {
    canonical: "/clinic",
  },
};

export default function ClinicPage() {
  return <SimpleTranslatedPage pageKey="clinic" />;
}
