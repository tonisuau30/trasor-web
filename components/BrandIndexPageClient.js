"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function BrandIndexPageClient({
  brands,
  categoryKey,
  basePath,
  sectionId,
}) {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id={sectionId} className="bg-[#fcfbf9] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
            {t(`${categoryKey}.eyebrow`)}
          </p>

          <h1 className="mb-4 text-4xl font-semibold text-[#2f2f2f] md:text-5xl">
            {t(`${categoryKey}.title`)}
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            {t(`${categoryKey}.intro`)}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {brands.map((brand, index) => {
            const isActive = activeCard === index;

            return (
              <Link
                key={brand.slug}
                href={`${basePath}/${brand.slug}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onPointerEnter={() => setActiveCard(index)}
                onPointerLeave={() => setActiveCard(null)}
                onFocus={() => setActiveCard(index)}
                onBlur={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(index)}
                className={`block w-full h-40 rounded-2xl bg-white p-6 border transition-all duration-300 ease-out ${
                  isActive
                    ? "border-[#f26c2a] shadow-lg -translate-y-1 scale-[1.02]"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                <div className="flex h-full items-center justify-center">
                  {brand.logo ? (
                    <Image
                      src={brand.logo}
                      alt={t("brands.logoAlt", { name: brand.name })}
                      width={220}
                      height={100}
                      className={`${
                        brand.logoClassName ?? "h-24"
                      } w-auto object-contain`}
                    />
                  ) : (
                    <span className="text-sm text-gray-400">{brand.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
