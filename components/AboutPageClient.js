"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <section className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
                {t("about.eyebrow")}
              </p>

              <h1 className="mb-3">
                <span className="sr-only">{t("about.title")}</span>
                <Image
                  src="/images/brand/trasor-logo-25y.svg"
                  alt=""
                  width={520}
                  height={180}
                  priority
                  className="h-auto w-[330px] max-w-full md:w-[480px]"
                />
              </h1>

              <p className="mb-4 text-2xl leading-8 text-gray-600">
                {t("about.tagline")}
              </p>

              <p className="text-lg leading-8 text-gray-600">
                {t("about.intro")}
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur">
                <Image
                  src="/images/brand/trasor-logo.png"
                  alt=""
                  width={700}
                  height={240}
                  className="pointer-events-none absolute right-6 top-1/2 w-[220px] -translate-y-1/2 select-none opacity-[0.08]"
                />

                <div className="relative max-w-[75%] space-y-4">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f26c2a]">
                    {t("about.since")}
                  </p>

                  <p className="text-base leading-7 text-gray-600">
                    {t("about.card1")}
                  </p>

                  <p className="text-base leading-7 text-gray-600">
                    {t("about.card2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-[#2f2f2f]">
                {t("about.philosophyTitle")}
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>{t("about.philosophy1")}</p>
                <p>{t("about.philosophy2")}</p>
                <p>{t("about.philosophy3")}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-[#fcfbf9] p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-[#2f2f2f]">
                {t("about.commitmentTitle")}
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>{t("about.commitment1")}</p>
                <p>{t("about.commitment2")}</p>
                <p>
                  {t("about.commitment3Prefix")}
                  <span className="ml-2 font-medium text-[#2f2f2f]">
                    {t("about.slogan")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
