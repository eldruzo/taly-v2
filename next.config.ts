import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/taly-v2",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
