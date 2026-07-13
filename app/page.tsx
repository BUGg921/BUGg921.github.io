import type { Metadata } from "next";
import { VuePersonalSite } from "./VuePersonalSite";

export const metadata: Metadata = {
  title: { absolute: "BUGg921｜个人实验室" },
  description:
    "BUGg921 的个人数字空间，用来收纳工具、项目、技术实验与长期写作。",
};

export default function Home() {
  return <VuePersonalSite />;
}
