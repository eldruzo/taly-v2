import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import StatusBadge from "@/components/StatusBadge";
import { orders } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

const monthlyRevenue = [
  { month: "Jan", value: 8200000, label: "8.2M" },
  { month: "Feb", value: 9500000, label: "9.5M" },
  { month: "Mar", value: 11000000, label: "11M" },
  { month: "Apr", value: 10300000, label: "10.3M" },
  { month: "May", value: 12450000, label: "12.45M" },
];
const maxValue = 12450000;

const topProducts = [
  { name: "Linen Midi Dress", sales: 45, revenue: 20250000, image: "/images/ig-14.jpg" },
  { name: "Tencel Slip Dress", sales: 38, revenue: 18620000, image: "/images/ig-10.jpg" },
  { name: "Embroidered Kaftan", sales: 29, revenue: 15080000, image: "/images/ig-16.jpg" },
];

export default function DashboardOverviewPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#1A1A1A]">Overview</h1>
          <p className="text-sm text-[#6B6560] mt-1">Welcome back to your Taly dashboard.</p>
        </div>

        {/* Metric Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Revenue", value: "Rp 12.450.000", delta: "+12% this month", positive: true },
            { label: "Orders", value: "48", delta: "+5 this week", positive: true },
            { label: "Products", value: "12", delta: "All active", positive: false },
            { label: "Visitors", value: "1.2k", delta: "+8% this week", positive: true },
          ].map((metric) => (
            <div key={metric.label} className="bg-white border border-[#D4CFC9] p-5">
              <p className="text-xs uppercase tracking-widest text-[#6B6560] mb-3">{metric.label}</p>
              <p className="text-2xl font-semibold text-[#1A1A1A] tabular-nums leading-none">{metric.value}</p>
              <p className={`text-xs mt-2 ${metric.positive ? "text-[var(--color-positive)]" : "text-[#6B6560]"}`}>{metric.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Bar Chart */}
          <div className="lg:col-span-2 bg-white border border-[#D4CFC9] p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-6">Monthly Revenue</h2>
            <div className="flex items-end gap-4 h-44">
              {monthlyRevenue.map((item) => {
                const heightPct = (item.value / maxValue) * 100;
                return (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs text-[#6B6560]">{item.label}</span>
                    <div
                      className="w-full bg-[#C4956A] transition-all duration-300"
                      style={{ height: `${heightPct}%` }}
                    />
                    <span className="text-xs text-[#6B6560]">{item.month}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white border border-[#D4CFC9] p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560] mb-4">Top Products</h2>
            <div className="space-y-4">
              {topProducts.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3">
                  <ImagePlaceholder className="w-10 h-10 flex-shrink-0" index={i} src={p.image} alt={p.name} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1A1A1A] truncate">{p.name}</p>
                    <p className="text-xs text-[#6B6560]">{p.sales} sales</p>
                  </div>
                  <p className="text-xs font-medium text-[#1A1A1A] flex-shrink-0">Rp {(p.revenue / 1000000).toFixed(1)}M</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white border border-[#D4CFC9]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4DF]">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B6560]">Recent Orders</h2>
            <Link href="/dashboard/orders" className="text-xs text-[#C4956A] hover:underline cursor-pointer">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E4DF]">
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Order</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Customer</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Date</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-[#E8E4DF] last:border-0 hover:bg-[#F5F2EE] transition-colors">
                    <td className="px-5 py-3">
                      <Link href={`/dashboard/orders/${order.id}`} className="text-[#C4956A] hover:underline cursor-pointer">
                        #{order.id}
                      </Link>
                    </td>
                    <td className="px-5 py-3 text-[#1A1A1A]">{order.customer}</td>
                    <td className="px-5 py-3 text-[#6B6560]">{order.date}</td>
                    <td className="px-5 py-3"><StatusBadge status={order.status} /></td>
                    <td className="px-5 py-3 font-medium">{formatIDR(order.total)}</td>
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
