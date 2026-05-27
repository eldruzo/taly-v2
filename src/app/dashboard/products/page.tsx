import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import StatusBadge from "@/components/StatusBadge";
import { products } from "@/lib/data";
import { formatIDR } from "@/lib/utils";

export default function DashboardProductsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1
              className="text-2xl font-semibold text-[#1A1A1A]"
            >
              Products
            </h1>
            <p className="text-sm text-[#6B6560] mt-0.5">12 products in your store</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-[#D4CFC9] bg-white px-4 py-2.5 pr-9 text-sm focus:outline-none focus:border-[#C4956A] w-56"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6560]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <Link
              href="/dashboard/products/new"
              className="bg-[#C4956A] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#b8845a] transition-colors cursor-pointer whitespace-nowrap"
            >
              + Add Product
            </Link>
          </div>
        </div>

        <div className="bg-white border border-[#D4CFC9] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8E4DF]">
                  <th className="px-4 py-3 text-left">
                    <input type="checkbox" className="accent-[#C4956A]" />
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Product</th>
                  <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">SKU</th>
                  <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Price</th>
                  <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Stock</th>
                  <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest text-[#6B6560]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={product.id} className="border-b border-[#E8E4DF] last:border-0 hover:bg-[#F5F2EE] transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="accent-[#C4956A]" />
                    </td>
                    <td className="px-4 py-3 max-w-[200px]">
                      <div className="flex items-center gap-3 min-w-0">
                        <ImagePlaceholder className="w-10 h-10 flex-shrink-0" index={i} />
                        <span className="font-medium text-[#1A1A1A] truncate">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#6B6560]">{product.sku}</td>
                    <td className="px-4 py-3 text-[#6B6560]">{product.category}</td>
                    <td className="px-4 py-3 font-medium text-[#1A1A1A]">{formatIDR(product.price)}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className={product.stock < 10 ? "text-[var(--color-destructive-fg)] font-medium" : "text-[#1A1A1A]"}>
                          {product.stock}
                        </span>
                        {product.stock < 10 && (
                          <StatusBadge status="Low Stock" />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={product.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Link href={`/dashboard/products/${product.id}/edit`} className="p-1.5 text-[#6B6560] hover:text-[#1A1A1A] cursor-pointer transition-colors" aria-label="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </Link>
                        <button className="p-1.5 text-[#6B6560] hover:text-[var(--color-destructive-fg)] cursor-pointer transition-colors" aria-label="Delete">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                          </svg>
                        </button>
                      </div>
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
