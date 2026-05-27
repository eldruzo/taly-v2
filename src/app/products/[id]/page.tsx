"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductCard from "@/components/ProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

const relatedIds = ["TLY-004", "TLY-007", "TLY-010", "TLY-012"];

export default function ProductDetailPage() {
  const product = products[0];
  const relatedProducts = products.filter((p) => relatedIds.includes(p.id));

  return (
    <StorefrontLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs text-[#6B6560] mb-8"
        >
          <Link href="/" className="hover:text-[#C4956A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#C4956A] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1A1A1A]">{product.name}</span>
        </motion.nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <div className="overflow-hidden">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <ImagePlaceholder className="w-full aspect-[3/4]" index={0} src={product.image} alt={product.name} />
              </motion.div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[product.image, "/images/ig-18.jpg", "/images/ig-13.jpg", "/images/ig-14.jpg"].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#C4956A] transition-colors"
                >
                  <ImagePlaceholder className="w-full aspect-square" index={i} src={src} alt={product.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-2">{product.category}</p>
            <h1 className="font-heading text-4xl md:text-5xl font-medium text-[#1A1A1A] leading-[1.05] mb-3">
              {product.name}
            </h1>
            <p className="text-2xl text-[#1A1A1A] font-medium mb-6">{formatIDR(product.price)}</p>

            <p className="text-sm text-[#6B6560] leading-relaxed mb-5">
              A flowing midi dress crafted from 100% washed linen. Effortlessly elegant and breathable, perfect for tropical days. Available in natural cream and sage green.
            </p>

            <button className="text-xs text-[#C4956A] border-b border-[#C4956A] pb-0.5 hover:opacity-70 transition-opacity cursor-pointer mb-6 block">
              Size Guide
            </button>

            {/* Size */}
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6B6560] mb-3">Size</p>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`w-11 h-11 text-sm border transition-colors duration-200 cursor-pointer ${
                      size === "M"
                        ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                        : "border-[#D4CFC9] text-[#1A1A1A] hover:border-[#1A1A1A]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6B6560] mb-3">Quantity</p>
              <div className="flex items-center border border-[#D4CFC9] w-fit">
                <button className="w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#E8E4DF] transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
                <span className="w-12 text-center text-sm">1</span>
                <button className="w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#E8E4DF] transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-6">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="w-full bg-[#C4956A] text-white py-3.5 text-sm font-medium tracking-wide hover:bg-[#b8845a] transition-colors duration-200 cursor-pointer"
              >
                Add to Cart
              </motion.button>
              <button className="w-full border border-[#C4956A] text-[#C4956A] py-3.5 text-sm font-medium tracking-wide hover:bg-[#C4956A] hover:text-white transition-colors duration-200 cursor-pointer">
                Add to Wishlist
              </button>
            </div>

            <p className="text-xs text-[#6B6560] flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              Free shipping above Rp 500.000
            </p>

            {/* Accordion */}
            <div className="mt-8">
              <Accordion>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm font-medium text-[#1A1A1A] cursor-pointer">Details</AccordionTrigger>
                  <AccordionContent className="text-sm text-[#6B6560]">
                    100% washed linen. Midi length. Relaxed silhouette. Side pockets. Machine washable cold.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger className="text-sm font-medium text-[#1A1A1A] cursor-pointer">Care</AccordionTrigger>
                  <AccordionContent className="text-sm text-[#6B6560]">
                    Machine wash cold with similar colors. Do not bleach. Tumble dry low. Warm iron if needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-sm font-medium text-[#1A1A1A] cursor-pointer">Shipping &amp; Returns</AccordionTrigger>
                  <AccordionContent className="text-sm text-[#6B6560]">
                    Free shipping for orders above Rp 500.000. Estimated delivery 3–5 business days. Returns accepted within 14 days of delivery.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>

        {/* You Might Also Like */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-12 border-t border-[#E8E4DF]"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-2">Explore More</p>
          <h2 className="font-heading text-3xl font-medium text-[#1A1A1A] mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={p} index={i} />
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </StorefrontLayout>
  );
}
