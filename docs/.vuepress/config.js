import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  title: 'EduPrime.chat',
  description: 'Mais tempo para o professor',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      {
        text: 'Início',
        link: '/',
      },
    ],
  }),
  // Configure o diretório fonte
  sourceDir: 'docs',
})