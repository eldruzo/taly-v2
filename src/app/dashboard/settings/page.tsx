"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { provinces } from "@/lib/data";

export default function DashboardSettingsPage() {
  const [activeTab, setActiveTab] = useState("store");

  const [notifications, setNotifications] = useState({
    newOrder: true,
    lowStock: true,
    review: false,
    weeklyReport: true,
  });

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8">
        <div className="mb-6">
          <h1
            className="text-2xl font-semibold text-[#1A1A1A]"
          >
            Settings
          </h1>
          <p className="text-sm text-[#6B6560] mt-0.5">Manage your store configuration</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#D4CFC9] mb-6">
          {[
            { key: "store", label: "Store Info" },
            { key: "shipping", label: "Shipping" },
            { key: "notifications", label: "Notifications" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-sm font-medium cursor-pointer transition-colors ${
                activeTab === tab.key
                  ? "border-b-2 border-[#C4956A] text-[#C4956A]"
                  : "text-[#6B6560] hover:text-[#1A1A1A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Store Info */}
        {activeTab === "store" && (
          <div className="bg-white border border-[#D4CFC9] p-6 max-w-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Store Name</label>
                <input type="text" defaultValue="Taly" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Description</label>
                <textarea rows={3} defaultValue="Fashion and lifestyle brand celebrating Indonesia's textile heritage." className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Contact Email</label>
                  <input type="email" defaultValue="hello@taly.id" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Phone</label>
                  <input type="tel" defaultValue="+62 21 1234 5678" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Instagram</label>
                <input type="text" defaultValue="@taly.id" className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Store Logo</label>
                <div className="border-2 border-dashed border-[#D4CFC9] p-6 text-center">
                  <svg className="mx-auto mb-2 text-[#D4CFC9]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <p className="text-xs text-[#6B6560]">Click to upload logo</p>
                </div>
              </div>
              <button className="bg-[#C4956A] text-white px-6 py-3 text-sm font-medium hover:bg-[#b8845a] transition-colors cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Shipping */}
        {activeTab === "shipping" && (
          <div className="bg-white border border-[#D4CFC9] p-6 max-w-2xl">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Free Shipping Threshold (IDR)</label>
                  <input type="number" defaultValue={500000} className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-1.5">Flat Rate Fee (IDR)</label>
                  <input type="number" defaultValue={25000} className="w-full border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-2">Delivery Days (Min – Max)</label>
                <div className="flex items-center gap-3">
                  <input type="number" defaultValue={3} className="w-20 border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  <span className="text-[#6B6560]">–</span>
                  <input type="number" defaultValue={5} className="w-20 border border-[#D4CFC9] px-4 py-3 text-sm focus:outline-none focus:border-[#C4956A] bg-white" />
                  <span className="text-sm text-[#6B6560]">hari kerja</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-[#6B6560] mb-3">Supported Provinces</label>
                <div className="grid grid-cols-2 gap-2">
                  {provinces.map((p) => (
                    <label key={p} className="flex items-center gap-2 cursor-pointer text-sm text-[#1A1A1A]">
                      <input type="checkbox" defaultChecked className="accent-[#C4956A]" />
                      {p}
                    </label>
                  ))}
                </div>
              </div>
              <button className="bg-[#C4956A] text-white px-6 py-3 text-sm font-medium hover:bg-[#b8845a] transition-colors cursor-pointer">
                Save Shipping Settings
              </button>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="bg-white border border-[#D4CFC9] p-6 max-w-2xl">
            <div className="space-y-4">
              {[
                { key: "newOrder", label: "New Order Email", desc: "Receive email when a new order is placed" },
                { key: "lowStock", label: "Low Stock Alert", desc: "Alert when product stock falls below 10" },
                { key: "review", label: "Customer Review", desc: "Notify when a customer leaves a review" },
                { key: "weeklyReport", label: "Weekly Sales Report", desc: "Receive weekly summary every Monday" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-3 border-b border-[#E8E4DF] last:border-0">
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">{item.label}</p>
                    <p className="text-xs text-[#6B6560]">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${
                      notifications[item.key as keyof typeof notifications] ? "bg-[#C4956A]" : "bg-[#D4CFC9]"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                        notifications[item.key as keyof typeof notifications] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
