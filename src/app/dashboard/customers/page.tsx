import DashboardLayout from "@/components/DashboardLayout";
import { customers } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function DashboardCustomersPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1
              className="text-2xl font-semibold text-[#1A1A1A]"
            >
              Customers
            </h1>
            <p className="text-sm text-[#6B6560] mt-0.5">{customers.length} registered customers</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search customers..."
              className="border border-[#D4CFC9] bg-white px-4 py-2.5 pr-9 text-sm focus:outline-none focus:border-[#C4956A] w-56"
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6560]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </div>

        <div className="bg-white border border-[#D4CFC9] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E4DF]">
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Customer</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Email</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">City</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Orders</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Total Spent</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Joined</th>
                  <th className="text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]"></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.email} className="border-b border-[#E8E4DF] last:border-0 hover:bg-[#F5F2EE] transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                          style={{ backgroundColor: "#E8E4DF", color: "#C4956A" }}
                        >
                          {getInitials(customer.name)}
                        </div>
                        <span className="font-medium text-[#1A1A1A]">{customer.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-[#6B6560]">{customer.email}</td>
                    <td className="px-5 py-4 text-[#6B6560]">{customer.city}</td>
                    <td className="px-5 py-4 text-[#1A1A1A] font-medium">{customer.orders}</td>
                    <td className="px-5 py-4 font-medium text-[#1A1A1A]">{formatIDR(customer.spent)}</td>
                    <td className="px-5 py-4 text-[#6B6560]">{customer.joined}</td>
                    <td className="px-5 py-4">
                      <a href="#" className="text-xs text-[#C4956A] hover:underline cursor-pointer">View</a>
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
