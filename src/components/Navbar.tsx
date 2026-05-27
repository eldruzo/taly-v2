"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/products", label: "Shop" },
  { href: "/products?category=Women", label: "Women" },
  { href: "/products?category=Men", label: "Men" },
  { href: "/products?category=Accessories", label: "Accessories" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solidBg = scrolled || !isHome;
  // Transparent at home-top shows the cream page bg → use dark text so it's readable
  const textColor = solidBg ? "#EDE9E4" : "#1A1A1A";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Announcement bar — collapses on scroll */}
        <motion.div
          animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden bg-[#0C0C0C] border-b border-[#2A2A2A]"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.22em] text-[#7A7570] py-2.5 px-4">
            Free shipping on orders above{" "}
            <span className="text-[#C4956A]">Rp 500.000</span>
          </p>
        </motion.div>

        {/*
          Two-layer approach:
          - Outer motion.header  → full-viewport-width background (for the non-capsule state)
          - Inner motion.div     → shrinks into a floating pill when scrolled
        */}
        <motion.header
          className="border-b"
          animate={{
            backgroundColor: (!scrolled && solidBg) ? "#0C0C0C" : "rgba(12,12,12,0)",
            borderBottomColor: (!scrolled && solidBg) ? "#2A2A2A" : "rgba(42,42,42,0)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Floating capsule — only styled when scrolled */}
          <motion.div
            animate={scrolled ? {
              backgroundColor: "#0C0C0C",
              borderRadius: "9999px",
              marginTop: "10px",
              marginBottom: "6px",
              paddingLeft: "24px",
              paddingRight: "24px",
              boxShadow: "inset 0 0 0 1px #2A2A2A, 0 8px 32px rgba(0,0,0,0.45)",
            } : {
              backgroundColor: "rgba(0,0,0,0)",
              borderRadius: "0px",
              marginTop: "0px",
              marginBottom: "0px",
              paddingLeft: "0px",
              paddingRight: "0px",
              boxShadow: "none",
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between h-[64px]">

              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <motion.span
                  animate={{ color: textColor }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-heading text-[1.65rem] font-light tracking-[0.55em]"
                >
                  TALY
                </motion.span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    animate={{ color: textColor }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className="text-[11px] uppercase tracking-[0.18em] hover:text-[#C4956A] transition-colors duration-200 py-1 block relative group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 h-px w-full bg-[#C4956A]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        style={{ transformOrigin: "left" }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Icons */}
              <motion.div
                animate={{ color: textColor }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
                  <Link href="/search" className="block hover:text-[#C4956A] transition-colors duration-200" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }} className="hidden sm:block">
                  <Link href="/wishlist" className="block hover:text-[#C4956A] transition-colors duration-200" aria-label="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }} className="hidden sm:block">
                  <Link href="/account" className="block hover:text-[#C4956A] transition-colors duration-200" aria-label="My Account">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }} className="relative">
                  <Link href="/cart" className="block hover:text-[#C4956A] transition-colors duration-200" aria-label="Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    <span className="absolute -top-1.5 -right-1.5 bg-[#C4956A] text-white text-[9px] w-4 h-4 flex items-center justify-center font-semibold tabular-nums">
                      2
                    </span>
                  </Link>
                </motion.div>

                <button
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden cursor-pointer p-1 -mr-1"
                  aria-label="Open menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="15" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </button>
              </motion.div>

            </div>
          </motion.div>
        </div>
        </motion.header>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#0C0C0C] flex flex-col"
          >
            <div className="flex items-center justify-between h-[64px] px-4 sm:px-6 border-b border-[#2A2A2A] flex-shrink-0">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <span className="font-heading text-[1.65rem] font-light tracking-[0.55em] text-[#EDE9E4]">TALY</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-[#EDE9E4] cursor-pointer p-1 -mr-1" aria-label="Close menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <motion.nav
              className="flex flex-col flex-1 justify-center px-6 sm:px-10"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-[#2A2A2A]"
                >
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="font-heading text-4xl font-light text-[#EDE9E4] hover:text-[#C4956A] transition-colors py-4 block">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex items-center gap-6 px-6 sm:px-10 py-8 border-t border-[#2A2A2A] flex-shrink-0"
            >
              <Link href="/account" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-sm text-[#7A7570] hover:text-[#C4956A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                My Account
              </Link>
              <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-sm text-[#7A7570] hover:text-[#C4956A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Wishlist
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
