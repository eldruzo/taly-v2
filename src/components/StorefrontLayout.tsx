"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface StorefrontLayoutProps {
  children: React.ReactNode;
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[#0C0C0C] py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-3">Stay Connected</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#EDE9E4] leading-[1.05] mb-4">
          Be the first<br />to know.
        </h2>
        <p className="text-sm text-[#7A7570] leading-relaxed mb-8 max-w-[34ch] mx-auto">
          New arrivals, limited batik drops, and stories from the archipelago — straight to your inbox.
        </p>
        {submitted ? (
          <p className="text-sm text-[#C4956A] tracking-wide">Thank you — you&apos;re on the list.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
            className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-[#2A2A2A] text-[#EDE9E4] placeholder-[#4A4A45] text-sm px-4 py-3 focus:outline-none focus:border-[#C4956A] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C4956A] text-white text-xs uppercase tracking-[0.18em] px-7 py-3 hover:bg-[#b8845a] transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-[#3A3A35] mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

export default function StorefrontLayout({ children }: StorefrontLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EE]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
