"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ProductCard from "@/components/ProductCard";
import PriceRangeSlider from "@/components/PriceRangeSlider";
import { products } from "@/lib/data";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductsPage() {
  return (
    <StorefrontLayout>

      {/* Page header */}
      <div className="border-b border-[#D4CFC9] bg-[#F5F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex items-center gap-2 text-xs text-[#6B6560] mb-3">
              <Link href="/" className="hover:text-[#C4956A] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#1A1A1A]">Shop</span>
            </nav>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">The Collection</p>
            <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">Shop</h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="border border-[#D4CFC9] bg-[#F5F2EE] p-5 space-y-6">
              <div>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6B6560] mb-3">Price Range</h3>
                <PriceRangeSlider />
              </div>
              <div className="border-t border-[#E8E4DF] pt-5">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6B6560] mb-3">Size</h3>
                <div className="space-y-2.5">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <label key={size} className="flex items-center gap-2.5 cursor-pointer group">
                      <input type="checkbox" className="accent-[#C4956A]" readOnly />
                      <span className="text-sm text-[#1A1A1A] group-hover:text-[#C4956A] transition-colors">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs text-[#6B6560] mb-2">{products.length} products</p>
                <div className="flex gap-2 flex-wrap">
                  {["All", "Women", "Men", "Accessories"].map((tab) => (
                    <button
                      key={tab}
                      className={`text-xs px-3 py-1.5 border transition-colors duration-200 cursor-pointer ${
                        tab === "All"
                          ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                          : "border-[#D4CFC9] text-[#6B6560] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative">
                <select className="text-sm border border-[#D4CFC9] bg-white pl-3 pr-9 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] appearance-none cursor-pointer">
                  <option>Sort: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B6560] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>

            {/* Grid with staggered reveal */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 mt-12">
              {[1, 2, 3, "…", 5].map((page, i) => (
                <button
                  key={i}
                  className={`w-9 h-9 text-sm border transition-colors duration-200 cursor-pointer ${
                    page === 1
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "border-[#D4CFC9] text-[#6B6560] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StorefrontLayout>
  );
}
