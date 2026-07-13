import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "个人空间",
    template: "%s｜个人空间",
  },
  description:
    "一个持续生长的个人网站，用来收纳作品、实用工具、技术实验与长期写作。",
  keywords: ["个人网站", "独立开发", "工具", "博客", "Vue 3"],
  openGraph: {
    title: "个人空间｜把好奇心做成能用的东西",
    description: "作品、工具、实验与写作，都会在这里慢慢发生。",
    type: "website",
    locale: "zh_CN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11100e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
