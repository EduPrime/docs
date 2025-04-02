---
outline: deep
---

# Funcionalidades Avançadas do EduPrime

Esta página demonstra as funcionalidades avançadas do EduPrime para professores que desejam otimizar sua experiência com o sistema.

## Registro de Avaliações Numéricas

Registrar avaliações numéricas no EduPrime é um processo simples e eficiente que permite acompanhar o desempenho dos alunos de forma organizada.

<script setup lang="ts">
import { ref, computed } from 'vue'
const notaAluno = ref(7.5)
const statusAprovacao = computed(() => {
  return notaAluno.value >= 6 ? 'Aprovado' : 'Recuperação'
})
</script>

### Simulador de Notas

<div class="nota-demo">
  <p>
    <span>Nota atual: </span>
    <input 
      type="number" 
      v-model="notaAluno" 
      min="0" 
      max="10" 
      step="0.5"
    />
  </p>
  <p>Status: <strong>{{ statusAprovacao }}</strong></p>
</div>

### Como Registrar Avaliações

1. Acesse a seção "Avaliações" no menu principal
2. Selecione a turma e disciplina 
3. Escolha o período avaliativo
4. Digite as notas para cada aluno
5. Finalize clicando em "Salvar"

## Registro de Frequência Detalhado

O EduPrime da Softagon oferece dois métodos diferentes para registro de frequência, adaptados às necessidades específicas de cada nível de ensino.

### Educação Infantil e Fundamental I

Simplifique o registro de frequência na Educação Infantil e no Fundamental I com uma interface intuitiva:

```md
1. Acesse "Frequência" no menu principal
2. Selecione a turma desejada
3. Escolha a data para registro
4. Marque os alunos ausentes com um clique
5. Finalize o registro
```

### Fundamental II

Para o Fundamental II, o sistema oferece registro por período/aula:

```js
// Sequência de registro - Fundamental II
function registrarFrequencia() {
  selecionarTurma()
  definirData()
  escolherAula() // Específico para Fundamental II
  marcarPresencaOuAusencia()
  adicionarObservacoes()
  finalizar()
}
```

## Integração com a BNCC

O EduPrime permite vincular facilmente seu conteúdo às habilidades da Base Nacional Comum Curricular:

1. Durante o registro de conteúdo, clique em "Vincular Habilidades"
2. Pesquise por código ou descrição da habilidade
3. Selecione as habilidades trabalhadas
4. Confirme a seleção

Isso possibilita relatórios avançados de acompanhamento curricular e garante o alinhamento com as diretrizes nacionais.

## Recursos Adicionais

Consulte a documentação completa para explorar todas as funcionalidades disponíveis e como utilizá-las para otimizar sua rotina docente.
