import ContactPageClient from "@/components/ContactPageClient";

export const metadata = {
  title: "Contacto",
  description:
    "Contacta con TRASOR para información sobre material dental, fabricantes, promociones y compra a través de distribuidores.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
