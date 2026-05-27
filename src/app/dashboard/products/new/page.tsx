import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AddProductPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/dashboard/products" className="text-xs text-[#6B6560] hover:text-[#C4956A] cursor-pointer">
            ← Products
          </Link>
          <span className="text-[#D4CFC9]">/</span>
          <span className="text-sm text-[#1A1A1A]">Add Product</span>
        </div>
        <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-8">
          Add New Product
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
                  <input type="text" placeholder="e.g. Linen Midi Dress" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Category</label>
                    <select className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white cursor-pointer">
                      <option value="">Select Category</option>
                      <option>Women</option>
                      <option>Men</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">SKU</label>
                    <input type="text" placeholder="TLY-0XX" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Price (IDR)</label>
                    <input type="number" placeholder="450000" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Compare-at Price</label>
                    <input type="number" placeholder="Optional" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Description</label>
                  <textarea rows={4} placeholder="Write product description..." className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Stock Quantity</label>
                  <input type="number" placeholder="0" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="bg-white border border-[#D4CFC9] p-6">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Available Sizes</h2>
              <div className="flex gap-4">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <label key={size} className="flex items-center gap-2 cursor-pointer text-sm text-[#1A1A1A]">
                    <input type="checkbox" className="accent-[#C4956A]" />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="bg-white border border-[#D4CFC9] p-6">
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Product Images</h2>
              <div className="border-2 border-dashed border-[#D4CFC9] p-8 text-center mb-4">
                <svg className="mx-auto mb-3 text-[#D4CFC9]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <p className="text-sm text-[#6B6560]">Drag &amp; drop or click to upload</p>
                <p className="text-xs text-[#D4CFC9] mt-1">PNG, JPG up to 5MB</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 0].map((idx, i) => (
                  <ImagePlaceholder key={i} className="w-full aspect-square" index={idx} />
                ))}
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
              <h2 className="text-sm font-semibold text-[#1A1A1A] mb-4">Product Preview</h2>
              <ImagePlaceholder className="w-full aspect-[3/4] mb-3" index={0} />
              <p className="text-sm font-medium text-[#1A1A1A]">Product Name</p>
              <p className="text-xs text-[#6B6560] mt-0.5">Category</p>
              <p className="text-sm font-medium text-[#1A1A1A] mt-2">Rp —</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8">
          <button className="border border-[#C4956A] text-[#C4956A] px-6 py-3 text-sm font-medium hover:bg-[#C4956A] hover:text-white transition-colors cursor-pointer">
            Save as Draft
          </button>
          <button className="bg-[#C4956A] text-white px-6 py-3 text-sm font-medium hover:bg-[#b8845a] transition-colors cursor-pointer">
            Publish Product
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
