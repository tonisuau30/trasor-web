"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function CategoryHeroClient({
  categoryKey,
  backgroundImage,
  targetId,
}) {
  const { t } = useLanguage();
  const [isActive, setIsActive] = useState(false);

  return (
    <section
      className="relative flex min-h-[80vh] w-full items-center justify-center bg-cover bg-center px-6 pt-20 text-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
          {t(`${categoryKey}.heroTitle`)}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
          {t(`${categoryKey}.heroSubtitle`)}
        </p>
        <a
          href={`#${targetId}`}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          onPointerEnter={() => setIsActive(true)}
          onPointerLeave={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onTouchStart={() => setIsActive(true)}
          className={`mt-10 inline-flex items-center rounded-full bg-[#f26c2a] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-out ${
            isActive
              ? "-translate-y-1 scale-[1.03] shadow-lg shadow-[#f26c2a]/25"
              : "shadow-sm"
          }`}
        >
          {t(`${categoryKey}.heroCta`)}
        </a>
      </div>
    </section>
  );
}
