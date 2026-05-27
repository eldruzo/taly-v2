import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  index?: number;
  label?: string;
  src?: string;
  alt?: string;
}

export default function ImagePlaceholder({
  className,
  index = 0,
  label = "TALY",
  src,
  alt = "",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  const bg = index % 2 === 0 ? "#1C1C1C" : "#242424";
  return (
    <div
      className={cn("flex items-center justify-center select-none", className)}
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <span
        className="font-heading"
        style={{
          color: "#C4956A",
          fontSize: "clamp(0.75rem, 2vw, 1.5rem)",
          fontWeight: 500,
          letterSpacing: "0.2em",
        }}
      >
        {label}
      </span>
    </div>
  );
}
