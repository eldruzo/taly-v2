"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import { formatIDR } from "@/lib/utils";

const orderItems = [
  { name: "Linen Midi Dress", size: "S", qty: 1, price: 450000 },
  { name: "Woven Tote Bag", size: null, qty: 1, price: 275000 },
  { name: "Raffia Sun Hat", size: null, qty: 1, price: 195000 },
];
const total = 920000;

export default function OrderSuccessPage() {
  return (
    <StorefrontLayout>
      <div className="max-w-lg mx-auto px-4 py-20 text-center">

        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 rounded-full border-2 border-[#C4956A] flex items-center justify-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C4956A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <motion.polyline points="20 6 9 17 4 12" />
            </motion.svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-3">Pesanan Diterima</p>
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A] mb-2">
            Terima kasih, Siti!
          </h1>
          <p className="text-[#6B6560] mb-1">Order #ORD-006 berhasil dibuat.</p>
          <p className="text-sm text-[#6B6560] mb-10">Estimasi pengiriman: 3–5 hari kerja</p>
        </motion.div>

        {/* Order summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#D4CFC9] text-left p-6 mb-8"
        >
          <h2 className="font-heading text-lg font-medium text-[#1A1A1A] mb-4">
            Ringkasan Pesanan
          </h2>
          <div className="space-y-3 text-sm text-[#6B6560] mb-4">
            {orderItems.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>{item.name}{item.size ? ` (${item.size})` : ""} × {item.qty}</span>
                <span>{formatIDR(item.price)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[#E8E4DF] pt-3 flex justify-between text-sm font-semibold text-[#1A1A1A]">
            <span>Total</span>
            <span>{formatIDR(total)}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/account/orders/ORD-006"
            className="border border-[#C4956A] text-[#C4956A] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#C4956A] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Track Order
          </Link>
          <Link
            href="/products"
            className="bg-[#C4956A] text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#b8845a] transition-colors duration-200 cursor-pointer"
          >
            Continue Shopping
          </Link>
        </motion.div>

      </div>
    </StorefrontLayout>
  );
}
