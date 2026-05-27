export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  sku: string;
  stock: number;
  status: string;
  image?: string;
};

export type Order = {
  id: string;
  customer: string;
  city: string;
  date: string;
  total: number;
  status: string;
  items: number;
};

export type Customer = {
  name: string;
  email: string;
  city: string;
  orders: number;
  spent: number;
  joined: string;
};

export const products: Product[] = [
  { id: "TLY-001", name: "Linen Midi Dress", price: 450000, category: "Women", sku: "TLY-001", stock: 24, status: "Active", image: "/images/ig-14.jpg" },
  { id: "TLY-002", name: "Batik Overshirt", price: 380000, category: "Men", sku: "TLY-002", stock: 18, status: "Active", image: "/images/ig-02.jpg" },
  { id: "TLY-003", name: "Woven Tote Bag", price: 275000, category: "Accessories", sku: "TLY-003", stock: 40, status: "Active", image: "/images/ig-01.jpg" },
  { id: "TLY-004", name: "Gauze Wrap Blouse", price: 320000, category: "Women", sku: "TLY-004", stock: 15, status: "Active", image: "/images/ig-18.jpg" },
  { id: "TLY-005", name: "Resort Linen Pants", price: 410000, category: "Men", sku: "TLY-005", stock: 9, status: "Active", image: "/images/ig-05.jpg" },
  { id: "TLY-006", name: "Raffia Sun Hat", price: 195000, category: "Accessories", sku: "TLY-006", stock: 33, status: "Active", image: "/images/ig-07.jpg" },
  { id: "TLY-007", name: "Tencel Slip Dress", price: 490000, category: "Women", sku: "TLY-007", stock: 7, status: "Active", image: "/images/ig-10.jpg" },
  { id: "TLY-008", name: "Printed Camp Shirt", price: 355000, category: "Men", sku: "TLY-008", stock: 22, status: "Active", image: "/images/ig-08.jpg" },
  { id: "TLY-009", name: "Leather Card Holder", price: 165000, category: "Accessories", sku: "TLY-009", stock: 51, status: "Active", image: "/images/ig-09.jpg" },
  { id: "TLY-010", name: "Embroidered Kaftan", price: 520000, category: "Women", sku: "TLY-010", stock: 5, status: "Active", image: "/images/ig-16.jpg" },
  { id: "TLY-011", name: "Drawstring Shorts", price: 285000, category: "Men", sku: "TLY-011", stock: 19, status: "Active", image: "/images/ig-11.jpg" },
  { id: "TLY-012", name: "Rattan Clutch", price: 230000, category: "Accessories", sku: "TLY-012", stock: 28, status: "Active", image: "/images/ig-06.jpg" },
];

export const orders: Order[] = [
  { id: "ORD-001", customer: "Siti Rahayu", city: "Jakarta", date: "12 Mei 2025", total: 770000, status: "Paid", items: 2 },
  { id: "ORD-002", customer: "Budi Santoso", city: "Bandung", date: "13 Mei 2025", total: 355000, status: "Pending", items: 1 },
  { id: "ORD-003", customer: "Dewi Anggraini", city: "Surabaya", date: "14 Mei 2025", total: 490000, status: "Shipped", items: 1 },
  { id: "ORD-004", customer: "Andi Firmansyah", city: "Yogyakarta", date: "15 Mei 2025", total: 450000, status: "Paid", items: 1 },
  { id: "ORD-005", customer: "Rizka Amalia", city: "Bali", date: "16 Mei 2025", total: 685000, status: "Delivered", items: 2 },
];

export const customers: Customer[] = [
  { name: "Siti Rahayu", email: "siti@email.com", city: "Jakarta", orders: 3, spent: 1450000, joined: "Jan 2025" },
  { name: "Budi Santoso", email: "budi@email.com", city: "Bandung", orders: 1, spent: 355000, joined: "Feb 2025" },
  { name: "Dewi Anggraini", email: "dewi@email.com", city: "Surabaya", orders: 2, spent: 970000, joined: "Feb 2025" },
  { name: "Andi Firmansyah", email: "andi@email.com", city: "Yogyakarta", orders: 1, spent: 450000, joined: "Mar 2025" },
  { name: "Rizka Amalia", email: "rizka@email.com", city: "Bali", orders: 2, spent: 1205000, joined: "Mar 2025" },
];

export const provinces = [
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "DI Yogyakarta",
  "Bali",
  "Sumatera Utara",
  "Sumatera Selatan",
  "Kalimantan Selatan",
  "Sulawesi Selatan",
];
