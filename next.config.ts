import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit each route as /route/index.html so direct visits and browser
  // refreshes work on standard static hosts without custom rewrite rules.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
