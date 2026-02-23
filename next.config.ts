import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Onion-Location",
            value:
              "http://ruinetd2mlvusgj55tfr5i5n7giuctswgc5i6evt5t3fehd3zwjhchad.onion/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
