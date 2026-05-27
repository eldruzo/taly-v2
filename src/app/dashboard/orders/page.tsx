import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
import { orders } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

const statusTabs = [
  { label: "All", count: 5 },
  { label: "Pending", count: 1 },
  { label: "Paid", count: 2 },
  { label: "Shipped", count: 1 },
  { label: "Delivered", count: 1 },
];

export default function DashboardOrdersPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="mb-6">
          <h1
            className="text-2xl font-semibold text-[#1A1A1A]"
          >
            Orders
          </h1>
          <p className="text-sm text-[#6B6560] mt-0.5">Manage and track customer orders</p>
        </div>

        {/* Filters */}
        <div className="bg-white border border-[#D4CFC9] p-4 mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Status Tabs */}
            <div className="flex gap-1 flex-wrap">
              {statusTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  className={`px-3 py-1.5 text-xs rounded-sm transition-colors cursor-pointer ${
                    i === 0
                      ? "bg-[#1A1A1A] text-white"
                      : "border border-[#D4CFC9] text-[#6B6560] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            <div className="flex gap-3 ml-auto">
              {/* Date Range */}
              <div className="flex gap-2">
                <input type="date" placeholder="From" className="border border-[#D4CFC9] px-3 py-2 text-xs focus:outline-none focus:border-[#C4956A] bg-white cursor-pointer" />
                <input type="date" placeholder="To" className="border border-[#D4CFC9] px-3 py-2 text-xs focus:outline-none focus:border-[#C4956A] bg-white cursor-pointer" />
              </div>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="border border-[#D4CFC9] px-4 py-2 pr-8 text-xs focus:outline-none focus:border-[#C4956A] bg-white w-44"
                />
                <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B6560]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#D4CFC9] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E4DF]">
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Order</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Customer</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Date</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Items</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Total</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-[#E8E4DF] last:border-0 hover:bg-[#F5F2EE] transition-colors">
                    <td className="px-5 py-4 font-medium text-[#1A1A1A]">#{order.id}</td>
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-medium text-[#1A1A1A]">{order.customer}</p>
                        <p className="text-xs text-[#6B6560]">{order.city}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-[#6B6560]">{order.date}</td>
                    <td className="px-5 py-4 text-[#6B6560]">{order.items}</td>
                    <td className="px-5 py-4 font-medium text-[#1A1A1A]">{formatIDR(order.total)}</td>
                    <td className="px-5 py-4"><StatusBadge status={order.status} /></td>
                    <td className="px-5 py-4">
                      <Link href={`/dashboard/orders/${order.id}`} className="p-1.5 text-[#6B6560] hover:text-[#1A1A1A] cursor-pointer transition-colors inline-block" aria-label="View order">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
