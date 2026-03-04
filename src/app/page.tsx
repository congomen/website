﻿import Image from "next/image";
import { site } from "@/site.config";

export default function Page() {
  const hero = site.hero;
  const mission = site.sections?.find((s) => s.id === "mission");

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-4">NEW RELEASE</span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">{hero.title}</h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={hero.ctaPrimary.href} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-red-600 transition-all">
                {hero.ctaPrimary.label}
              </a>
              <a href={hero.ctaSecondary.href} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-gray-300 font-bold hover:bg-gray-50 transition-all">
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image src={hero.image} alt="Tears of Congo" fill className="object-cover rounded-2xl shadow-2xl" priority />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">{mission?.title}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {mission?.items.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-red-500">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}