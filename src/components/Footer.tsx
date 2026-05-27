import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-[#EDE9E4] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <span
                className="font-heading text-3xl font-medium tracking-widest text-white"
              >
                TALY
              </span>
            </Link>
            <p className="text-sm text-[#7A7570] leading-relaxed">
              Self-manufactured in Bogor. Fashion that honours who you are — born from Indonesian textile heritage.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#7A7570] mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">All Products</Link></li>
              <li><Link href="/products?category=Women" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">Women</Link></li>
              <li><Link href="/products?category=Men" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">Men</Link></li>
              <li><Link href="/products?category=Accessories" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">Accessories</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#7A7570] mb-4">Info</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">About Us</Link></li>
              <li><Link href="/about" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">Sustainability</Link></li>
              <li><Link href="/about" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">Contact</Link></li>
              <li><Link href="/dashboard" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200">Seller Dashboard</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#7A7570] mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://instagram.com/weartaly.id" target="_blank" rel="noopener noreferrer" className="text-sm text-[#8A8580] hover:text-[#EDE9E4] transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  @weartaly.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#5A5550]">© 2025 Taly. All rights reserved.</p>
          <p className="text-xs text-[#5A5550]">Made with care in Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
