import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

function getStatusClasses(status: string): string {
  switch (status.toLowerCase()) {
    case "paid":
    case "active":
      return "bg-[var(--color-positive-bg)] text-[var(--color-positive-fg)]";
    case "pending":
      return "bg-amber-100 text-amber-800";
    case "shipped":
      return "bg-[#E8E4DF] text-[#6B6560]";
    case "delivered":
      return "bg-[#E8E4DF] text-[#6B6560]";
    case "draft":
      return "bg-[#E8E4DF] text-[#6B6560]";
    case "low stock":
      return "bg-[var(--color-destructive-bg)] text-[var(--color-destructive-fg)]";
    default:
      return "bg-[#E8E4DF] text-[#6B6560]";
  }
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        getStatusClasses(status),
        className
      )}
    >
      {status}
    </span>
  );
}
