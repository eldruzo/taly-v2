import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

export function generateStaticParams() {
  return [
    { id: "TLY-001" },
    { id: "TLY-002" },
    { id: "TLY-003" },
    { id: "TLY-004" },
    { id: "TLY-005" },
    { id: "TLY-006" },
    { id: "TLY-007" },
    { id: "TLY-008" },
    { id: "TLY-009" },
    { id: "TLY-010" },
    { id: "TLY-011" },
    { id: "TLY-012" },
  ];
}

import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function EditProductPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/dashboard/products" className="text-xs text-[#6B6560] hover:text-[#C4956A] cursor-pointer">
            ← Products
          </Link>
          <span className="text-[#D4CFC9]">/</span>
          <span className="text-sm text-[#1A1A1A]">Edit Product</span>
        </div>
        <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-8">
          Edit Product
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-white border border-[#D4CFC9] p-6">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Product Name</label>
                  <input type="text" defaultValue="Linen Midi Dress" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Category</label>
                    <select defaultValue="Women" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white cursor-pointer">
                      <option>Women</option>
                      <option>Men</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">SKU</label>
                    <input type="text" defaultValue="TLY-001" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Price (IDR)</label>
                    <input type="number" defaultValue={450000} className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Compare-at Price</label>
                    <input type="number" placeholder="Optional" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Description</label>
                  <textarea rows={4} defaultValue="A flowing midi dress crafted from 100% washed linen. Effortlessly elegant and breathable, perfect for tropical days." className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Stock Quantity</label>
                  <input type="number" defaultValue={24} className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="bg-white border border-[#D4CFC9] p-6">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Available Sizes</h2>
              <div className="flex gap-4">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <label key={size} className="flex items-center gap-2 cursor-pointer text-sm text-[#1A1A1A]">
                    <input type="checkbox" className="accent-[#C4956A]" defaultChecked={["XS", "S", "M", "L"].includes(size)} />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="bg-white border border-[#D4CFC9] p-6">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Product Images</h2>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[0, 1, 0].map((idx, i) => (
                  <div key={i} className="relative group">
                    <ImagePlaceholder className="w-full aspect-square" index={idx} />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white/90 p-1.5 cursor-pointer hover:bg-white transition-colors" aria-label="Remove image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-2 border-dashed border-[#D4CFC9] p-4 text-center">
                <p className="text-sm text-[#6B6560]">Drag &amp; drop or click to add more images</p>
              </div>
            </div>

            {/* Status */}
            <div className="bg-white border border-[#D4CFC9] p-6">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Status</h2>
              <div className="flex gap-6">
                {["Active", "Draft"].map((s) => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer text-sm text-[#1A1A1A]">
                    <input type="radio" name="status" defaultChecked={s === "Active"} className="accent-[#C4956A]" />
                    {s}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div>
            <div className="bg-white border border-[#D4CFC9] p-5 sticky top-6">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Preview</h2>
              <ImagePlaceholder className="w-full aspect-[3/4] mb-3" index={0} />
              <p className="text-sm font-medium text-[#1A1A1A]">Linen Midi Dress</p>
              <p className="text-xs text-[#6B6560] mt-0.5">Women</p>
              <p className="text-sm font-medium text-[#1A1A1A] mt-2">Rp 450.000</p>
            </div>
          </div>
        </div>

        {/* Save Buttons */}
        <div className="flex gap-3 mt-8">
          <button className="border border-[#C4956A] text-[#C4956A] px-6 py-3 text-sm font-medium hover:bg-[#C4956A] hover:text-white transition-colors cursor-pointer">
            Save as Draft
          </button>
          <button className="bg-[#C4956A] text-white px-6 py-3 text-sm font-medium hover:bg-[#b8845a] transition-colors cursor-pointer">
            Save Changes
          </button>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 border border-[#D4CFC9] bg-[var(--color-destructive-bg)] p-6">
          <h2 className="text-sm font-semibold text-[var(--color-destructive-fg)] mb-2">
            Danger Zone
          </h2>
          <p className="text-sm text-[var(--color-destructive-fg)] mb-4 opacity-80">
            Deleting this product is permanent and cannot be undone. All associated data will be lost.
          </p>
          <button className="bg-[var(--color-destructive-fg)] text-white px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
            Delete Product
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
