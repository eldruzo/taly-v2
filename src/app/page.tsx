"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

export default function HomePage() {
  const newArrivals = products.slice(0, 4);

  return (
    <StorefrontLayout>

      {/* ── Hero: split-screen editorial ─────────────────────────── */}
      <section className="w-full flex flex-col md:flex-row md:h-screen md:min-h-[600px] overflow-hidden">

        {/* Image — top on mobile, left on desktop */}
        <div className="flex-shrink-0 h-[52vh] md:h-full md:w-[55%] overflow-hidden">
          <ImagePlaceholder className="w-full h-full" index={0} src="/images/hero-abstract.jpg" alt="Taly new season" />
        </div>

        {/* Text panel */}
        <div className="flex-1 bg-[#0C0C0C] flex flex-col justify-between px-8 md:px-12 lg:px-16 py-10 md:py-14">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A]"
          >
            New Season · 2025
          </motion.p>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading leading-[0.85] tracking-tight text-[#EDE9E4] mb-5"
              style={{ fontSize: "clamp(4.5rem, 9vw, 8.5rem)" }}
            >
              TALY
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-xl md:text-2xl font-light italic text-[#7A7570] leading-relaxed mb-10 max-w-[22ch]"
            >
              For your authentic self.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-[#EDE9E4] group"
              >
                <span className="border-b border-[#EDE9E4] pb-0.5 group-hover:border-[#C4956A] group-hover:text-[#C4956A] transition-colors duration-200">
                  Explore Collection
                </span>
                <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-5 flex-wrap"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A7570]">Shop</span>
            <div className="flex gap-5">
              {[
                { label: "Women", href: "/products?category=Women" },
                { label: "Men", href: "/products?category=Men" },
                { label: "Accessories", href: "/products?category=Accessories" },
              ].map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="text-sm text-[#EDE9E4] hover:text-[#C4956A] transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── New Arrivals ──────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-2">Just In</p>
            <h2 className="font-heading text-4xl font-medium text-[#1A1A1A]">New Arrivals</h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:block text-sm text-[#1A1A1A] border-b border-[#D4CFC9] pb-0.5 hover:border-[#C4956A] hover:text-[#C4956A] transition-colors"
          >
            View All
          </Link>
        </motion.div>

        {/* Desktop: featured left + 3 compact right */}
        <div className="hidden md:grid md:grid-cols-[1.5fr_1fr] gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductCard product={newArrivals[0]} index={0} imageAspect="aspect-[3/4]" />
          </motion.div>
          <div className="flex flex-col gap-5">
            {newArrivals.slice(1).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={product} index={i + 1} imageAspect="aspect-[16/9]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto -mx-4 px-4 pb-2 snap-x snap-mandatory">
          {newArrivals.map((product, i) => (
            <div key={product.id} className="min-w-[200px] flex-shrink-0 snap-start">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="/products" className="text-sm text-[#C4956A] border-b border-[#C4956A] pb-0.5">
            View All
          </Link>
        </div>
      </section>

      {/* ── Our Story: full-bleed ─────────────────────────────────── */}
      <section className="bg-[#111111] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImagePlaceholder className="w-full h-[55vw] md:h-full min-h-[380px]" index={1} src="/images/ig-14.jpg" alt="Taly story" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[#111111]"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-6">Our Story</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-[#EDE9E4] leading-[1.05] mb-8">
              Born in the<br />archipelago.
            </h2>
            <p className="text-[#7A7570] leading-relaxed mb-4 max-w-[34ch]">
              Born in Bogor, Taly is a self-manufactured clothing brand built around one idea — fashion that honours who you are.
            </p>
            <p className="text-[#7A7570] leading-relaxed mb-10 max-w-[34ch]">
              Every piece is crafted in-house with Indonesian textiles: batik, tenun, and natural weaves shaped into modern, unhurried silhouettes.
            </p>
            <Link
              href="/about"
              className="self-start text-sm text-[#EDE9E4] border-b border-[#EDE9E4] pb-0.5 hover:border-[#C4956A] hover:text-[#C4956A] transition-colors tracking-wide group inline-flex items-center gap-2"
            >
              Read Our Story
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── Instagram Strip ──────────────────────────────────────── */}
      <section className="py-16 bg-[#0C0C0C]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">Community</p>
          <h2 className="font-heading text-3xl font-medium text-[#EDE9E4]">@weartaly.id</h2>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0.5">
          {[
            { src: "/images/ig-14.jpg", alt: "Taly women editorial" },
            { src: "/images/ig-15.jpg", alt: "Taly men editorial" },
            { src: "/images/ig-18.jpg", alt: "Taly women editorial" },
            { src: "/images/ig-03.jpg", alt: "Taly men editorial" },
            { src: "/images/ig-10.jpg", alt: "Taly women editorial" },
            { src: "/images/ig-01.jpg", alt: "Taly accessories editorial" },
          ].map((photo, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/weartaly.id"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <ImagePlaceholder className="w-full h-full" index={i} src={photo.src} alt={photo.alt} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <svg className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Shop by Category: asymmetric grid ────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-2">Browse</p>
          <h2 className="font-heading text-4xl font-medium text-[#1A1A1A]">Shop by Category</h2>
        </motion.div>

        {/* Women spans full height on the left; Men + Accessories stack right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 sm:h-[72vh] sm:min-h-[500px]">
          {[
            { label: "Women", href: "/products?category=Women", index: 0, span: true, image: "/images/ig-10.jpg" },
            { label: "Men", href: "/products?category=Men", index: 1, span: false, image: "/images/ig-15.jpg" },
            { label: "Accessories", href: "/products?category=Accessories", index: 0, span: false, image: "/images/ig-01.jpg" },
          ].map((cat, i) => (
            <motion.div
              key={cat.label}
              className={cat.span ? "sm:row-span-2 min-h-[280px]" : "min-h-[200px]"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={cat.href} className="relative group overflow-hidden block w-full h-full">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ImagePlaceholder className="w-full h-full" index={cat.index} src={cat.image} alt={cat.label} />
                </motion.div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/55 transition-colors duration-300 flex items-end pb-6 px-6">
                  <div>
                    <span className="font-heading text-white text-2xl font-medium tracking-widest block drop-shadow-sm">
                      {cat.label}
                    </span>
                    <span className="text-white/0 group-hover:text-white/75 text-xs tracking-[0.15em] uppercase mt-1 block transition-colors duration-200">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </StorefrontLayout>
  );
}
