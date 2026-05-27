"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AccountLayout from "@/components/AccountLayout";
import StatusBadge from "@/components/StatusBadge";
import { orders } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AccountPage() {
  const recentOrders = orders.slice(0, 3);

  return (
    <AccountLayout>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">Welcome back</p>
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">Halo, Siti</h1>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#D4CFC9] p-5"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6B6560] mb-3">Total Orders</p>
            <p className="font-heading text-4xl font-light text-[#1A1A1A] tabular-nums">3</p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#D4CFC9] p-5"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6B6560] mb-3">Total Spent</p>
            <p className="font-heading text-2xl font-light text-[#1A1A1A] tabular-nums">{formatIDR(1450000)}</p>
          </motion.div>
        </motion.div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#D4CFC9] mb-6"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4DF]">
            <h2 className="font-heading text-lg font-medium text-[#1A1A1A]">Recent Orders</h2>
            <Link href="/account/orders" className="text-xs text-[#C4956A] hover:underline cursor-pointer tracking-wide">
              View All →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E4DF]">
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Order</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Date</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Total</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="border-b border-[#E8E4DF] last:border-0 hover:bg-[#F5F2EE] transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <Link href={`/account/orders/${order.id}`} className="text-[#C4956A] hover:underline cursor-pointer">
                        #{order.id}
                      </Link>
                    </td>
                    <td className="px-5 py-3.5 text-[#6B6560]">{order.date}</td>
                    <td className="px-5 py-3.5 font-medium">{formatIDR(order.total)}</td>
                    <td className="px-5 py-3.5">
                      <StatusBadge status={order.status} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4"
        >
          {[
            { href: "/account/profile", label: "My Profile", sub: "Update your personal info" },
            { href: "/account/addresses", label: "Addresses", sub: "Manage saved addresses" },
          ].map((item) => (
            <motion.div
              key={item.href}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={item.href}
                className="block bg-white border border-[#D4CFC9] p-4 hover:border-[#C4956A] transition-colors cursor-pointer group"
              >
                <p className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#C4956A] transition-colors">{item.label}</p>
                <p className="text-xs text-[#6B6560] mt-0.5">{item.sub}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AccountLayout>
  );
}
