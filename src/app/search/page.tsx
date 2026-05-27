"use client";

import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

const searchResults = products.filter((p) =>
  ["TLY-001", "TLY-004", "TLY-005", "TLY-007"].includes(p.id)
);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function SearchPage() {
  return (
    <StorefrontLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mb-10"
        >
          <div className="relative">
            <input
              type="text"
              defaultValue="linen"
              className="w-full border border-[#D4CFC9] bg-white px-4 py-3.5 pr-12 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] transition-colors"
              placeholder="Search products..."
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B6560] hover:text-[#C4956A] cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">Results</p>
          <h1 className="font-heading text-3xl font-medium text-[#1A1A1A]">
            {searchResults.length} results for &quot;linen&quot;
          </h1>
          <p className="text-sm text-[#6B6560] mt-1">Showing products matching your search</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {searchResults.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {searchResults.length === 0 && (
          <div className="text-center py-24">
            <p className="font-heading text-2xl text-[#D4CFC9] mb-3">No results found</p>
            <p className="text-sm text-[#6B6560]">Try a different search term</p>
          </div>
        )}

      </div>
    </StorefrontLayout>
  );
}
