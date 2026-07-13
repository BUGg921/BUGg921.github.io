"use client";

import { useEffect, useRef } from "react";
import type { App } from "vue";
import { siteTemplate } from "./site-template";

export function VuePersonalSite() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let vueApp: App<Element> | null = null;

    void import("./vue-personal-site").then(({ mountPersonalSite }) => {
      if (!active || !rootRef.current) return;
      vueApp = mountPersonalSite(rootRef.current);
    });

    return () => {
      active = false;
      vueApp?.unmount();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="vue-site-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: siteTemplate }}
    />
  );
}
