import type { Metadata } from "next";
import { VuePersonalSite } from "./VuePersonalSite";

export const metadata: Metadata = {
  title: { absolute: "个人空间｜把好奇心做成能用的东西" },
  description:
    "一个持续生长的个人网站，用来收纳作品、实用工具、技术实验与长期写作。",
};

export default function Home() {
  return <VuePersonalSite />;
}
