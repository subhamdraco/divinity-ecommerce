"use client";

import Link from "next/link";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { DivinityLogo } from "@/components/ui/DivinityLogo";
import { segments } from "@/lib/segments";

export function Footer() {
  return (
    <footer id="contact" className="mesh-navy-subtle relative overflow-hidden text-stone-200">
      <div className="gold-line" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <RevealStagger className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <RevealItem className="lg:col-span-4">
            <DivinityLogo size="lg" showLink={false} theme="dark" />
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Global manufacturing partner crafting high-quality personal care,
              healthcare, and FMCG products for consumers worldwide.
            </p>
            <p className="mt-4 font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold/90">
              Global Operations · Quality First · Since 1980s
            </p>
          </RevealItem>

          <RevealItem className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">Segments</h3>
            <ul className="mt-4 space-y-2.5">
              {segments.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="text-sm text-stone-400 transition-colors hover:text-white">{s.name}</Link>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className="lg:col-span-2">
            <h3 className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/#brands", label: "Trusted Brands" },
                { href: "/#global-presence", label: "Global Presence" },
                { href: "/#manufacturing", label: "Manufacturing" },
                { href: "/#leadership", label: "Leadership" },
              ].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-stone-400 hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className="lg:col-span-3">
            <h3 className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">Contact</h3>
            <div className="chrome-dark-surface mt-4 rounded-2xl p-5">
              <p className="text-sm text-stone-400">UAE — Strategic Headquarters</p>
              <a href="mailto:info@divinityimpex.com" className="mt-2 block text-sm font-semibold text-hub-gold hover:text-hub-gold-light">
                info@divinityimpex.com
              </a>
            </div>
          </RevealItem>
        </RevealStagger>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-stone-500">© {new Date().getFullYear()} Divinity Impex. All rights reserved.</p>
          <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-hub-gold/80">
            Let&apos;s Build the Future of FMCG Together
          </p>
        </div>
      </div>
    </footer>
  );
}
