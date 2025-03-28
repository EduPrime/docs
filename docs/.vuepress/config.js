import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'EduPrime.chat',
  description: 'Mais tempo para o professor',
  base: '/docs/',  // Adiciona base URL para GitHub Pages
  bundler: viteBundler(),
  theme: defaultTheme(),
})