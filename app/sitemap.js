import { SITE_ROUTES, SITE_URL } from "./siteConfig";

export default function sitemap() {
  return SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
