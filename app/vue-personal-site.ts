import { createApp, type App } from "vue/dist/vue.esm-bundler.js";
import { siteTemplate } from "./site-template";

export function mountPersonalSite(target: Element): App<Element> {
  const app = createApp({
    name: "PersonalSite",
    template: siteTemplate,
    data() {
      return {
        menuOpen: false,
        darkMode: false,
        currentTime: "--:--",
        dateLabel: "北京时间",
        timer: null as number | null,
      };
    },
    mounted() {
      const storedTheme = window.localStorage.getItem("personal-site-theme");
      this.darkMode = storedTheme
        ? storedTheme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      this.updateClock();
      this.timer = window.setInterval(this.updateClock, 30_000);
    },
    beforeUnmount() {
      if (this.timer !== null) window.clearInterval(this.timer);
    },
    methods: {
      closeMenu() {
        this.menuOpen = false;
      },
      toggleTheme() {
        this.darkMode = !this.darkMode;
        window.localStorage.setItem(
          "personal-site-theme",
          this.darkMode ? "dark" : "light",
        );
      },
      updateClock() {
        const now = new Date();
        this.currentTime = new Intl.DateTimeFormat("zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Shanghai",
        }).format(now);
        this.dateLabel = new Intl.DateTimeFormat("zh-CN", {
          month: "long",
          day: "numeric",
          weekday: "short",
          timeZone: "Asia/Shanghai",
        }).format(now);
      },
    },
  });

  app.mount(target);
  return app;
}
