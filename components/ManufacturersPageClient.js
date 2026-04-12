"use client";

import Image from "next/image";
import { useState } from "react";
import { manufacturers } from "@/data/manufacturers";
import { useLanguage } from "@/components/LanguageProvider";

export default function ManufacturersPageClient() {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="bg-[#fcfbf9] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
            {t("manufacturers.eyebrow")}
          </p>

          <h1 className="mb-4 text-4xl font-semibold text-[#2f2f2f] md:text-5xl">
            {t("manufacturers.title")}
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            {t("manufacturers.intro")}
          </p>
        </div>

        {/* GRID DE LOGOS */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {manufacturers.map((manufacturer, index) => {
            const isActive = activeCard === index;

            return (
              <a
                key={manufacturer.name}
                href={manufacturer.website}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onPointerEnter={() => setActiveCard(index)}
                onPointerLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(index)}
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
