"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StorefrontLayout from "@/components/StorefrontLayout";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

export default function AboutPage() {
  return (
    <StorefrontLayout>

      {/* Hero: full-bleed, heading anchored bottom-left */}
      <section className="relative w-full h-[75vh] min-h-[500px] overflow-hidden">
        <ImagePlaceholder className="w-full h-full" index={0} src="/images/about-hero-a.jpg" alt="Taly story" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/65 via-[#1A1A1A]/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-12 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-3"
          >
            Founded 2022 · Bogor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.9]"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Two-column story */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-4">The Beginning</p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1A1A1A] leading-[1.05] mb-6">
              Born in the archipelago.
            </h2>
            <p className="text-[#6B6560] leading-relaxed">
              Taly was born in Bogor in 2022 — a self-manufactured clothing brand with a singular conviction: that fashion should honour who you actually are. Every piece is designed and produced in-house, free from trend cycles and fast-fashion pressure.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-0 md:pt-14"
          >
            <p className="text-[#6B6560] leading-relaxed">
              We work with Indonesian textiles — batik, tenun, and natural weaves — shaping them into modern, unhurried silhouettes. Every garment is made in limited quantities so that quality and intention show in every stitch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values: numbered, full-width editorial grid */}
      <section className="bg-[#F5F2EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-2">What guides us</p>
            <h2 className="font-heading text-4xl font-medium text-[#1A1A1A]">Our Values</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D4CFC9] border-t border-[#D4CFC9]"
          >
            {[
              { num: "01", title: "Craftsmanship", desc: "Every piece handcrafted by skilled Indonesian artisans who bring decades of expertise to each stitch and weave." },
              { num: "02", title: "Sustainability", desc: "Natural fibers, ethical production, and minimal waste. Beautiful fashion should not cost the earth." },
              { num: "03", title: "Local Pride", desc: "Celebrating Indonesia's rich textile heritage by elevating batik, tenun, and natural weaving into contemporary fashion." },
            ].map((val) => (
              <motion.div
                key={val.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10"
              >
                <p className="font-heading text-5xl font-light text-[#D4CFC9] mb-6 leading-none">{val.num}</p>
                <h3 className="font-heading text-2xl font-medium text-[#1A1A1A] mb-3">{val.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team: portrait layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-2">The People</p>
          <h2 className="font-heading text-4xl font-medium text-[#1A1A1A]">Meet the Team</h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            { name: "Amara Putri", role: "Founder & Creative Director", image: "/images/ig-18.jpg" },
            { name: "Dian Kusuma", role: "Head of Design", image: "/images/ig-10.jpg" },
            { name: "Fajar Nugroho", role: "Operations & Partnerships", image: "/images/ig-15.jpg" },
          ].map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImagePlaceholder className="w-full aspect-[3/4] mb-5" index={0} src={member.image} alt={member.name} />
              <h3 className="font-heading text-xl font-medium text-[#1A1A1A]">{member.name}</h3>
              <p className="text-sm text-[#6B6560] mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA band */}
      <section className="bg-[#1A1A1A] py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C4956A] mb-4">The Collection</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-white mb-8">
            Wear the archipelago.
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-white border border-white/30 px-8 py-3 hover:bg-white hover:text-[#1A1A1A] transition-colors duration-200 group"
          >
            <span>Shop Now</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>
      </section>

    </StorefrontLayout>
  );
}
