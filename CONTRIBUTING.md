# Contributing

Este documento define os padrões básicos para contribuição neste repositório.

Antes de contribuir, consulte:

- [Git Workflow](docs/workflows/git.flow.md)

Para detalhes adicionais sobre arquitetura, ambiente de desenvolvimento e integração com a API (Futuro), consulte a documentação disponível em `docs/`.

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

```bash
npm run lint
npm run test
npm run build
```

O Pull Request não deve introduzir erros de lint, build ou testes.

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

O identificador da tarefa deve acompanhar toda a implementação.

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
