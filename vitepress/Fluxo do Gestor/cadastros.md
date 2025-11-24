---
layout: doc
title: Cadastros
---

# Cadastros

Sistema completo para gestão de todos os cadastros da instituição

<div class="cadastros-grid">
  <a href="/Fluxo do Gestor/cadastro-instituicao" class="cadastro-card">
    <h3>🏛️ Instituição</h3>
    <p>Cadastro das informações da instituição de ensino</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-escola" class="cadastro-card">
    <h3>🏫 Escola</h3>
    <p>Gestão das unidades escolares da instituição</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-regra" class="cadastro-card">
    <h3>📋 Regra de Avaliação</h3>
    <p>Configuração dos sistemas de avaliação e frequência</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-curso" class="cadastro-card">
    <h3>🎓 Curso</h3>
    <p>Gestão dos cursos oferecidos pela instituição</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-serie" class="cadastro-card">
    <h3>📚 Série</h3>
    <p>Criação e gestão das séries e anos letivos</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-turma" class="cadastro-card">
    <h3>👥 Turma</h3>
    <p>Criação e gestão de turmas</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-servidor" class="cadastro-card">
    <h3>👨‍💼 Servidor</h3>
    <p>Cadastro de funcionários e servidores</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-professor" class="cadastro-card">
    <h3>👨‍🏫 Professor</h3>
    <p>Gestão do corpo docente</p>
  </a>

  <a href="/Fluxo do Gestor/cadastro-aluno" class="cadastro-card">
    <h3>🎒 Aluno</h3>
    <p>Cadastro e gestão de alunos</p>
  </a>
</div>

<style>
.cadastros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 2rem;
}

.cadastro-card {
  display: block;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s, transform 0.25s;
  text-decoration: none !important;
  color: inherit;
}

.cadastro-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  text-decoration: none !important;
  color: inherit;
}

.cadastro-card h3 {
  margin: 0 0 8px 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.cadastro-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.5;
}

/* Remove qualquer sublinhado dos textos dentro do card */
.cadastro-card * {
  text-decoration: none !important;
}
</style>