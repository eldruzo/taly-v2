"use client";

import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { formatIDR } from "@/lib/utils";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
  imageAspect?: string;
}

export default function ProductCard({ product, index = 0, imageAspect = "aspect-[3/4]" }: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#141414]">
        <Link href={`/products/${product.id}`} className="block">
          <ImagePlaceholder className={`w-full ${imageAspect}`} index={index} src={product.image} alt={product.name} />
        </Link>
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
          <button
            className="bg-black/50 text-white text-sm px-6 py-2 hover:bg-black/70 transition-colors duration-200"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info — transparent bg, reads against whatever page sits behind */}
      <div className="pt-3 pb-4 px-1 bg-[#0C0C0C]">
        <div className="flex items-start justify-between">
          <Link href={`/products/${product.id}`} className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#EDE9E4]/80 leading-snug">{product.name}</p>
            <p className="text-xs text-[#7A7570] mt-0.5">{product.category}</p>
          </Link>
          <button
            className="text-[#7A7570] hover:text-[#C4956A] transition-colors duration-200 mt-0.5 ml-2 flex-shrink-0"
            aria-label={`Add ${product.name} to wishlist`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <p className="text-sm font-medium text-[#EDE9E4]/80 mt-2">{formatIDR(product.price)}</p>
      </div>
    </div>
  );
}
