import OrderDetailClient from "./OrderDetailClient";

export function generateStaticParams() {
  return [
    { id: "ORD-001" },
    { id: "ORD-002" },
    { id: "ORD-003" },
    { id: "ORD-004" },
    { id: "ORD-005" },
  ];
}

export default function OrderDetailPage() {
  return <OrderDetailClient />;
}
