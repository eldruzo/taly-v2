"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { formatIDR } from "@/lib/utils";
import { provinces } from "@/lib/data";

const cartItems = [
  { name: "Linen Midi Dress", size: "S", qty: 1, price: 450000 },
  { name: "Woven Tote Bag", size: null, qty: 1, price: 275000 },
  { name: "Raffia Sun Hat", size: null, qty: 1, price: 195000 },
];
const subtotal = 920000;

const steps = [
  { num: 1, label: "Shipping" },
  { num: 2, label: "Payment" },
  { num: 3, label: "Confirmation" },
];

export default function CheckoutPage() {
  return (
    <StorefrontLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">Secure Checkout</p>
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">Checkout</h1>
        </motion.div>

        {/* Step indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center mb-12"
        >
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 flex items-center justify-center text-xs font-semibold transition-colors ${
                  step.num === 1
                    ? "bg-[#C4956A] text-white"
                    : "bg-[#E8E4DF] text-[#6B6560]"
                }`}>
                  {step.num}
                </div>
                <span className={`text-sm ${step.num === 1 ? "font-semibold text-[#1A1A1A]" : "text-[#6B6560]"}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && <div className="w-10 sm:w-16 h-px bg-[#D4CFC9] mx-4" />}
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-xl font-medium text-[#1A1A1A] mb-6">Shipping Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Full Name</label>
                <input type="text" placeholder="Nama Lengkap" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Phone</label>
                  <input type="tel" placeholder="08xx-xxxx-xxxx" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Full Address</label>
                <textarea rows={3} placeholder="Jalan, nomor, RT/RW..." className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white resize-none transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">City</label>
                  <input type="text" placeholder="Kota" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Postal Code</label>
                  <input type="text" placeholder="12345" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Province</label>
                <div className="relative">
                  <select className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white cursor-pointer appearance-none transition-colors">
                    <option value="">Pilih Provinsi</option>
                    {provinces.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6560] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
                <Link
                  href="/checkout/success"
                  className="block w-full bg-[#C4956A] text-white text-center py-3.5 text-sm font-medium tracking-wide hover:bg-[#b8845a] transition-colors duration-200 cursor-pointer mt-2"
                >
                  Continue to Payment
                </Link>
              </motion.div>
            </form>
          </motion.div>

          {/* Order summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-[#D4CFC9] p-6 sticky top-24">
              <h2 className="font-heading text-xl font-medium text-[#1A1A1A] mb-5">Order Summary</h2>
              <div className="space-y-3 mb-5">
                {cartItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ImagePlaceholder className="w-12 h-12 flex-shrink-0" index={i} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#1A1A1A] truncate">{item.name}</p>
                      {item.size && <p className="text-xs text-[#6B6560]">Size: {item.size}</p>}
                    </div>
                    <p className="text-sm text-[#1A1A1A] font-medium flex-shrink-0">{formatIDR(item.price)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E8E4DF] pt-4 space-y-2 text-sm">
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
            </div>
          </motion.div>

        </div>
      </div>
    </StorefrontLayout>
  );
}
