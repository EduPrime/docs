import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'pt-BR',
    title: 'EduPrime.chat',
    description: 'Mais tempo para o professor',
  bundler: viteBundler(),
  theme: defaultTheme(),
})