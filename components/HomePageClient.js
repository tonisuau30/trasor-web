"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { clinicBrands, laboratoryBrands } from "@/data/brands";
import { useLanguage } from "@/components/LanguageProvider";

const featuredBrands = [
  ...clinicBrands.slice(0, 3).map((brand) => ({
    ...brand,
    basePath: "/clinic",
  })),
  ...laboratoryBrands.slice(0, 3).map((brand) => ({
    ...brand,
    basePath: "/laboratory",
  })),
];

export default function HomePageClient() {
  const { t } = useLanguage();
  const [activeButton, setActiveButton] = useState(null);
  const [activeManufacturer, setActiveManufacturer] = useState(null);

  return (
    <div>
      {/* HERO VISUAL */}
      <section className="relative min-h-screen overflow-hidden">
        {/* IMAGEN DE FONDO */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/home/image-home.png"
            alt={t("home.heroAlt")}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-black/50" />

        {/* WATERMARK LOGO */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-end px-6 pt-28 pb-16 md:pt-36">
            <Image
              src="/images/brand/trasor-logo.png"
              alt=""
              width={320}
              height={90}
              aria-hidden="true"
              className="w-[260px] select-none opacity-[0.09] brightness-0 invert sm:w-[340px] md:w-[460px] lg:w-[560px] xl:w-[640px]"
            />
          </div>
        </div>

        {/* CONTENIDO HERO */}
        <div className="relative z-20 flex min-h-screen items-center">
          <div className="max-w-7xl mx-auto w-full px-6 pt-28 pb-16 md:pt-36">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-white/80">
                {t("home.eyebrow")}
              </p>

              <h1 className="mb-6 text-5xl font-semibold leading-tight text-white md:text-7xl">
                {t("home.titleLine1")}
                <br />
                {t("home.titleLine2")}
              </h1>

              <p className="mb-10 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                {t("home.intro")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/clinic"
                  onMouseEnter={() => setActiveButton("clinic")}
                  onMouseLeave={() => setActiveButton(null)}
                  onPointerEnter={() => setActiveButton("clinic")}
                  onPointerLeave={() => setActiveButton(null)}
                  onFocus={() => setActiveButton("clinic")}
                  onBlur={() => setActiveButton(null)}
                  onTouchStart={() => setActiveButton("clinic")}
                  className={`inline-flex items-center rounded-full bg-[#f26c2a] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-out ${
                    activeButton === "clinic"
                      ? "-translate-y-1 scale-[1.03] shadow-lg shadow-[#f26c2a]/25"
                      : "shadow-sm"
                  }`}
                >
                  {t("home.primaryCta")}
                </Link>

                <Link
                  href="/laboratory"
                  onMouseEnter={() => setActiveButton("laboratory")}
                  onMouseLeave={() => setActiveButton(null)}
                  onPointerEnter={() => setActiveButton("laboratory")}
                  onPointerLeave={() => setActiveButton(null)}
                  onFocus={() => setActiveButton("laboratory")}
                  onBlur={() => setActiveButton(null)}
                  onTouchStart={() => setActiveButton("laboratory")}
                  className={`inline-flex items-center rounded-full border px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 ease-out ${
                    activeButton === "laboratory"
                      ? "-translate-y-1 scale-[1.03] border-white bg-white text-[#2f2f2f] shadow-lg shadow-black/15"
                      : "border-white/50 bg-white/10 text-white shadow-sm"
                  }`}
                >
                  {t("home.secondaryCta")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FADE HACIA LA SIGUIENTE SECCIÓN */}
      </section>

      {/* BLOQUE INTRO */}
      <section className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
                {t("home.aboutEyebrow")}
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight text-[#2f2f2f] md:text-5xl">
                {t("home.aboutTitle")}
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                {t("home.aboutText")}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur">
              <div className="space-y-4 text-gray-600">
                <p className="text-base leading-7">
                  {t("home.note1")}
                </p>

                <p className="text-base leading-7">
                  {t("home.note2")}
                </p>

                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f26c2a]">
                  {t("home.values")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS PREVIEW */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
              {t("home.manufacturersEyebrow")}
            </p>

            <h2 className="mb-4 text-4xl font-semibold text-[#2f2f2f]">
              {t("home.manufacturersTitle")}
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              {t("home.manufacturersText")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {featuredBrands.map((manufacturer, index) => {
              const isActive = activeManufacturer === index;

              return (
                <Link
                  key={`${manufacturer.basePath}-${manufacturer.slug}`}
                  href={`${manufacturer.basePath}/${manufacturer.slug}`}
                  onMouseEnter={() => setActiveManufacturer(index)}
                  onMouseLeave={() => setActiveManufacturer(null)}
                  onPointerEnter={() => setActiveManufacturer(index)}
                  onPointerLeave={() => setActiveManufacturer(null)}
                  onFocus={() => setActiveManufacturer(index)}
                  onBlur={() => setActiveManufacturer(null)}
                  onTouchStart={() => setActiveManufacturer(index)}
                  className={`block w-full h-40 rounded-2xl bg-white p-6 border transition-all duration-300 ease-out ${
                    isActive
                      ? "border-[#f26c2a] shadow-lg -translate-y-1 scale-[1.02]"
                      : "border-gray-200 shadow-sm"
                  }`}
                >
                  <div className="flex h-full items-center justify-center">
                    {manufacturer.logo ? (
                      <Image
                        src={manufacturer.logo}
                        alt={t("manufacturers.logoAlt", {
                          name: manufacturer.name,
                        })}
                        width={220}
                        height={100}
                        className={`${
                          manufacturer.logoClassName ?? "h-24"
                        } w-auto object-contain`}
                      />
                    ) : (
                      <span className="text-sm text-gray-400">
                        {manufacturer.name}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/clinic"
              onMouseEnter={() => setActiveButton("explore-clinic")}
              onMouseLeave={() => setActiveButton(null)}
              onPointerEnter={() => setActiveButton("explore-clinic")}
              onPointerLeave={() => setActiveButton(null)}
              onFocus={() => setActiveButton("explore-clinic")}
              onBlur={() => setActiveButton(null)}
              onTouchStart={() => setActiveButton("explore-clinic")}
              className={`inline-flex items-center rounded-full border border-[#f26c2a] px-6 py-3 text-sm font-medium transition-all duration-300 ease-out ${
                activeButton === "explore-clinic"
                  ? "-translate-y-1 scale-[1.03] bg-[#f26c2a] text-white shadow-lg shadow-[#f26c2a]/20"
                  : "text-[#f26c2a] shadow-sm"
              }`}
            >
              {t("home.primaryCta")}
            </Link>
            <Link
              href="/laboratory"
              onMouseEnter={() => setActiveButton("explore-laboratory")}
              onMouseLeave={() => setActiveButton(null)}
              onPointerEnter={() => setActiveButton("explore-laboratory")}
              onPointerLeave={() => setActiveButton(null)}
              onFocus={() => setActiveButton("explore-laboratory")}
              onBlur={() => setActiveButton(null)}
              onTouchStart={() => setActiveButton("explore-laboratory")}
              className={`inline-flex items-center rounded-full border border-[#f26c2a] px-6 py-3 text-sm font-medium transition-all duration-300 ease-out ${
                activeButton === "explore-laboratory"
                  ? "-translate-y-1 scale-[1.03] bg-[#f26c2a] text-white shadow-lg shadow-[#f26c2a]/20"
                  : "text-[#f26c2a] shadow-sm"
              }`}
            >
              {t("home.secondaryCta")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
