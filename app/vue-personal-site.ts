import { createApp, type App } from "vue/dist/vue.esm-bundler.js";
import { siteTemplate } from "./site-template";

export function mountPersonalSite(target: Element): App<Element> {
  const app = createApp({
    name: "PersonalSite",
    template: siteTemplate,
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      closeMenu() {
        this.menuOpen = false;
      },
    },
  });

  app.mount(target);
  return app;
}
