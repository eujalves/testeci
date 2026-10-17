# Contributing

Este documento resume os padrões de contribuição do Fibrosync. O fluxo completo está em [Git Workflow](docs/workflows/git.flow.md) e a política de releases está em [Política do changelog](docs/releases/changelog.md).

Antes de contribuir, consulte também:

- [Jira do Fibrosync](https://aluno-team-zylgcwkh.atlassian.net/jira/software/projects/FIB/boards/34/backlog): tarefas, bugs e acompanhamento do trabalho;
- [Confluence do Fibrosync](https://aluno-team-zylgcwkh.atlassian.net/wiki/x/sQAw): requisitos e documentação funcional;
- [Figma do Fibrosync](https://www.figma.com/files/team/1635721117049360128/all-folders?fuid=1635749553250315535): protótipos e referências de interface.

## Fluxo de desenvolvimento

Todo trabalho deve estar associado a um item do Jira. Use a chave em letras maiúsculas, como `FIB-123`, na branch, em cada commit e no título do Pull Request. Se o item ainda não existir, crie-o antes de iniciar o desenvolvimento; não invente uma chave.

Atualize a branch principal:

```bash
git checkout main
git pull
```

Crie a branch no formato `FIB-XXX-tipo/descricao-curta`:

```bash
git checkout -b FIB-123-feat/tela-login
```

Após realizar uma alteração lógica:

```bash
git add .
git commit -m "FIB-123 feat: implementar tela de login"
git push -u origin FIB-123-feat/tela-login
```

Depois, abra um Pull Request para `main` com o título:

```text
FIB-123 Implementar tela de login
```

O envio da branch e dos commits para o repositório conectado é necessário para que o Jira reconheça e sincronize os dados de desenvolvimento.

## Antes de abrir um Pull Request

Certifique-se de que sua branch está atualizada:

```bash
git checkout main
git pull

git checkout FIB-123-feat/tela-login
git merge main
```

Execute as verificações disponíveis no projeto. O Pull Request não deve introduzir erros de lint, build ou testes.

Preencha o template do Pull Request, incluindo:

- o link do item no Jira;
- o link do requisito no Confluence, quando aplicável;
- o link do arquivo, página ou frame no Figma, quando aplicável;
- instruções de teste e evidências;
- a atualização de `[Não publicado]` no `CHANGELOG.md`, quando relevante para uma release.

## Revisão

Durante a revisão de um Pull Request:

- responda aos comentários realizados;
- faça as correções na mesma branch;
- envie novos commits com a mesma chave do Jira;
- mantenha o Pull Request focado em uma única tarefa ou objetivo.

Evite misturar alterações não relacionadas no mesmo Pull Request.

## Resumo

```text
Jira:         FIB-123 - Criar tela de login
Branch:       FIB-123-feat/tela-login
Commit:       FIB-123 feat: implementar tela de login
Pull Request: FIB-123 Implementar tela de login
```

```text
Jira
  ↓
Branch
  ↓
Commits
  ↓
Pull Request
  ↓
main
```
