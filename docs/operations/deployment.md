# Deploy

## Ambientes

| Ambiente | Origem | Aprovação | URL |
|---|---|---|---|
| Desenvolvimento | Servidor local do Vite | Não aplicável | `http://localhost:5173` |
| Produção | Branch `main` | Regras do ambiente `github-pages` | `https://eujalves.github.io/testeci/` |

## Fluxo

```text
Pull Request
  ↓
CI: lint, referências locais e build
  ↓
Merge ou push na main
  ↓
Build com o caminho base informado pelo GitHub Pages
  ↓
Artifact do GitHub Pages
  ↓
Deploy no ambiente github-pages
```

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` executa o deploy automaticamente em pushes para `main`. Também é possível iniciá-lo manualmente pela opção **Run workflow** na aba **Actions**.

Antes do primeiro deploy, configure o repositório no GitHub:

1. Abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions** como source.
3. Se o ambiente `github-pages` exigir aprovação, autorize o job de deploy quando solicitado.

O workflow obtém o caminho base por meio do `actions/configure-pages`. Assim, o deploy continua funcionando se o repositório for renomeado ou receber um domínio personalizado. Em desenvolvimento local, o Vite usa `/`.

## Rollback

Para reverter uma publicação, reverta o commit problemático na `main` e envie o novo commit. O workflow publicará novamente o último estado válido. Os deployments anteriores também ficam registrados na página **Environments → github-pages** do repositório.

## Jira

Commits associados a uma entrega devem manter a chave `FIB-XXX` para preservar a rastreabilidade entre tarefa, build e deployment.
