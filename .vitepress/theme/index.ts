// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import {Theme, useData} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { page, frontmatter } = useData();
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-before": frontmatter.value.title ? h("h1", { class: "vp-doc-header" }, frontmatter.value.title) : null
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
