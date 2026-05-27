"use client";

import { motion } from "framer-motion";
import AccountLayout from "@/components/AccountLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ProfilePage() {
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
          <h1 className="font-heading text-4xl font-medium text-[#1A1A1A]">My Profile</h1>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Personal Info */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#D4CFC9] p-6"
          >
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A] mb-0.5">Personal</p>
              <h2 className="font-heading text-xl font-medium text-[#1A1A1A]">Personal Information</h2>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Full Name</label>
                <input
                  type="text"
                  defaultValue="Siti Rahayu"
                  className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Email</label>
                <input
                  type="email"
                  defaultValue="siti@email.com"
                  readOnly
                  className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#6B6560] bg-[#F5F2EE] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Phone</label>
                <input
                  type="tel"
                  defaultValue="0812-3456-7890"
                  className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-2">Gender</label>
                <div className="flex gap-6">
                  {["Pria", "Wanita", "Prefer not to say"].map((g) => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer text-sm text-[#1A1A1A]">
                      <input type="radio" name="gender" defaultChecked={g === "Wanita"} className="accent-[#C4956A]" />
                      {g}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Date of Birth</label>
                <input
                  type="date"
                  defaultValue="1995-08-15"
                  className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="bg-[#C4956A] text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#b8845a] transition-colors duration-200 cursor-pointer"
              >
                Save Changes
              </motion.button>
            </form>
          </motion.div>

          {/* Change Password */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#D4CFC9] p-6"
          >
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A] mb-0.5">Security</p>
              <h2 className="font-heading text-xl font-medium text-[#1A1A1A]">Change Password</h2>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560] mb-1.5">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-[#D4CFC9] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C4956A] bg-white transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="border border-[#C4956A] text-[#C4956A] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#C4956A] hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Update Password
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </AccountLayout>
  );
}
