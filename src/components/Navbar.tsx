"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AGENDAR_HREF, NAV_LINKS } from "../constants/links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ativo = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-cream/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* LOGO */}
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-medium tracking-tight text-navy">
            Isabel <em className="accent">Abreu</em>
          </span>
          <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
            Economista
          </span>
        </Link>

        {/* LINKS */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                aria-current={ativo(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-navy ${
                  ativo(link.href) ? "text-navy underline decoration-gold decoration-2 underline-offset-8" : "text-warm-gray"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={AGENDAR_HREF}
            className="hidden rounded-full bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-terracotta sm:inline-block"
          >
            Agendar conversa
          </Link>

          {/* MENU MOBILE */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {open ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 px-6 pb-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={ativo(link.href) ? "page" : undefined}
                className={`block border-b border-line py-3 font-serif text-xl ${
                  ativo(link.href) ? "italic text-terracotta" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href={AGENDAR_HREF}
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-cream"
            >
              Agendar conversa
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
