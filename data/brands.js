const brands = {
  euroClinicalService: {
    name: "EURO CLINICAL SERVICE",
    slug: "euro-clinical-service",
    logo: "/images/manufacturers/euro-clinical-service.png",
    website: "https://ecssrl.com/en/",
    logoClassName: "h-28",
  },
  techimGroup: {
    name: "TECHIM GROUP",
    slug: "techim-group",
    logo: "/images/manufacturers/techim-group.png",
    website: "https://www.techimgroup.com/",
  },
  dispotech: {
    name: "DISPOTECH",
    slug: "dispotech",
    logo: "/images/manufacturers/dispotech.png",
    website: "https://www.dispotech.com/es",
    logoClassName: "h-16",
  },
  bartMedical: {
    name: "BART MEDICAL",
    slug: "bart-medical",
    logo: "/images/manufacturers/bart-medical.png",
    website: "https://www.bartmedical.com/es/",
    logoClassName: "h-28",
  },
  bartoliniDentalGroup: {
    name: "BARTOLINI DENTAL GROUP",
    slug: "bartolini-dental-group",
    logo: "/images/manufacturers/bartolini.png",
    website: "https://www.bartolinidentalgroup.com/",
  },
  irideInternational: {
    name: "IRIDE INTERNATIONAL",
    slug: "iride-international",
    logo: "/images/manufacturers/iride-international.png",
    website: "https://www.irideinternational.com/es/",
    logoClassName: "h-28",
  },
  cerichemBiopharm: {
    name: "CERICHEM BIOPHARM",
    slug: "cerichem-biopharm",
    logo: "/images/manufacturers/cerichem.png",
    website: "https://www.cerichem.com/",
    logoClassName: "h-32",
  },
  reddishStone: {
    name: "REDDISH STONE",
    slug: "reddish-stone",
    logo: "/images/manufacturers/reddish-stone.png",
    website: "https://www.unidi.it/en/associati/reddish-stone-srl/",
  },
  willPharma: {
    name: "WILL-PHARMA",
    slug: "will-pharma",
    logo: "/images/manufacturers/will-pharma.png",
    website: "https://www.willpharma.com/en/",
  },
  dentalstoreLucisano: {
    name: "DENTALSTORE & EDIZIONI LUCISANO",
    slug: "dentalstore-edizioni-lucisano",
    logo: "/images/manufacturers/dentalstore.png",
    website: "https://dental-educational-models.com/store/",
  },
  microMedica: {
    name: "MICRO MEDICA",
    slug: "micro-medica",
    logo: "/images/manufacturers/micro-medica.png",
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
