"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { DivinityLogo } from "@/components/ui/DivinityLogo";
import { segments } from "@/lib/segments";
import { springBouncy } from "@/lib/motion";

const navLinks = [
  { href: "/#brands", label: "Brands" },
  { href: "/#global-presence", label: "Global" },
  { href: "/#manufacturing", label: "Process" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHub = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.header
      className="chrome-dark sticky top-0 z-50 overflow-visible border-b shadow-lg shadow-black/20 backdrop-blur-xl"
      initial={reduced ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="h-0.5 bg-gradient-to-r from-transparent via-hub-gold to-transparent"
        initial={reduced ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        aria-hidden
      />
      <nav className="mx-auto flex min-h-[5.5rem] max-w-7xl items-center justify-between px-4 py-4 sm:min-h-[5.75rem] sm:px-6 sm:py-[1.125rem] lg:px-8" aria-label="Main navigation">
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <DivinityLogo size="lg" theme="dark" />
        </motion.div>

        <div className="hidden items-center gap-0.5 lg:flex">
          <NavLink href="/" active={isHub}>Home</NavLink>
          <div className="relative">
            <button
              type="button"
              onClick={() => setSegmentsOpen(!segmentsOpen)}
              onBlur={() => setTimeout(() => setSegmentsOpen(false), 150)}
              className="flex min-h-10 items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-stone-300 hover:bg-white/8 hover:text-white"
              aria-expanded={segmentsOpen}
            >
              Segments
              <motion.span animate={{ rotate: segmentsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {segmentsOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#1c1917] p-2 shadow-2xl shadow-black/40"
                  initial={{ opacity: 0, y: -12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={springBouncy}
                >
                  {segments.map((segment, i) => (
                    <motion.div key={segment.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link href={segment.href} className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-white/6">
                        <div className="h-8 w-1 rounded-full" style={{ backgroundColor: segment.accent }} />
                        <div>
                          <p className="text-sm font-semibold text-white">{segment.name}</p>
                          <p className="text-xs text-stone-400">{segment.tagline}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </div>

        <button
          type="button"
          className="flex min-h-10 min-w-10 items-center justify-center rounded-lg text-stone-200 hover:bg-white/8 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            <motion.span key={mobileOpen ? "x" : "m"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="border-t border-white/10 bg-[#171412] px-4 py-4 lg:hidden" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <div className="flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="min-h-10 rounded-lg px-4 py-2.5 text-sm font-medium text-white">Home</Link>
              {segments.map((s, i) => (
                <motion.div key={s.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={s.href} onClick={() => setMobileOpen(false)} className="block min-h-10 rounded-lg px-4 py-2.5 text-sm text-stone-400">{s.name}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
        active ? "bg-hub-gold/15 text-hub-gold" : "text-stone-300 hover:bg-white/8 hover:text-white"
      }`}
    >
      {children}
      {!active && (
        <motion.span
          className="absolute bottom-1 left-3.5 right-3.5 h-px origin-left bg-hub-gold"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.25 }}
        />
      )}
    </Link>
  );
}
