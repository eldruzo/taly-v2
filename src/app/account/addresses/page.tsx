"use client";

import { motion } from "framer-motion";
import AccountLayout from "@/components/AccountLayout";
import { provinces } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AddressesPage() {
  return (
    <AccountLayout>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-1">Account</p>
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">Addresses</h1>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-6"
        >
          {/* Address 1 - Default */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#C4956A] p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] bg-[#C4956A] text-white px-2 py-0.5 uppercase tracking-[0.15em]">Default</span>
                  <span className="text-[10px] text-[#6B6560] uppercase tracking-[0.2em]">Home</span>
                </div>
                <p className="text-sm font-medium text-[#1A1A1A]">Siti Rahayu</p>
                <p className="text-sm text-[#6B6560] mt-0.5">Jl. Kebon Jeruk No. 12, Jakarta Barat 11530</p>
                <p className="text-sm text-[#6B6560]">DKI Jakarta</p>
                <p className="text-sm text-[#6B6560] mt-1">0812-3456-7890</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button className="p-2 text-[#6B6560] hover:text-[#1A1A1A] cursor-pointer transition-colors" aria-label="Edit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button className="p-2 text-[#6B6560] hover:text-[var(--color-destructive-fg)] cursor-pointer transition-colors" aria-label="Delete">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Address 2 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#D4CFC9] p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] text-[#6B6560] uppercase tracking-[0.2em]">Office</span>
                </div>
                <p className="text-sm font-medium text-[#1A1A1A]">Siti Rahayu</p>
                <p className="text-sm text-[#6B6560] mt-0.5">Jl. Sudirman Kav. 52, Jakarta Pusat 10220</p>
                <p className="text-sm text-[#6B6560]">DKI Jakarta</p>
                <p className="text-sm text-[#6B6560] mt-1">0812-3456-7890</p>
                <button className="mt-3 text-[10px] uppercase tracking-[0.15em] border border-[#D4CFC9] text-[#6B6560] px-3 py-1.5 hover:border-[#C4956A] hover:text-[#C4956A] cursor-pointer transition-colors">
                  Set as Default
                </button>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button className="p-2 text-[#6B6560] hover:text-[#1A1A1A] cursor-pointer transition-colors" aria-label="Edit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button className="p-2 text-[#6B6560] hover:text-[var(--color-destructive-fg)] cursor-pointer transition-colors" aria-label="Delete">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Add New Address */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-dashed border-[#D4CFC9] p-6"
        >
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A] mb-0.5">New</p>
            <h3 className="font-heading text-xl font-medium text-[#1A1A1A]">Add New Address</h3>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-2">Label</label>
              <div className="flex gap-6">
                {["Home", "Office", "Other"].map((label) => (
                  <label key={label} className="flex items-center gap-2 cursor-pointer text-sm text-[#1A1A1A]">
                    <input type="radio" name="label" className="accent-[#C4956A]" />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Full Name</label>
                <input type="text" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Phone</label>
                <input type="tel" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Full Address</label>
              <textarea rows={2} className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white resize-none transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">City</label>
                <input type="text" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Province</label>
                <div className="relative">
                  <select className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white cursor-pointer appearance-none transition-colors">
                    <option value="">Select</option>
                    {provinces.map((p) => <option key={p}>{p}</option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6560] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Postal Code</label>
                <input type="text" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white transition-colors" />
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="bg-[#C4956A] text-white px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-[#b8845a] transition-colors cursor-pointer"
              >
                Save Address
              </motion.button>
              <button type="button" className="border border-[#D4CFC9] text-[#6B6560] px-5 py-2.5 text-sm font-medium hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors cursor-pointer">
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AccountLayout>
  );
}
