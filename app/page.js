"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { manufacturers } from "@/data/manufacturers";

const featuredManufacturers = manufacturers.slice(0, 6);

export default function HomePage() {
  const [activeButton, setActiveButton] = useState(null);
  const [activeManufacturer, setActiveManufacturer] = useState(null);

  return (
    <div>
      {/* HERO VISUAL */}
      <section className="relative min-h-screen overflow-hidden">
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0">
          <Image
            src="/images/home/image-home.png"
            alt="Dental equipment"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[rgba(20,35,45,0.38)]" />

        {/* CONTENIDO HERO */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="max-w-7xl mx-auto w-full px-6 pt-28 pb-16 md:pt-36">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-white/80">
                Distribución dental en España
              </p>

              <h1 className="mb-6 text-5xl font-semibold leading-tight text-white md:text-7xl">
                Te devolvemos
                <br />
                una sonrisa
              </h1>

              <p className="mb-10 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                Desde el año 2000, TRASOR conecta fabricantes internacionales
                de productos dentales con el mercado español, apostando por
                materiales que aportan valor añadido, fiabilidad y una
                distribución profesional.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/manufacturers"
                  onMouseEnter={() => setActiveButton("manufacturers")}
                  onMouseLeave={() => setActiveButton(null)}
                  onPointerEnter={() => setActiveButton("manufacturers")}
                  onPointerLeave={() => setActiveButton(null)}
                  onFocus={() => setActiveButton("manufacturers")}
                  onBlur={() => setActiveButton(null)}
                  onTouchStart={() => setActiveButton("manufacturers")}
                  className={`inline-flex items-center rounded-full bg-[#f26c2a] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-out ${
                    activeButton === "manufacturers"
                      ? "-translate-y-1 scale-[1.03] shadow-lg shadow-[#f26c2a]/25"
                      : "shadow-sm"
                  }`}
                >
                  Ver fabricantes
                </Link>

                <Link
                  href="/about"
                  onMouseEnter={() => setActiveButton("about")}
                  onMouseLeave={() => setActiveButton(null)}
                  onPointerEnter={() => setActiveButton("about")}
                  onPointerLeave={() => setActiveButton(null)}
                  onFocus={() => setActiveButton("about")}
                  onBlur={() => setActiveButton(null)}
                  onTouchStart={() => setActiveButton("about")}
                  className={`inline-flex items-center rounded-full border px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 ease-out ${
                    activeButton === "about"
                      ? "-translate-y-1 scale-[1.03] border-white bg-white text-[#2f2f2f] shadow-lg shadow-black/15"
                      : "border-white/50 bg-white/10 text-white shadow-sm"
                  }`}
                >
                  Conócenos
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FADE HACIA LA SIGUIENTE SECCIÓN */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#f7f3ef]" />
      </section>

      {/* BLOQUE INTRO */}
      <section className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
                Sobre Trasor
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight text-[#2f2f2f] md:text-5xl">
                Más de 20 años conectando fabricantes y distribución profesional
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                Trabajamos exclusivamente mediante distribuidores, con cobertura
                nacional y una selección cuidada de fabricantes internacionales
                que destacan por su calidad, consistencia y confianza a largo
                plazo.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur">
              <div className="space-y-4 text-gray-600">
                <p className="text-base leading-7">
                  Mayoristas en el sector dental desde hace más de 20 años.
                </p>

                <p className="text-base leading-7">
                  Comercializamos a través de tu distribuidor habitual, con una
                  red comercial profesional y un enfoque de servicio cercano y
                  fiable.
                </p>

                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f26c2a]">
                  Calidad · Fiabilidad · Servicio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURERS PREVIEW */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
              Fabricantes
            </p>

            <h2 className="mb-4 text-4xl font-semibold text-[#2f2f2f]">
              Socios internacionales seleccionados
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Colaboramos con fabricantes de confianza cuyos productos
              refuerzan la calidad, la consistencia y la seguridad profesional
              a largo plazo.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {featuredManufacturers.map((manufacturer, index) => {
              const isActive = activeManufacturer === index;

              return (
                <a
                  key={manufacturer.name}
                  href={manufacturer.website}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setActiveManufacturer(index)}
                  onMouseLeave={() => setActiveManufacturer(null)}
                  onPointerEnter={() => setActiveManufacturer(index)}
                  onPointerLeave={() => setActiveManufacturer(null)}
                  onFocus={() => setActiveManufacturer(index)}
                  onBlur={() => setActiveManufacturer(null)}
                  onTouchStart={() => setActiveManufacturer(index)}
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
                        alt={manufacturer.name}
                        width={220}
                        height={100}
                        className="h-24 w-auto object-contain"
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

          <div className="mt-10">
            <Link
              href="/manufacturers"
              onMouseEnter={() => setActiveButton("explore")}
              onMouseLeave={() => setActiveButton(null)}
              onPointerEnter={() => setActiveButton("explore")}
              onPointerLeave={() => setActiveButton(null)}
              onFocus={() => setActiveButton("explore")}
              onBlur={() => setActiveButton(null)}
              onTouchStart={() => setActiveButton("explore")}
              className={`inline-flex items-center rounded-full border border-[#f26c2a] px-6 py-3 text-sm font-medium transition-all duration-300 ease-out ${
                activeButton === "explore"
                  ? "-translate-y-1 scale-[1.03] bg-[#f26c2a] text-white shadow-lg shadow-[#f26c2a]/20"
                  : "text-[#f26c2a] shadow-sm"
              }`}
            >
              Explorar todos los fabricantes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
