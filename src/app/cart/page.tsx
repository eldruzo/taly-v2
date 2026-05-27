"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { formatIDR } from "@/lib/utils";

const cartItems = [
  { id: "TLY-001", name: "Linen Midi Dress", size: "S", qty: 1, price: 450000 },
  { id: "TLY-003", name: "Woven Tote Bag", size: null, qty: 1, price: 275000 },
  { id: "TLY-006", name: "Raffia Sun Hat", size: null, qty: 1, price: 195000 },
];
const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

export default function CartPage() {
  return (
    <StorefrontLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">{cartItems.length} items</p>
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">Shopping Cart</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Items */}
          <div className="lg:col-span-2 space-y-0">
            {cartItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 py-6 border-b border-[#E8E4DF]"
              >
                <div className="w-24 h-28 flex-shrink-0 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}>
                    <ImagePlaceholder className="w-full h-full" index={i} />
                  </motion.div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-[#1A1A1A]">{item.name}</h3>
                      {item.size && <p className="text-xs text-[#6B6560] mt-0.5">Size: {item.size}</p>}
                    </div>
                    <button className="p-1.5 text-[#D4CFC9] hover:text-[var(--color-destructive-fg)] transition-colors cursor-pointer ml-4 flex-shrink-0" aria-label="Remove item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[#D4CFC9]">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-[#E8E4DF] transition-colors cursor-pointer text-[#1A1A1A] text-lg leading-none">−</button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-[#E8E4DF] transition-colors cursor-pointer text-[#1A1A1A] text-lg leading-none">+</button>
                    </div>
                    <p className="text-sm font-medium text-[#1A1A1A]">{formatIDR(item.price * item.qty)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-[#D4CFC9] p-6 sticky top-24">
              <h2 className="font-heading text-xl font-medium text-[#1A1A1A] mb-5">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#6B6560]">
                  <span>Subtotal</span>
                  <span>{formatIDR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#6B6560]">
                  <span>Shipping</span>
                  <span className="text-[var(--color-positive)]">Free</span>
                </div>
                <div className="border-t border-[#E8E4DF] pt-3 flex justify-between font-semibold text-[#1A1A1A]">
                  <span>Total</span>
                  <span>{formatIDR(subtotal)}</span>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
                <Link
                  href="/checkout"
                  className="block w-full bg-[#C4956A] text-white text-center py-3.5 text-sm font-medium tracking-wide hover:bg-[#b8845a] transition-colors duration-200 cursor-pointer mt-6"
                >
                  Proceed to Checkout
                </Link>
              </motion.div>
              <Link
                href="/products"
                className="block text-center text-xs text-[#6B6560] hover:text-[#C4956A] mt-3 cursor-pointer transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </StorefrontLayout>
  );
}
