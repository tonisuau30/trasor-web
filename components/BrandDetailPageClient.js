"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function BrandDetailPageClient({ brand, categoryKey }) {
  const { t } = useLanguage();
  const catalogHref = brand.catalogPdf ? `/catalogs/${brand.catalogPdf}` : null;
  const heroBackground =
    categoryKey === "clinic"
      ? "/images/backgrounds/clinic/clinic-hero-bg.png"
      : "/images/backgrounds/laboratory/laboratory-hero-bg.png";
  const descriptionParagraphs = t(
    `brandDescriptions.${categoryKey}.${brand.slug}`,
  );
  const paragraphs = Array.isArray(descriptionParagraphs)
    ? descriptionParagraphs
    : [t("brandDetail.descriptionText", { name: brand.name })];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={heroBackground}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/50" />

        <div className="pointer-events-none absolute inset-x-0 bottom-16 top-20 z-10 flex items-center justify-center px-6 md:bottom-24">
          <Image
            src={brand.logo}
            alt=""
            width={720}
            height={300}
            aria-hidden="true"
            className={`${
              brand.logoClassName ?? "h-28"
            } max-h-48 w-auto max-w-[88vw] select-none object-contain opacity-[0.22] md:max-h-72 md:max-w-[680px]`}
          />
        </div>

        <div className="relative z-20 flex min-h-[300px] items-center justify-center md:min-h-[380px]">
          <div className="mx-auto mt-20 w-full max-w-7xl px-6 py-12 text-center md:mt-28 md:py-14">
            <h1 className="mx-auto max-w-5xl text-3xl font-semibold leading-tight text-white sm:text-[2.25rem] md:text-[2.9rem]">
              {brand.name}
            </h1>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-white/85 md:text-base">
              {t("brandDetail.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfbf9]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
              {t("brandDetail.descriptionEyebrow")}
            </p>
            <h2 className="mb-8 text-4xl font-semibold leading-tight text-[#2f2f2f] md:text-5xl">
              {t("brandDetail.descriptionTitle", { name: brand.name })}
            </h2>
            <div className="space-y-3 text-lg leading-8 text-gray-600">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex h-64 items-center justify-center rounded-2xl border border-gray-200 bg-white text-sm font-medium uppercase tracking-[0.16em] text-gray-400 shadow-sm"
              >
                {t("brandDetail.imagePlaceholder")} {item}
              </div>
            ))}
          </div>

          <div className="mt-12">
            {catalogHref ? (
              <Link
                href={catalogHref}
                className="inline-flex items-center rounded-full bg-[#f26c2a] px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#f26c2a]/25"
              >
                {t("brandDetail.downloadCta")}
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center rounded-full bg-gray-300 px-7 py-3.5 text-sm font-medium text-white shadow-sm"
              >
                {t("brandDetail.catalogUnavailable")}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
