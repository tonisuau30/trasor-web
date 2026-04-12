"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function SimpleTranslatedPage({ pageKey }) {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-semibold text-[#2f2f2f] mb-4">
        {t(`${pageKey}.title`)}
      </h1>
      <p className="text-lg text-gray-600">{t(`${pageKey}.text`)}</p>
    </section>
  );
}
