import ProductDetailClient from "./ProductDetailClient";

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

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
