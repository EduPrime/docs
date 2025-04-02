import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Minha Documentação",
  description: "Documentação do projeto",
  vite: {
    // Configuração para resolver o problema de computed não definido
    optimizeDeps: {
      include: ['vue']
    }
  },
  // Você pode adicionar mais configurações aqui conforme necessário
})
