import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EduPrime.chat",
  description: "tempo para o professor, futuro para os alunos",
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
    ],

    sidebar: [
      {
        text: 'Tutoriais',
        items: [
          { text: 'Pré-Matrícula', link: '/Fluxo do Responsável/pre-matricula'},
          { text: 'Controle de Frequência', link: '/Fluxo do Professor/controle-de-frequencia' },
          { text: 'Registro de Conteúdo', link: '/Fluxo do Professor/registro-de-conteudo' },
          { text: 'Lançamento de Notas', link: '/Fluxo do Professor/lancamento-de-notas' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // Propriedades modificadas para que fique em Português
    outline: {
      label: 'Nesta página'
    },
    returnToTopLabel: 'Voltar ao topo',
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    }
  }
})