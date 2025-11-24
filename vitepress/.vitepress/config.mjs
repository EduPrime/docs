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
        text: 'Fluxo do Professor',
        collapsed: false,
        items: [
          { text: 'Acesso Professor', link: '/Fluxo do Professor/login' },
          { text: 'Controle de Frequência', link: '/Fluxo do Professor/controle-de-frequencia' },
          { text: 'Registro de Conteúdo', link: '/Fluxo do Professor/registro-de-conteudo' },
          { text: 'Lançamento de Notas', link: '/Fluxo do Professor/lancamento-de-notas' },
        ]
      },
      {
  text: 'Fluxo do Gestor',
  collapsed: false,
  items: [
    { text: 'Acesso Gestor', link: '/Fluxo do Gestor/login-gestor' },
    { text: 'Importador Censo', link: '/Fluxo do Gestor/importa-censo' },
    { text: 'Emissão de Relatórios', link: '/Fluxo do Gestor/emissao-relatorio' },
    {
      text: 'Cadastros',
      collapsed: false, // Começa expandido
      items: [
        { text: 'Instituição', link: '/Fluxo do Gestor/cadastro-instituicao' },
        { text: 'Escola', link: '/Fluxo do Gestor/cadastro-escola' },
        { text: 'Regra de Avaliação', link: '/Fluxo do Gestor/cadastro-regra' },
        { text: 'Curso', link: '/Fluxo do Gestor/cadastro-curso' },
        { text: 'Série', link: '/Fluxo do Gestor/cadastro-serie' },
        { text: 'Turma', link: '/Fluxo do Gestor/cadastro-turma' },
        { text: 'Servidor', link: '/Fluxo do Gestor/cadastro-servidor' },
        { text: 'Professor', link: '/Fluxo do Gestor/cadastro-professor' },
        { text: 'Aluno', link: '/Fluxo do Gestor/cadastro-aluno' }
      ]
    }
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