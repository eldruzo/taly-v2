"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { products } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

const wishlistItems = products.filter((p) =>
  ["TLY-001", "TLY-007", "TLY-010"].includes(p.id)
);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WishlistPage() {
  return (
    <StorefrontLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">{wishlistItems.length} saved items</p>
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">My Wishlist</h1>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {wishlistItems.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#D4CFC9] group"
            >
              <div className="relative overflow-hidden">
                <Link href={`/products/${product.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ImagePlaceholder className="w-full aspect-[3/4]" index={i} />
                  </motion.div>
                </Link>
                <button
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-white border border-[#D4CFC9] cursor-pointer hover:border-[#C4956A] transition-colors"
                  aria-label="Remove from wishlist"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#C4956A" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-sm font-medium text-[#1A1A1A] hover:text-[#C4956A] transition-colors cursor-pointer">{product.name}</h3>
                </Link>
                <p className="text-sm font-medium text-[#1A1A1A] mt-1">{formatIDR(product.price)}</p>
                <div className="flex gap-2 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="flex-1 bg-[#C4956A] text-white py-2.5 text-xs font-medium tracking-wide hover:bg-[#b8845a] transition-colors duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </motion.button>
                  <button className="p-2 text-[#6B6560] hover:text-[var(--color-destructive-fg)] transition-colors cursor-pointer border border-[#D4CFC9] hover:border-[var(--color-destructive-bg)]" aria-label="Remove from wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            href="/products"
            className="text-sm text-[#1A1A1A] border-b border-[#D4CFC9] pb-0.5 hover:border-[#C4956A] hover:text-[#C4956A] transition-colors group inline-flex items-center gap-2"
          >
            Continue Shopping
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>

      </div>
    </StorefrontLayout>
  );
}
