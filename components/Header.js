"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { clinicBrands, laboratoryBrands } from "@/data/brands";

const navLinks = [
  { href: "/", labelKey: "header.home" },
  {
    href: "/clinic",
    labelKey: "header.clinic",
    brands: clinicBrands,
  },
  {
    href: "/laboratory",
    labelKey: "header.laboratory",
    brands: laboratoryBrands,
  },
  { href: "/about", labelKey: "header.about" },
  { href: "/contact", labelKey: "header.contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { language, languages, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveNavItem(null);
    setExpandedMobileItem(null);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/brand/trasor-logo.png"
            alt={t("header.logoAlt")}
            width={150}
            height={42}
            priority
            className="h-auto w-[120px] md:w-[140px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const hasDropdown = Boolean(link.brands);
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            const isInteractive = activeNavItem === link.href;

            if (hasDropdown) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setActiveNavItem(link.href)}
                  onMouseLeave={() => setActiveNavItem(null)}
                  onPointerEnter={() => setActiveNavItem(link.href)}
                  onPointerLeave={() => setActiveNavItem(null)}
                  onFocus={() => setActiveNavItem(link.href)}
                  onBlur={() => setActiveNavItem(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center gap-1 py-2 text-sm font-medium transition-all duration-300 ease-out ${
                      isActive || isInteractive
                        ? "text-[#f26c2a]"
                        : "text-[#2f2f2f]"
                    } ${isInteractive ? "-translate-y-0.5 scale-[1.04]" : ""}`}
                  >
                    <span>{t(link.labelKey)}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        isInteractive ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#f26c2a] transition-all duration-300 ease-out ${
                        isActive || isInteractive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      isInteractive
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                      <Link
                        href={link.href}
                        className="relative block rounded-xl px-4 py-3 text-sm font-semibold text-[#2f2f2f] transition-all duration-200 ease-out hover:translate-x-1 hover:bg-[#f26c2a]/10 hover:text-[#f26c2a] hover:shadow-sm focus-visible:translate-x-1 focus-visible:bg-[#f26c2a]/10 focus-visible:text-[#f26c2a] focus-visible:outline-none active:scale-[0.98] active:bg-[#f26c2a]/15"
                      >
                        {t("header.viewAll")} {t(link.labelKey)}
                      </Link>
                      <div className="my-2 h-px bg-gray-200" />
                      {link.brands.map((brand) => (
                        <Link
                          key={brand.slug}
                          href={`${link.href}/${brand.slug}`}
                          className="group relative block rounded-xl px-5 py-2.5 text-sm text-gray-600 transition-all duration-200 ease-out hover:translate-x-1 hover:bg-[#f26c2a]/10 hover:text-[#f26c2a] hover:shadow-sm focus-visible:translate-x-1 focus-visible:bg-[#f26c2a]/10 focus-visible:text-[#f26c2a] focus-visible:outline-none active:scale-[0.98] active:bg-[#f26c2a]/15"
                        >
                          <span className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f26c2a] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActiveNavItem(link.href)}
                onMouseLeave={() => setActiveNavItem(null)}
                onPointerEnter={() => setActiveNavItem(link.href)}
                onPointerLeave={() => setActiveNavItem(null)}
                onFocus={() => setActiveNavItem(link.href)}
                onBlur={() => setActiveNavItem(null)}
                onTouchStart={() => setActiveNavItem(link.href)}
                className={`relative inline-flex py-2 text-sm font-medium transition-all duration-300 ease-out ${
                  isActive || isInteractive
                    ? "text-[#f26c2a]"
                    : "text-[#2f2f2f]"
                } ${isInteractive ? "-translate-y-0.5 scale-[1.04]" : ""}`}
              >
                <span>{t(link.labelKey)}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#f26c2a] transition-all duration-300 ease-out ${
                    isActive || isInteractive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div
          className="hidden items-center gap-1 rounded-full border border-gray-200 p-1 md:flex"
          aria-label={t("header.language")}
        >
          {languages.map((item) => {
            const isActive = language === item.code;

            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                onMouseEnter={() => setActiveNavItem(`lang-${item.code}`)}
                onMouseLeave={() => setActiveNavItem(null)}
                onPointerEnter={() => setActiveNavItem(`lang-${item.code}`)}
                onPointerLeave={() => setActiveNavItem(null)}
                onFocus={() => setActiveNavItem(`lang-${item.code}`)}
                onBlur={() => setActiveNavItem(null)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-300 ease-out ${
                  isActive
                    ? "bg-[#f26c2a] text-white shadow-sm"
                    : "text-[#2f2f2f]"
                } ${
                  activeNavItem === `lang-${item.code}`
                    ? "-translate-y-0.5 scale-[1.05]"
                    : ""
                }`}
                aria-pressed={isActive}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          onMouseEnter={() => setActiveNavItem("menu")}
          onMouseLeave={() => setActiveNavItem(null)}
          onPointerEnter={() => setActiveNavItem("menu")}
          onPointerLeave={() => setActiveNavItem(null)}
          onFocus={() => setActiveNavItem("menu")}
          onBlur={() => setActiveNavItem(null)}
          className={`inline-flex items-center justify-center rounded-md p-2 text-[#2f2f2f] transition-all duration-300 ease-out md:hidden ${
            activeNavItem === "menu"
              ? "-translate-y-0.5 bg-gray-100 text-[#f26c2a] shadow-sm"
              : ""
          }`}
          aria-label={mobileOpen ? t("header.closeMenu") : t("header.openMenu")}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => {
              const hasDropdown = Boolean(link.brands);
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              const activeKey = `mobile-${link.href}`;
              const isInteractive = activeNavItem === activeKey;

              if (hasDropdown) {
                const isExpanded = expandedMobileItem === link.href;

                return (
                  <div key={link.href} className="border-b border-gray-100 py-1">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedMobileItem(isExpanded ? null : link.href)
                      }
                      onMouseEnter={() => setActiveNavItem(activeKey)}
                      onMouseLeave={() => setActiveNavItem(null)}
                      onPointerEnter={() => setActiveNavItem(activeKey)}
                      onPointerLeave={() => setActiveNavItem(null)}
                      onFocus={() => setActiveNavItem(activeKey)}
                      onBlur={() => setActiveNavItem(null)}
                      className={`flex w-full items-center justify-between py-3 text-left text-sm font-medium transition-all duration-300 ease-out ${
                        isActive || isInteractive
                          ? "text-[#f26c2a]"
                          : "text-[#2f2f2f]"
                      } ${isInteractive ? "translate-x-1" : ""}`}
                      aria-expanded={isExpanded}
                    >
                      <span>{t(link.labelKey)}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pb-3 pl-4">
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#2f2f2f] transition-all duration-200 hover:translate-x-1 hover:bg-[#f26c2a]/10 hover:text-[#f26c2a] hover:shadow-sm active:scale-[0.98] active:bg-[#f26c2a]/15"
                        >
                          {t("header.viewAll")} {t(link.labelKey)}
                        </Link>
                        {link.brands.map((brand) => (
                          <Link
                          key={brand.slug}
                          href={`${link.href}/${brand.slug}`}
                          onClick={closeMenu}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:translate-x-1 hover:bg-[#f26c2a]/10 hover:text-[#f26c2a] hover:shadow-sm active:scale-[0.98] active:bg-[#f26c2a]/15"
                        >
                            {brand.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  onMouseEnter={() => setActiveNavItem(activeKey)}
                  onMouseLeave={() => setActiveNavItem(null)}
                  onPointerEnter={() => setActiveNavItem(activeKey)}
                  onPointerLeave={() => setActiveNavItem(null)}
                  onFocus={() => setActiveNavItem(activeKey)}
                  onBlur={() => setActiveNavItem(null)}
                  onTouchStart={() => setActiveNavItem(activeKey)}
                  className={`relative py-3 text-sm font-medium transition-all duration-300 ease-out ${
                    isActive || isInteractive
                      ? "text-[#f26c2a]"
                      : "text-[#2f2f2f]"
                  } ${isInteractive ? "translate-x-1" : ""}`}
                >
                  <span>{t(link.labelKey)}</span>
                  <span
                    className={`absolute bottom-2 left-0 h-0.5 rounded-full bg-[#f26c2a] transition-all duration-300 ease-out ${
                      isActive || isInteractive
                        ? "w-8 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <div
            className="mx-auto flex max-w-7xl gap-2 px-6 pb-5"
            aria-label={t("header.language")}
          >
            {languages.map((item) => {
              const isActive = language === item.code;
              const activeKey = `mobile-lang-${item.code}`;

              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  onMouseEnter={() => setActiveNavItem(activeKey)}
                  onMouseLeave={() => setActiveNavItem(null)}
                  onPointerEnter={() => setActiveNavItem(activeKey)}
                  onPointerLeave={() => setActiveNavItem(null)}
                  onFocus={() => setActiveNavItem(activeKey)}
                  onBlur={() => setActiveNavItem(null)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ease-out ${
                    isActive
                      ? "border-[#f26c2a] bg-[#f26c2a] text-white"
                      : "border-gray-200 text-[#2f2f2f]"
                  } ${activeNavItem === activeKey ? "-translate-y-0.5" : ""}`}
                  aria-pressed={isActive}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
