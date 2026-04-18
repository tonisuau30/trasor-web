import { SITE_ROUTES, SITE_URL } from "./siteConfig";
import { clinicBrands, laboratoryBrands } from "@/data/brands";

export default function sitemap() {
  const brandRoutes = [
    ...clinicBrands.map((brand) => `/clinic/${brand.slug}`),
    ...laboratoryBrands.map((brand) => `/laboratory/${brand.slug}`),
  ];

  return [...SITE_ROUTES, ...brandRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
