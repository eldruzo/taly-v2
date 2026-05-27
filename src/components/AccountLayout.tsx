"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Footer from "./Footer";

const accountNavItems = [
  { label: "My Orders", href: "/account/orders" },
  { label: "My Profile", href: "/account/profile" },
  { label: "Addresses", href: "/account/addresses" },
  { label: "Wishlist", href: "/wishlist" },
];

interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EE]">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-56 flex-shrink-0">
            <div className="bg-white border border-[#D4CFC9] rounded-md overflow-hidden">
              <div className="px-4 py-4 border-b border-[#D4CFC9]">
                <p className="text-sm font-semibold text-[#1A1A1A]">My Account</p>
              </div>
              <nav className="py-2">
                {accountNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-2.5 text-sm transition-colors duration-200 cursor-pointer",
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "bg-[#E8E4DF] text-[#C4956A] font-medium"
                        : "text-[#1A1A1A] hover:bg-[#F5F2EE] hover:text-[#C4956A]"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="block px-4 py-2.5 text-sm text-[#6B6560] hover:bg-[#F5F2EE] transition-colors duration-200 cursor-pointer border-t border-[#E8E4DF] mt-1"
                >
                  Logout
                </Link>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
