"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-[#f7f3ef]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/brand/trasor-logo.png"
            alt={t("header.logoAlt")}
            width={150}
            height={42}
            className="h-auto w-[135px]"
          />
          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-600">
            {t("footer.brandText")}
          </p>
        </div>

        <div className="mt-12 grid gap-9 md:grid-cols-3 md:gap-10">
          <div className="text-left md:text-center">
            <div className="mb-4 flex items-center gap-3 md:justify-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#f26c2a] shadow-sm">
                <MapPin size={20} />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
                {t("contact.addressLabel")}
              </p>
            </div>
            <p className="text-base leading-7 text-gray-600">
              Trasor
              <br />
              Alejandro Roselló, 15, 3º
              <br />
              07002 Palma de Mallorca
            </p>
          </div>

          <div className="text-left md:text-center">
            <div className="mb-4 flex items-center gap-3 md:justify-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#f26c2a] shadow-sm">
                <Phone size={20} />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
                {t("contact.phoneLabel")}
              </p>
            </div>
            <div className="space-y-1">
              <a
                href="tel:+34620800771"
                className="block text-base leading-7 text-gray-600 transition hover:text-[#f26c2a]"
              >
                620 800 771
              </a>
              <a
                href="tel:+34617022590"
                className="block text-base leading-7 text-gray-600 transition hover:text-[#f26c2a]"
              >
                617 022 590
              </a>
            </div>
          </div>

          <div className="text-left md:text-center">
            <div className="mb-4 flex items-center gap-3 md:justify-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#f26c2a] shadow-sm">
                <Mail size={20} />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
                {t("contact.emailLabel")}
              </p>
            </div>
            <div className="space-y-1">
              <a
                href="mailto:fernando@trasor.es"
                className="block text-base leading-7 text-gray-600 transition hover:text-[#f26c2a]"
              >
                fernando@trasor.es
              </a>
              <a
                href="mailto:administracion@trasor.es"
                className="block text-base leading-7 text-gray-600 transition hover:text-[#f26c2a]"
              >
                administracion@trasor.es
              </a>
              <a
                href="mailto:info@trasor.es"
                className="block text-base leading-7 text-gray-600 transition hover:text-[#f26c2a]"
              >
                info@trasor.es
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {year} TRASOR
        </div>
      </div>
    </footer>
  );
}
