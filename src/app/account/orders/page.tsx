"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AccountLayout from "@/components/AccountLayout";
import StatusBadge from "@/components/StatusBadge";
import { orders } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

export default function MyOrdersPage() {
  return (
    <AccountLayout>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">{orders.length} orders</p>
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">My Orders</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#D4CFC9]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E4DF]">
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Order</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Date</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Items</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Total</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]">Status</th>
                  <th className="text-left px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-[#E8E4DF] last:border-0 hover:bg-[#F5F2EE] transition-colors"
                  >
                    <td className="px-5 py-4 font-medium text-[#1A1A1A]">#{order.id}</td>
                    <td className="px-5 py-4 text-[#6B6560]">{order.date}</td>
                    <td className="px-5 py-4 text-[#6B6560]">{order.items} item{order.items > 1 ? "s" : ""}</td>
                    <td className="px-5 py-4 font-medium text-[#1A1A1A]">{formatIDR(order.total)}</td>
                    <td className="px-5 py-4">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="px-5 py-4">
                      <Link href={`/account/orders/${order.id}`} className="text-xs text-[#C4956A] hover:underline cursor-pointer">
                        View →
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AccountLayout>
  );
}
