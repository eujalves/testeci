<h1 align="center">Fibrosync</h1>

<p align="center">
  <em>Plataforma <strong>inteligente</strong> para acompanhar pacientes com fibromialgia, com o objetivo de auxiliar nas consultas médicas e no conhecimento da própria doença.</em>
</p>

<p align="center">
  <img src="docs/design/assets/fibrosync.png" alt="Logo do fibrosync" width="20%">
</p>




## Tecnologias

- HTML, CSS e JavaScript puro
- Node.js 24 LTS e npm para as ferramentas de desenvolvimento
- Vite para desenvolvimento local e build de produção
- ESLint, Stylelint e HTML Validate para análise estática

## Execução local

```bash
npm ci
npm run dev
```

Para executar todas as verificações usadas pelo CI:

```bash
npm run check
```

## Documentação

- [Índice da documentação](docs/README.md)
- [Arquitetura](docs/architecture/overview.md)
- [Design](docs/design/overview.md)
- [Decisões de arquitetura](docs/decisions/overview.md)
- [Configuração do ambiente](docs/development/setup.md)
- [Git workflow](docs/workflows/git.flow.md)
- [Estratégia de testes](docs/testing/strategy.md)

## Estrutura do projeto

```text
D Fibrosync/
├── D .github/                             # configurações do GitHub
│   ├── F CODEOWNERS                       # responsáveis pela revisão de cada área
│   └── F pull_request_template.md         # modelo de descrição dos Pull Requests
├── D docs/                                # documentação técnica do projeto
│   ├── D accessibility/
│   │   └── F overview.md                  # diretrizes de acessibilidade
│   ├── D api/
│   │   └── F overview.md                  # relação com a API e seu contrato
│   ├── D architecture/
│   │   └── F overview.md                  # visão geral da arquitetura e componentes
│   ├── D decisions/
│   │   ├── F overview.md                  # mapa das decisões de arquitetura (ADRs)
│   │   └── F template.md                  # modelo para novos ADRs
│   ├── D design/
│   │   ├── D assets/
│   │   │   └── P fibrosync.png            # logo usada na documentação
│   │   └── F overview.md                  # referências de design e identidade visual
│   ├── D development/
│   │   └── F setup.md                     # configuração do ambiente de desenvolvimento
│   ├── D operations/
│   │   └── F deployment.md                # processo de deploy
│   ├── D releases/
│   │   ├── F changelog.md                 # política de uso do CHANGELOG.md
│   │   └── F overview.md                  # ligação entre versões do Jira e releases do GitHub
│   ├── D testing/
│   │   └── F strategy.md                  # estratégia de testes
│   ├── D workflows/
│   │   └── F git.flow.md                  # fluxo de branches, commits e PRs
│   └── F README.md                        # índice da documentação
├── D public/                              # arquivos estáticos servidos ao navegador
│   ├── D assets/                          # recursos estáticos compartilhados
│   │   ├── D css/
│   │   │   └── F tokens.css              # variáveis de estilo compartilhadas
│   │   └── D img/                         # imagens usadas nas páginas
│   │       ├── P ap.png
│   │       ├── P face.png
│   │       ├── P g.png
│   │       ├── P ilustracao-dor.png
│   │       ├── P logo_icone.png
│   │       ├── P logo_texto.png
│   │       └── P logo-removebg-preview.png
│   └── D views/                           # uma pasta por tela
│       ├── D cadastro/
│       │   ├── F index.html
│       │   ├── F script.js
│       │   └── F style.css
│       ├── D dados-complementares/
│       │   ├── F index.html
│       │   ├── F script.js
│       │   └── F style.css
│       ├── D landing-page/
│       │   ├── F index.html
│       │   └── F style.css
│       └── D login-paciente/
│           ├── F index.html 
│           ├── F script.js
│           └── F style.css
├── D src/                                 # servidor (caso seja possivel ) :(
│   ├── F estrutura.txt                    # anotações sobre a estrutura do projeto
│   ├── F routes.js                        # definição das rotas
│   └── F server.js                        # codigo do servidor
├── F .gitignore                           # arquivos ignorados pelo Git
├── F CHANGELOG.md                         # histórico de mudanças do projeto
├── F CONTRIBUTING.md                      # guia de contribuição
├── F README.md                            # apresentação do projeto
└── F todo.md                              # tarefas pendentes (não versionado)
```
_gerado por [edr](https://github.com/solidiquis/erdtree)_


## Gestão do projeto

O acompanhamento das tarefas, a documentação funcional e os protótipos estão distribuídos entre as seguintes fontes:

- [Jira](https://aluno-team-zylgcwkh.atlassian.net/jira/software/projects/FIB/summary): backlog, tarefas, bugs e acompanhamento da implementação;
- [Confluence](https://aluno-team-zylgcwkh.atlassian.net/wiki/spaces/F/overview): requisitos e documentação funcional;
- [Figma](https://www.figma.com/files/team/1635721117049360128/all-folders?fuid=1635749553250315535): protótipos e referências de interface. 
