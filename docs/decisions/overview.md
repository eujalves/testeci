# Decisões de arquitetura

Este diretório centraliza as decisões técnicas relevantes para a arquitetura do frontend do Fibrosync e mantém sua relação com as tarefas do projeto no Jira.

## Fontes relacionadas

| Fonte | Responsabilidade | Link |
|---|---|---|
| Jira | Tarefas e contexto de execução | [Projeto FIB](https://aluno-team-zylgcwkh.atlassian.net/jira/software/projects/FIB/summary) |
| Confluence | Requisitos e documentação funcional | [Espaço do Fibrosync](https://aluno-team-zylgcwkh.atlassian.net/wiki/spaces/F/overview) |
| Figma | Protótipos e decisões de interface | [Time do Fibrosync](https://www.figma.com/files/team/1635721117049360128/all-folders?fuid=1635749553250315535) |
| GitHub | Implementação e revisão do código | Pull Requests do repositório |

## Mapa de decisões

| ADR | Decisão | Status | Jira | Confluence | Figma | Pull Request |
|---|---|---|---|---|---|---|
| — | Nenhuma decisão registrada | — | — | — | — | — |

## Estrutura dos registros

```text
docs/decisions/
├── overview.md
└── NNNN-descricao-da-decisao.md
```

Cada ADR concentra o contexto, a decisão adotada, as alternativas consideradas e suas consequências. O mapa conecta a decisão à tarefa no **Jira**, à documentação no **Confluence**, ao protótipo específico no **Figma**, quando aplicável, e à implementação no **Pull Request**.

As referências de design apontam para o arquivo, a página ou o frame específico do Figma. O link do time funciona apenas como ponto central de acesso.

## Status

| Status | Significado |
|---|---|
| `Proposed` | Decisão em discussão |
| `Accepted` | Decisão aprovada e em uso |
| `Deprecated` | Decisão não recomendada para novas implementações |
| `Superseded` | Decisão substituída por outro ADR |

## Rastreabilidade

```text
Confluence / Figma
  ↓
Jira
  ↓
ADR
  ↓
Pull Request
  ↓
Código
```

## Papel de cada

- O Confluence concentra os requisitos e a documentação funcional.
- O Figma concentra os protótipos e as referências de interface.
- O Jira concentra a tarefa e o contexto de execução.
- O ADR preserva a decisão arquitetural e sua justificativa.
- O Pull Request registra a implementação.
- O código representa o estado atual da decisão no projeto.
