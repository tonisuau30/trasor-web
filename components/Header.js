"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/manufacturers", label: "Manufacturers" },
  { href: "/laboratory", label: "Laboratory" },
  { href: "/clinic", label: "Clinic" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/brand/trasor-logo.png"
            alt="Trasor"
            width={150}
            height={42}
            priority
            className="h-auto w-[120px] md:w-[140px]"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#f26c2a]"
                    : "text-[#2f2f2f] hover:text-[#f26c2a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}