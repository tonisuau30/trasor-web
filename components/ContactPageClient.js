"use client";

import { MapPin, Phone, Mail, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPageClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <section className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
              {t("contact.eyebrow")}
            </p>

            <h1 className="mb-6 text-5xl font-semibold leading-tight text-[#2f2f2f] md:text-6xl">
              {t("contact.title")}
            </h1>

            <p className="text-lg leading-8 text-gray-600">
              {t("contact.intro")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f3ef] text-[#f26c2a]">
                  <ShoppingBag size={22} />
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold text-[#2f2f2f]">
                    {t("contact.buyingTitle")}
                  </h2>
                  <p className="text-lg leading-8 text-gray-600">
                    {t("contact.buyingLead")}
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>{t("contact.buyingText1")}</p>
                <p>{t("contact.buyingText2")}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-[#fcfbf9] p-8 shadow-sm">
              <h2 className="mb-8 text-2xl font-semibold text-[#2f2f2f]">
                {t("contact.contactInfo")}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#f26c2a] shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
                      {t("contact.addressLabel")}
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                      Trasor
                      <br />
                      Alejandro Roselló, 15, 3º
                      <br />
                      07002 Palma de Mallorca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#f26c2a] shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
                      {t("contact.phoneLabel")}
                    </p>
                    <a
                      href="tel:+34620800771"
                      className="text-lg leading-8 text-gray-600 transition hover:text-[#f26c2a]"
                    >
                      620 800 771
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#f26c2a] shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
                      {t("contact.emailLabel")}
                    </p>
                    <div className="space-y-1">
                      <a
                        href="mailto:fernando@trasor.es"
                        className="block text-lg leading-8 text-gray-600 transition hover:text-[#f26c2a]"
                      >
                        fernando@trasor.es
                      </a>
                      <a
                        href="mailto:administracion@trasor.es"
                        className="block text-lg leading-8 text-gray-600 transition hover:text-[#f26c2a]"
                      >
                        administracion@trasor.es
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg leading-8 text-gray-600">
              {t("contact.bottomNote")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
