"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <section className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid items-center gap-14 md:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/brand/trasor-logo-25y.svg"
                alt=""
                width={720}
                height={260}
                priority
                className="h-auto w-full max-w-[520px] object-contain md:max-w-[620px] lg:max-w-[700px]"
              />
            </div>

            <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
                {t("about.eyebrow")}
              </p>

              <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#2f2f2f] md:text-5xl">
                {t("about.tagline")}
              </h1>

              <p className="text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
                {t("about.intro")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-gray-200 bg-[#fcfbf9] px-8 py-10 text-center shadow-sm md:px-12 md:py-12">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
              {t("about.since")}
            </p>

            <div className="space-y-4 text-lg leading-8 text-gray-600">
              <p>{t("about.card1")}</p>
              <p>{t("about.card2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 pb-24 md:pb-28">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
              <h2 className="mb-6 text-2xl font-semibold text-[#2f2f2f]">
                {t("about.philosophyTitle")}
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>{t("about.philosophy1")}</p>
                <p>{t("about.philosophy2")}</p>
                <p>{t("about.philosophy3")}</p>
              </div>
            </div>

            <div className="flex flex-col rounded-3xl border border-gray-200 bg-[#fcfbf9] p-8 shadow-sm md:p-10">
              <h2 className="mb-6 text-2xl font-semibold text-[#2f2f2f]">
                {t("about.commitmentTitle")}
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>{t("about.commitment1")}</p>
                <p>{t("about.commitment2")}</p>
                <p>{t("about.commitment3Prefix")}</p>
                <p className="font-medium text-[#2f2f2f]">
                  {t("about.slogan")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
