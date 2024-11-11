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
  basePath: process.env.BASE_PATH || "", // 필요시 Azure 환경에 따라 basePath 설정
};

export default withNextIntl(nextConfig);
