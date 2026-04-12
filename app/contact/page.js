import { MapPin, Phone, Mail, ShoppingBag } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HERO CONTACT */}
      <section className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#f26c2a]">
              Contact
            </p>

            <h1 className="mb-6 text-5xl font-semibold leading-tight text-[#2f2f2f] md:text-6xl">
              Contáctanos
            </h1>

            <p className="text-lg leading-8 text-gray-600">
              Si necesitas información sobre nuestros productos, promociones o
              la forma de compra, estaremos encantados de ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f3ef] text-[#f26c2a]">
                  <ShoppingBag size={22} />
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold text-[#2f2f2f]">
                    ¿Cómo comprar?
                  </h2>
                  <p className="text-lg leading-8 text-gray-600">
                    Venta a través de tu distribuidor habitual.
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  Si quieres comprar algún producto, necesitas más información o
                  conocer promociones disponibles, puedes contactar con nosotros
                  directamente.
                </p>

                <p>
                  TRASOR es mayorista en el sector dental desde hace más de 20
                  años, trabajando siempre a través de una red profesional de
                  distribución.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-gray-200 bg-[#fcfbf9] p-8 shadow-sm">
              <h2 className="mb-8 text-2xl font-semibold text-[#2f2f2f]">
                Información de contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#f26c2a] shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
                      Dirección
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
                      Teléfono
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
                      Email
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

          {/* BOTTOM NOTE */}
          <div className="mt-12 rounded-[2rem] border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg leading-8 text-gray-600">
              Nuestro objetivo es ofrecer el mejor servicio posible a través de
              una red comercial profesional y una selección cuidada de productos
              dentales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}