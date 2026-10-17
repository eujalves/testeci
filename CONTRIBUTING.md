# Contributing

Este documento define os padrões básicos para contribuição neste repositório.

Antes de contribuir, consulte:

- [Git Workflow](docs/workflows/git.flow.md)
- [Política do changelog](docs/releases/changelog.md)

Para detalhes adicionais sobre arquitetura, ambiente de desenvolvimento e integração com a API (Futuro), consulte a documentação disponível em `docs/`.

A responsabilidade pela documentação é do [confluence](https://aluno-team-zylgcwkh.atlassian.net/wiki/x/sQAw).
o [Jira](https://aluno-team-zylgcwkh.atlassian.net/jira/software/projects/FIB/boards/34/backlog?atlOrigin=eyJpIjoiOGZhYzc0ZDFmZWUwNDdiYzk2ZTM4N2VmYmZiYzIxZjIiLCJwIjoiaiJ9) organiza o fluxo de trabalho.

---

## Fluxo de desenvolvimento

Antes de iniciar uma nova tarefa:

```bash
git checkout main
git pull
```

Crie uma branch específica para a tarefa:

```bash
git checkout -b feat/FIB-15-tela-login
```

Após realizar as alterações:

```bash
git add .
git commit -m "feat(FIB-15): implementar tela de login"
git push -u origin feat/FIB-15-tela-login
```

Depois, abra um Pull Request para a branch `main`.

---

## Antes de abrir um Pull Request

Certifique-se de que sua branch está atualizada:

```bash
git checkout main
git pull

git checkout feat/FIB-15-tela-login
git merge main
```

Execute também as verificações disponíveis no projeto:

(ainda a ser decidido)

O Pull Request não deve introduzir erros de lint, build ou testes.

Alterações relevantes para uma release devem atualizar a seção `[Não publicado]` do `CHANGELOG.md`. Durante a estruturação inicial, referências inexistentes do Jira ou de Pull Requests não devem ser inventadas.

---

## Revisão

Durante a revisão de um Pull Request:

- responda aos comentários realizados;
- faça as correções na mesma branch;
- envie novos commits quando necessário;
- mantenha o Pull Request focado em uma única tarefa ou objetivo.

Evite misturar alterações não relacionadas no mesmo Pull Request.

---

## Relação com o Jira

O identificador da tarefa deve acompanhar toda implementação associada a um item registrado no Jira. Alterações pertencentes à estruturação inicial são a exceção temporária a essa regra.

Exemplo:

```text
Jira
FIB-15 - Criar tela de login

Branch
feat/FIB-15-tela-login

Commit
feat(FIB-15): implementar tela de login

Pull Request
[FIB-15] Implementar tela de login
```

Isso facilita o rastreamento entre requisito, implementação e histórico do código.

---

## Resumo

### Branch

```text
feat/FIB-15-tela-login
```

### Commit

```text
feat(FIB-15): implementar tela de login
```

### Pull Request

```text
[FIB-15] Implementar tela de login
```

Fluxo esperado:

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
