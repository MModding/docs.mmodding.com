import { defineConfig } from "vitepress"
import library from "./sidebars/library"
import eda from "./sidebars/eda"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  cleanUrls: true,
  title: "MModding Documentation",
  description: "The Official MModding Documentations Website, providing docs to development-side projects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "https://mmodding.com" },
      { text: "Project Docs", link: "/" },
    ],

    sidebar: { library, "env-driven-assets": eda },

    socialLinks: [
      { icon: "youtube", link: "https://mmodding.com/youtube" },
      { icon: "discord", link: "https://mmodding.com/discord" },
      { icon: "x", link: "https://mmodding.com/x" },
      { icon: "github", link: "https://mmodding.com/github" }
    ],

    search: {
      provider: "local"
    }
  }
})
