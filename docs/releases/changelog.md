# Política do changelog

O `CHANGELOG.md` comunica as alterações relevantes de cada versão do Fibrosync. Ele **não substitui** o Jira, o Confluence, os Pull Requests ou o histórico de commits.

O formato adotado é baseado no [Keep a Changelog](https://keepachangelog.com/en/2.0.0/) e utiliza [Versionamento Semântico](https://semver.org/).

## Fontes de informação

| Fonte | Responsabilidade |
|---|---|
| Jira | Tarefa, critérios de aceite, prioridade e andamento |
| Confluence | Requisitos e contexto funcional |
| Figma | Protótipos e decisões de interface |
| Pull Request | Implementação, testes e revisão |
| Changelog | Resultado relevante entregue em cada versão |

## Estrutura

As mudanças ainda não publicadas permanecem no início do arquivo:

```md
## [Não publicado]
```

As entradas são agrupadas nas categorias aplicáveis:

| Categoria | Uso |
|---|---|
| `Adicionado` | Nova funcionalidade |
| `Alterado` | Mudança em um comportamento existente |
| `Descontinuado` | Funcionalidade que será removida futuramente |
| `Removido` | Funcionalidade efetivamente removida |
| `Corrigido` | Correção de comportamento incorreto |
| `Segurança` | Correção de vulnerabilidade ou melhoria de segurança |

Categorias sem entradas são omitidas.

## Entradas

Cada entrada descreve o resultado da alteração de forma clara e concisa. No fluxo regular, a entrada referencia a tarefa do Jira e o Pull Request correspondente.

```md
- Adiciona autenticação por e-mail e senha ([FIB-15](https://aluno-team-zylgcwkh.atlassian.net/browse/FIB-15), [#12](https://github.com/voidgateway/Fibrosync/pull/12)).
```

Uma referência ao Confluence é incluída quando o requisito ou contexto funcional for necessário para compreender a mudança:

```md
- Adiciona recuperação de senha conforme o [requisito de autenticação](LINK_DO_CONFLUENCE) ([FIB-28](https://aluno-team-zylgcwkh.atlassian.net/browse/FIB-28), [#19](https://github.com/voidgateway/Fibrosync/pull/19)).
```

O Figma é referenciado somente quando o protótipo específico for relevante para a entrega.

## Estruturação inicial

Enquanto as bases do projeto, do Jira e do Confluence estiverem sendo estruturadas, as entradas podem ser registradas sem uma chave `FIB` ou um Pull Request. Referências não devem ser inventadas para preencher essa ausência.

```md
### Adicionado

- Estrutura inicial de governança e documentação do projeto.
```

## Critério de inclusão

O changelog registra mudanças relevantes para usuários, operação ou manutenção do produto, como:

- novas funcionalidades;
- mudanças de comportamento;
- correções de bugs;
- remoções e descontinuações;
- mudanças incompatíveis;
- correções de segurança.

Não são registradas individualmente:

- mensagens de commit ou merges;
- formatação de código;
- movimentações internas de arquivos;
- refatorações sem efeito relevante;
- atualizações de dependências sem impacto perceptível;
- detalhes já documentados no Jira ou no Pull Request.

## Mudanças incompatíveis

Uma mudança incompatível é destacada na própria entrada:

```md
### Alterado

- **Quebra de compatibilidade:** altera o formato das respostas de autenticação ([FIB-80](https://aluno-team-zylgcwkh.atlassian.net/browse/FIB-80), [#48](https://github.com/voidgateway/Fibrosync/pull/48)).
```

## Versionamento

| Versão | Uso |
|---|---|
| `MAJOR` | Mudança incompatível |
| `MINOR` | Nova funcionalidade compatível |
| `PATCH` | Correção compatível |

Versões `0.y.z` representam o período inicial de desenvolvimento, antes da estabilização da interface pública do projeto.

## Publicação de uma versão

No momento da release:

1. As entradas de `[Não publicado]` são movidas para uma seção com a versão e a data no formato `AAAA-MM-DD`.
2. Uma nova seção vazia de `[Não publicado]` é mantida no início do arquivo.
3. A tag correspondente é criada no GitHub usando o prefixo `v`.
4. A GitHub Release referencia a versão planejada no Jira.

```md
## [0.1.0] - 2026-10-15
```

Após a primeira release, referências de comparação são mantidas no final do `CHANGELOG.md`:

```md
[Não publicado]: https://github.com/voidgateway/Fibrosync/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/voidgateway/Fibrosync/releases/tag/v0.1.0
```

## Responsabilidades

- o responsável pela alteração adiciona a entrada no mesmo Pull Request;
- o revisor confirma se a entrada representa o resultado entregue;
- o responsável pela release organiza as entradas, define a versão e cria a tag;
- mudanças sem relevância para a release são marcadas como não aplicáveis no checklist do Pull Request.
