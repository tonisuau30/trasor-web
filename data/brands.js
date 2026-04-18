const brands = {
  euroClinicalService: {
    name: "EURO CLINICAL SERVICE",
    slug: "euro-clinical-service",
    logo: "/images/manufacturers/euro-clinical-service.png",
    cardLogo: "/images/manufacturers/ecs-logo.svg",
    watermarkLogo: "/images/manufacturers/ecs-logo.svg",
    watermarkLogoOpacityClassName: "opacity-[0.32]",
    watermarkLogoPositionClassName: "-translate-y-14 md:-translate-y-10",
    website: "https://ecssrl.com/en/",
    logoClassName: "h-28",
  },
  techimGroup: {
    name: "TECHIM GROUP",
    slug: "techim-group",
    logo: "/images/manufacturers/techim-group.png",
    cardLogo: "/images/manufacturers/techim-logo.svg",
    watermarkLogo: "/images/manufacturers/techim-logo.svg",
    watermarkLogoOpacityClassName: "opacity-[0.32]",
    website: "https://www.techimgroup.com/",
  },
  dispotech: {
    name: "DISPOTECH",
    slug: "dispotech",
    logo: "/images/manufacturers/dispotech.png",
    cardLogo: "/images/manufacturers/dispotech-logo.svg",
    watermarkLogo: "/images/manufacturers/dispotech-logo-short.svg",
    website: "https://www.dispotech.com/es",
    logoClassName: "h-16",
    watermarkLogoClassName: "h-36",
    watermarkLogoOpacityClassName: "opacity-[0.3]",
  },
  bartMedical: {
    name: "BART MEDICAL",
    slug: "bart-medical",
    logo: "/images/manufacturers/bart-medical.png",
    cardLogo: "/images/manufacturers/bartmedical-logo.svg",
    watermarkLogo: "/images/manufacturers/bartmedical-logo.svg",
    watermarkLogoOpacityClassName: "opacity-[0.32]",
    website: "https://www.bartmedical.com/es/",
    logoClassName: "h-28",
  },
  bartoliniDentalGroup: {
    name: "BARTOLINI DENTAL GROUP",
    slug: "bartolini-dental-group",
    logo: "/images/manufacturers/bartolini.png",
    cardLogo: "/images/manufacturers/bartolini-logo.svg",
    watermarkLogo: "/images/manufacturers/bartolini-logo-short.svg",
    watermarkLogoOpacityClassName: "opacity-[0.55]",
    watermarkLogoClassName: "h-24",
    watermarkLogoPositionClassName: "-translate-y-8 md:-translate-y-10",
    website: "https://www.bartolinidentalgroup.com/",
  },
  irideInternational: {
    name: "IRIDE INTERNATIONAL",
    slug: "iride-international",
    logo: "/images/manufacturers/iride-international.png",
    cardLogo: "/images/manufacturers/iride-logo.svg",
    watermarkLogo: "/images/manufacturers/iride-logo.svg",
    watermarkLogoOpacityClassName: "opacity-[0.9]",
    website: "https://www.irideinternational.com/es/",
    logoClassName: "h-28",
  },
  cerichemBiopharm: {
    name: "CERICHEM BIOPHARM",
    slug: "cerichem-biopharm",
    logo: "/images/manufacturers/cerichem-logo.svg",
    cardLogo: "/images/manufacturers/cerichem-logo.svg",
    watermarkLogo: "/images/manufacturers/cerichem-wm.svg",
    website: "https://www.cerichem.com/",
    logoClassName: "h-32",
    watermarkLogoClassName: "h-48",
    watermarkLogoOpacityClassName: "opacity-[0.3]",
    watermarkLogoPositionClassName: "translate-y-8 md:translate-y-10",
  },
  reddishStone: {
    name: "REDDISH STONE",
    slug: "reddish-stone",
    logo: "/images/manufacturers/reddish-stone.png",
    cardLogo: "/images/manufacturers/reddishstone-logo.svg",
    watermarkLogo: "/images/manufacturers/reddishstone-logo.svg",
    watermarkLogoOpacityClassName: "opacity-[0.42]",
    website: "https://www.unidi.it/en/associati/reddish-stone-srl/",
  },
  willPharma: {
    name: "WILL-PHARMA",
    slug: "will-pharma",
    logo: "/images/manufacturers/will-pharma.png",
    cardLogo: "/images/manufacturers/willpharma-logo.svg",
    watermarkLogo: "/images/manufacturers/willpharma-logo-short.svg",
    website: "https://www.willpharma.com/en/",
    watermarkLogoClassName: "h-36",
    watermarkLogoOpacityClassName: "opacity-[0.9]",
    watermarkLogoPositionClassName: "-translate-y-12 md:translate-y-0",
  },
  dentalstoreLucisano: {
    name: "DENTALSTORE & EDIZIONI LUCISANO",
    slug: "dentalstore-edizioni-lucisano",
    logo: "/images/manufacturers/dentalstore.png",
    cardLogo: "/images/manufacturers/dentalstore-logo.svg",
    watermarkLogo: "/images/manufacturers/dentalstore-logo.svg",
    watermarkLogoOpacityClassName: "opacity-[0.42]",
    watermarkLogoPositionClassName: "-translate-y-12 md:translate-y-0",
    website: "https://dental-educational-models.com/store/",
  },
  microMedica: {
    name: "MICRO MEDICA",
    slug: "micro-medica",
    logo: "/images/manufacturers/micro-medica.png",
    cardLogo: "/images/manufacturers/micromedica-logo.svg",
    watermarkLogo: "/images/manufacturers/micromedica-logo-short.svg",
    website: "https://www.micromedicasrl.com/es",
  },
};

export const laboratoryBrands = [
  { ...brands.techimGroup, catalogPdf: "CAT-TECHIM-23-EN.pdf" },
  { ...brands.bartMedical, catalogPdf: "CAT-BART-ESP.pdf" },
  {
    ...brands.bartoliniDentalGroup,
    catalogPdf: "CAT-BARTOLINIDENTALGROUP-IT.pdf",
  },
  { ...brands.irideInternational, catalogPdf: "CAT-IRIDE-IT.pdf" },
  brands.reddishStone,
  {
    ...brands.microMedica,
    catalogPdf: "CAT-LABORATORIO-MICROMEDICA-25-26-ESP.pdf",
  },
];

export const clinicBrands = [
  { ...brands.euroClinicalService, catalogPdf: "CAT-ECS-EN.pdf" },
  { ...brands.dispotech, catalogPdf: "CAT-DISPOTECH-25-ESP.pdf" },
  { ...brands.bartMedical, catalogPdf: "CAT-BART-ESP.pdf" },
  {
    ...brands.bartoliniDentalGroup,
    catalogPdf: "CAT-BARTOLINIDENTALGROUP-IT.pdf",
  },
  { ...brands.irideInternational, catalogPdf: "CAT-IRIDE-IT.pdf" },
  { ...brands.cerichemBiopharm, catalogPdf: "CAT-CERICHEM-ESP.pdf" },
  brands.willPharma,
  { ...brands.dentalstoreLucisano, catalogPdf: "CAT-DENTALSTORE-IT.pdf" },
  {
    ...brands.microMedica,
    catalogPdf: "CAT-CLINICA-MICROMEDICA-25-26-ESP.pdf",
  },
  brands.reddishStone,
];

export const allBrands = [
  ...clinicBrands,
  ...laboratoryBrands.filter(
    (laboratoryBrand) =>
      !clinicBrands.some((clinicBrand) => clinicBrand.slug === laboratoryBrand.slug),
  ),
];

export function findBrandBySlug(brandsList, slug) {
  return brandsList.find((brand) => brand.slug === slug);
}
