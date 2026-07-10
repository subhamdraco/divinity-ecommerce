"use client";

import Link from "next/link";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { segments } from "@/lib/segments";

export function Footer() {
  return (
    <footer id="contact" className="mesh-navy-subtle relative overflow-hidden text-hub-navy">
      <div className="gold-line" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <RevealStagger className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <RevealItem className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-hub-gold to-[#dbb84a]">
                <span className="font-display text-sm font-bold text-white">D</span>
              </div>
              <p className="font-display text-xl font-semibold">
                DIVINITY <span className="text-hub-gold">IMPEX</span>
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-hub-slate">
              Global manufacturing partner crafting high-quality personal care,
              healthcare, and FMCG products for consumers worldwide.
            </p>
            <p className="mt-4 font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold/80">
              Global Operations · Quality First · Since 1980s
            </p>
          </RevealItem>

          <RevealItem className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">Segments</h3>
            <ul className="mt-4 space-y-2.5">
              {segments.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="text-sm text-hub-slate transition-colors hover:text-hub-navy">{s.name}</Link>
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
                <li key={l.href}><Link href={l.href} className="text-sm text-hub-slate hover:text-hub-navy">{l.label}</Link></li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className="lg:col-span-3">
            <h3 className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">Contact</h3>
            <div className="mt-4 glass-card-dark rounded-2xl p-5">
              <p className="text-sm text-hub-slate">UAE — Strategic Headquarters</p>
              <a href="mailto:info@divinityimpex.com" className="mt-2 block text-sm font-semibold text-hub-gold hover:text-hub-navy">
                info@divinityimpex.com
              </a>
            </div>
          </RevealItem>
        </RevealStagger>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-hub-border pt-8 sm:flex-row">
          <p className="text-xs text-hub-slate">© {new Date().getFullYear()} Divinity Impex. All rights reserved.</p>
          <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-hub-gold/70">
            Let&apos;s Build the Future of FMCG Together
          </p>
        </div>
      </div>
    </footer>
  );
}
