"use client";

import Link from "next/link";

export function generateStaticParams() {
  return [
    { id: "ORD-001" },
    { id: "ORD-002" },
    { id: "ORD-003" },
    { id: "ORD-004" },
    { id: "ORD-005" },
  ];
}

import { motion } from "framer-motion";
import AccountLayout from "@/components/AccountLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import StatusBadge from "@/components/StatusBadge";
import { formatIDR } from "@/lib/utils";

const orderItems = [
  { name: "Linen Midi Dress", size: "S", qty: 1, price: 450000 },
  { name: "Gauze Wrap Blouse", size: "M", qty: 1, price: 320000 },
];
const subtotal = 770000;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function OrderDetailPage() {
  return (
    <AccountLayout>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Link href="/account/orders" className="text-[10px] uppercase tracking-[0.25em] text-[#6B6560] hover:text-[#C4956A] transition-colors cursor-pointer mb-2 block">
            ← Back to Orders
          </Link>
          <div className="flex items-center gap-3 mt-1">
            <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">#ORD-001</h1>
            <StatusBadge status="Paid" />
          </div>
          <p className="text-sm text-[#6B6560] mt-1.5">12 Mei 2025</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {/* Items */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#D4CFC9]"
          >
            <div className="px-5 py-4 border-b border-[#E8E4DF]">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A] mb-0.5">Contents</p>
              <h2 className="font-heading text-lg font-medium text-[#1A1A1A]">Order Items</h2>
            </div>
            <div className="p-5 space-y-4">
              {orderItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="overflow-hidden flex-shrink-0">
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }}>
                      <ImagePlaceholder className="w-16 h-16" index={i} />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1A1A1A]">{item.name}</p>
                    <p className="text-xs text-[#6B6560] mt-0.5">Size: {item.size} · Qty: {item.qty}</p>
                  </div>
                  <p className="text-sm font-medium text-[#1A1A1A]">{formatIDR(item.price)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#E8E4DF] px-5 py-4 space-y-2 text-sm">
              <div className="flex justify-between text-[#6B6560]">
                <span>Subtotal</span>
                <span>{formatIDR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#6B6560]">
                <span>Shipping</span>
                <span className="text-[var(--color-positive)]">Free</span>
              </div>
              <div className="flex justify-between font-semibold text-[#1A1A1A] pt-2 border-t border-[#E8E4DF]">
                <span>Total</span>
                <span>{formatIDR(subtotal)}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Shipping */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#D4CFC9] p-5"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A] mb-0.5">Delivery</p>
              <h2 className="font-heading text-lg font-medium text-[#1A1A1A] mb-3">Shipping Address</h2>
              <p className="text-sm font-medium text-[#1A1A1A]">Siti Rahayu</p>
              <p className="text-sm text-[#6B6560] mt-0.5">Jl. Kebon Jeruk No. 12, Jakarta Barat</p>
              <p className="text-sm text-[#6B6560]">DKI Jakarta 11530</p>
              <p className="text-sm text-[#6B6560] mt-1">0812-3456-7890</p>
            </motion.div>

            {/* Payment */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#D4CFC9] p-5"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A] mb-0.5">Billing</p>
              <h2 className="font-heading text-lg font-medium text-[#1A1A1A] mb-3">Payment</h2>
              <p className="text-sm text-[#6B6560]">Transfer Bank BCA</p>
              <p className="text-sm text-[var(--color-positive)] font-medium mt-2">Lunas</p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm text-[#6B6560]"
          >
            Ada pertanyaan?{" "}
            <Link href="/about" className="text-[#C4956A] hover:underline cursor-pointer">
              Hubungi kami
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </AccountLayout>
  );
}
