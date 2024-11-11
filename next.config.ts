import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone", // Azure 배포를 위한 Standalone 모드
  experimental: {
    reactCompiler: {
      compilationMode: "annotation",
    },
  },
};

export default withNextIntl(nextConfig);
