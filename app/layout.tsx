import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "个人空间",
    template: "%s｜个人空间",
  },
  description:
    "BUGg921 的个人数字空间，用来收纳工具、项目、技术实验与长期写作。",
  keywords: ["个人网站", "独立开发", "工具", "博客", "Vue 3"],
  openGraph: {
    title: "BUGg921｜个人实验室",
    description: "工具、项目、实验与写作，都会在这里慢慢发生。",
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
