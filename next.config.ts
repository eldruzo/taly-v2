import type { NextConfig } from "next";

const isCI = Boolean(process.env.GITHUB_ACTIONS);
const basePath = isCI ? "/taly-v2" : "";

const nextConfig: NextConfig = {
  ...(isCI && { output: "export" }),
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
