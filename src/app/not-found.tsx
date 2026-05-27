"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F2EE] flex flex-col items-center justify-center text-center px-4">

      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="font-heading text-[#C4956A] leading-none"
        style={{
          fontSize: "clamp(6rem, 20vw, 12rem)",
          fontWeight: 300,
        }}
      >
        404
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-3">Lost in the archipelago</p>
        <h1 className="font-heading text-3xl md:text-4xl font-medium text-[#1A1A1A] mb-4">
          Halaman tidak ditemukan
        </h1>
        <p className="text-[#6B6560] text-sm mb-10 max-w-sm">
          Halaman yang kamu cari tidak ada atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#C4956A] text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-[#b8845a] transition-colors duration-200 cursor-pointer group"
        >
          <span>Kembali ke Beranda</span>
          <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </motion.div>

    </div>
  );
}
