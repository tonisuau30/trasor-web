import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO ABOUT */}
      <section className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* TEXTO */}
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
                About Us
              </p>

              <h1 className="mb-6 text-5xl font-semibold leading-tight text-[#2f2f2f] md:text-6xl">
                TRASOR
              </h1>

              <p className="mb-6 text-2xl leading-9 text-gray-600">
                Te devolvemos una sonrisa.
              </p>

              <p className="text-lg leading-8 text-gray-600">
                Desde el año 2000, trabajamos como nexo entre fabricantes
                internacionales de productos dentales y el mercado español,
                apostando siempre por materiales que aporten valor añadido,
                fiabilidad y una distribución profesional.
              </p>
            </div>

            {/* BLOQUE VISUAL */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur">
                <Image
                  src="/images/brand/trasor-logo.png"
                  alt="Trasor"
                  width={700}
                  height={240}
                  className="pointer-events-none absolute right-6 top-1/2 w-[220px] -translate-y-1/2 select-none opacity-[0.08]"
                />

                <div className="relative max-w-[75%] space-y-4">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f26c2a]">
                    Since 2000
                  </p>

                  <p className="text-base leading-7 text-gray-600">
                    Mayoristas en el sector dental con una trayectoria basada en
                    la excelencia, la cercanía y la confianza.
                  </p>

                  <p className="text-base leading-7 text-gray-600">
                    Nuestra red de distribuidores y nuestra experiencia son la
                    base del servicio que ofrecemos cada día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-[#2f2f2f]">
                Nuestra filosofía
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  TRASOR nació en el año 2000 con el fin de establecer un nexo
                  entre los fabricantes internacionales de productos dentales y
                  el mercado español.
                </p>

                <p>
                  Nuestra filosofía siempre ha sido la de buscar aquellos
                  materiales alternativos que considerábamos que aportaban un
                  valor añadido a lo existente.
                </p>

                <p>
                  TRASOR siempre ha comercializado sus productos exclusivamente
                  a través de nuestra red de distribuidores a nivel nacional.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-[#fcfbf9] p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-[#2f2f2f]">
                Compromiso y trayectoria
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  Nuestro objetivo es que, a través de nuestros clientes y de su
                  red comercial, podamos cubrir el mercado nacional con los
                  mejores productos y el mejor servicio que podamos ofrecer.
                </p>

                <p>
                  Nuestro fundador y CEO, Fernando Leclerc, con una dilatada
                  experiencia, se responsabiliza de que todos los productos
                  cumplan con las exigencias y necesidades que los clientes nos
                  demandan.
                </p>

                <p>
                  Nuestra trayectoria es la mejor garantía de excelencia y
                  fiabilidad, y da pie a nuestro eslogan:
                  <span className="ml-2 font-medium text-[#2f2f2f]">
                    “Te devolvemos una sonrisa”.
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