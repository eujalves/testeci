<h1 align="center">Fibrosync</h1>

<p align="center">
  <em>Plataforma <strong>inteligente</strong> para acompanhar pacientes com fibromialgia, com o objetivo de auxiliar nas consultas médicas e no conhecimento da própria doença.</em>
</p>

<p align="center">
  <img src="docs/design/assets/fibrosync.png" alt="Logo do fibrosync" width="20%">
</p>




## Tecnologias

- html, css e js puro
- node 

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
📁 Fibrosync/
├── 📁 .github/                             # configurações do GitHub
│   ├── 📄 CODEOWNERS                       # responsáveis pela revisão de cada área
│   └── 📄 pull_request_template.md         # modelo de descrição dos Pull Requests
├── 📁 docs/                                # documentação técnica do projeto
│   ├── 📁 accessibility/
│   │   └── 📄 overview.md                  # diretrizes de acessibilidade
│   ├── 📁 api/
│   │   └── 📄 overview.md                  # relação com a API e seu contrato
│   ├── 📁 architecture/
│   │   └── 📄 overview.md                  # visão geral da arquitetura e componentes
│   ├── 📁 decisions/
│   │   ├── 📄 overview.md                  # mapa das decisões de arquitetura (ADRs)
│   │   └── 📄 template.md                  # modelo para novos ADRs
│   ├── 📁 design/
│   │   ├── 📁 assets/
│   │   │   └── 🖼️ fibrosync.png            # logo usada na documentação
│   │   └── 📄 overview.md                  # referências de design e identidade visual
│   ├── 📁 development/
│   │   └── 📄 setup.md                     # configuração do ambiente de desenvolvimento
│   ├── 📁 operations/
│   │   └── 📄 deployment.md                # processo de deploy
│   ├── 📁 releases/
│   │   ├── 📄 changelog.md                 # política de uso do CHANGELOG.md
│   │   └── 📄 overview.md                  # ligação entre versões do Jira e releases do GitHub
│   ├── 📁 testing/
│   │   └── 📄 strategy.md                  # estratégia de testes
│   ├── 📁 workflows/
│   │   └── 📄 git.flow.md                  # fluxo de branches, commits e PRs
│   └── 📄 README.md                        # índice da documentação
├── 📁 public/                              # arquivos estáticos servidos ao navegador
│   ├── 📁 img/                             # imagens usadas nas páginas
│   └── 📁 pages/                           # uma pasta por tela
│       ├── 📁 cadastro-p1/
│       │   ├── 📄 index.html
│       │   ├── 📄 script.js
│       │   └── 📄 style.css
│       ├── 📁 cadastro-p2/
│       │   ├── 📄 index.html
│       │   ├── 📄 script.js
│       │   └── 📄 style.css
│       ├── 📁 landing-page/
│       │   ├── 📄 index.html
│       │   └── 📄 style.css
│       └── 📁 login-paciente/
│           ├── 📄 index.html
│           ├── 📄 script.js
│           └── 📄 style.css
├── 📁 src/                                 # código do servidor (Node)
│   ├── 📄 route.js                         # definição das rotas
│   └── 📄 server.js                        # inicialização do servidor
├── 📄 .gitignore                           # arquivos ignorados pelo Git
├── 📄 CHANGELOG.md                         # histórico de mudanças do projeto
├── 📄 CONTRIBUTING.md                      # guia de contribuição
├── 📄 README.md                            # apresentação do projeto
└── 📄 todo.md                              # tarefas pendentes
```


## Gestão do projeto

O acompanhamento das tarefas, a documentação funcional e os protótipos estão distribuídos entre as seguintes fontes:

- [Jira](https://aluno-team-zylgcwkh.atlassian.net/jira/software/projects/FIB/summary): backlog, tarefas, bugs e acompanhamento da implementação;
- [Confluence](https://aluno-team-zylgcwkh.atlassian.net/wiki/spaces/F/overview): requisitos e documentação funcional;
- [Figma](https://www.figma.com/files/team/1635721117049360128/all-folders?fuid=1635749553250315535): protótipos e referências de interface. 
