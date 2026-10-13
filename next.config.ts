import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The standalone page moved into the Insights section.
      {
        source: "/why-projects-fail",
        destination: "/insights/why-projects-fail",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
