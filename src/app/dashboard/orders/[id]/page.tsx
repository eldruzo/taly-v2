import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import StatusBadge from "@/components/StatusBadge";
import { formatIDR } from "@/lib/utils";

const orderItems = [
  { name: "Linen Midi Dress", size: "S", qty: 1, price: 450000 },
  { name: "Gauze Wrap Blouse", size: "M", qty: 1, price: 320000 },
];
const subtotal = 770000;

export default function DashboardOrderDetailPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/dashboard/orders" className="text-xs text-[#6B6560] hover:text-[#C4956A] cursor-pointer">
            ← Orders
          </Link>
          <span className="text-[#D4CFC9]">/</span>
          <span className="text-sm text-[#1A1A1A]">ORD-001</span>
        </div>

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-[#1A1A1A]">
                #ORD-001
              </h1>
              <StatusBadge status="Paid" />
            </div>
            <p className="text-sm text-[#6B6560] mt-1">12 Mei 2025</p>
          </div>
          <div className="flex items-center gap-3">
            <select defaultValue="Paid" className="border border-[#D4CFC9] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4956A] bg-white cursor-pointer">
              <option>Pending</option>
              <option>Paid</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <button className="bg-[#C4956A] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#b8845a] transition-colors cursor-pointer">
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Order Items */}
            <div className="bg-white border border-[#D4CFC9]">
              <div className="px-5 py-4 border-b border-[#E8E4DF]">
                <h2 className="text-sm font-semibold text-[#1A1A1A]">Order Items</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#E8E4DF]">
                      <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Product</th>
                      <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Size</th>
                      <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Qty</th>
                      <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Price</th>
                      <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item, i) => (
                      <tr key={i} className="border-b border-[#E8E4DF] last:border-0">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <ImagePlaceholder className="w-10 h-10 flex-shrink-0" index={i} />
                            <span className="font-medium text-[#1A1A1A]">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-[#6B6560]">{item.size}</td>
                        <td className="px-5 py-3 text-[#6B6560]">{item.qty}</td>
                        <td className="px-5 py-3 text-[#1A1A1A]">{formatIDR(item.price)}</td>
                        <td className="px-5 py-3 font-medium text-[#1A1A1A]">{formatIDR(item.price * item.qty)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            </div>

            {/* Notes */}
            <div className="bg-white border border-[#D4CFC9] p-5">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-3">Internal Notes</h2>
              <textarea
                rows={3}
                placeholder="Add internal note..."
                className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white resize-none"
              />
              <button className="mt-2 text-xs text-[#C4956A] border border-[#C4956A] px-4 py-2 hover:bg-[#C4956A] hover:text-white transition-colors cursor-pointer">
                Save Note
              </button>
            </div>

            {/* Tracking */}
            <div className="bg-white border border-[#D4CFC9] p-5">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-3">Tracking Number</h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g. JNE123456789"
                  className="flex-1 border border-[#D4CFC9] px-4 py-2.5 text-sm focus:outline-none focus:border-[#C4956A] bg-white"
                />
                <button className="bg-[#1A1A1A] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#333] transition-colors cursor-pointer">
                  Save Tracking
                </button>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div className="space-y-4">
            <div className="bg-white border border-[#D4CFC9] p-5">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-3">Customer</h2>
              <p className="text-sm font-medium text-[#1A1A1A]">Siti Rahayu</p>
              <p className="text-sm text-[#6B6560]">siti@email.com</p>
              <p className="text-sm text-[#6B6560]">0812-3456-7890</p>
            </div>
            <div className="bg-white border border-[#D4CFC9] p-5">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-3">Shipping Address</h2>
              <p className="text-sm text-[#6B6560]">Jl. Kebon Jeruk No. 12</p>
              <p className="text-sm text-[#6B6560]">Jakarta Barat</p>
              <p className="text-sm text-[#6B6560]">DKI Jakarta 11530</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
