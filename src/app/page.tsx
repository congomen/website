﻿import Image from "next/image";
import { site } from "@/site.config";

export default function Page() {
  const hero = site.hero;
  const services = site.sections?.find((s) => s.id === "services");
  const why = site.sections?.find((s) => s.id === "why");

  const gallery = [
    "/templates/photo-gallery-1.jpg",
    "/templates/photo-gallery-2.jpg",
    "/templates/photo-gallery-3.jpg",
    "/templates/photo-gallery-4.jpg",
    "/templates/photo-gallery-5.jpg",
    "/templates/photo-gallery-6.jpg",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              {hero.title}
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">{hero.subtitle}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={hero.ctaPrimary?.href ?? `https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-black text-white text-sm hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.ctaPrimary?.label ?? "Chat on WhatsApp"}
              </a>
              <a
                href={hero.ctaSecondary?.href ?? "#portfolio"}
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border text-sm hover:bg-gray-50"
              >
                {hero.ctaSecondary?.label ?? "View Portfolio"}
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              {site.contact.address} · {site.contact.phone}
            </div>
          </div>

          <div className="relative">
            <Image
              src={hero.image}
              alt={site.brand}
              width={1000}
              height={660}
              priority
              className="w-full h-[340px] sm:h-[440px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-12 sm:py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Work</h2>
          <p className="mt-2 text-gray-600">
            A selection of portraits, events, product and lifestyle shoots.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((src, i) => (
              <figure key={i} className="group overflow-hidden rounded-xl border bg-white">
                <Image
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  width={800}
                  height={640}
                  className="h-64 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 sm:py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">{services?.title ?? "Our Services"}</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(services?.items ?? []).map((s, i) => (
              <div key={i} className="rounded-xl border p-5 bg-white">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-12 sm:py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">{why?.title ?? "Why Choose Us"}</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(why?.items ?? []).map((w, i) => (
              <div key={i} className="rounded-xl border p-5 bg-white">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to book a session?</h2>
          <p className="mt-2 text-gray-600">
            Message us on WhatsApp to check availability and rates.
          </p>
          <a
            href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
            className="mt-6 inline-flex px-6 py-3 rounded-md bg-black text-white text-sm hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {site.brand}. Built with ❤️ by{" "}
          <a
            href="https://tech24.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Tech24 Agency
          </a>
          .
        </div>
      </footer>
    </>
  );
}
