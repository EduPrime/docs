import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EduPrime.chat",
  description: "tempo para o professor, futuro para os alunos",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Início', link: '/' },
    ],

    sidebar: [
      {
        text: 'Telas',
        items: [
          { text: 'Acesso Simplificado', link: '/markdown-examples#acessando-o-eduprime' },
          { text: 'Controle de Frequência', link: '/Fluxo do Professor/controle-de-frequencia' },
          { text: 'Registro de Conteúdo', link: '/Fluxo do Professor/registro-de-conteudo' },
          { text: 'Lançamento de Notas', link: '/Fluxo do Professor/lancamento-de-notas' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
