# Git Workflow

Este documento define o padrão utilizado pela equipe para criação de branches, commits e Pull Requests.

O objetivo é manter o histórico do repositório legível e facilitar a relação entre código, Pull Requests e tarefas do Jira.

## Exceção durante a estruturação inicial

Enquanto as bases do projeto, do Jira e do Confluence estiverem sendo estruturadas, branches, commits e Pull Requests podem ser criados sem uma chave `FIB`. Referências inexistentes não devem ser inventadas.

Esta exceção deixa de ser aplicada quando a alteração estiver relacionada a uma tarefa registrada no Jira. Nesse caso, a chave correspondente deve acompanhar todo o fluxo.

---

## 1. Fluxo de desenvolvimento

Toda implementação deve partir da branch principal atualizada.

```bash
git checkout main
git pull
```

Em seguida, deve ser criada uma branch específica para a tarefa.

```bash
git checkout -b feat/FIB-123-tela-login
```

Após a implementação:

```bash
git add .
git commit -m "feat(FIB-123): implementar tela de login"
git push -u origin feat/FIB-123-tela-login
```

Depois disso, deve ser aberto um Pull Request para `main`.

---

# 2. Branches

As branches devem seguir o formato:

```text
tipo/JIRA-descricao
```

Exemplo:

```text
feat/FIB-123-tela-login
```

## Tipos

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `refactor` | Refatoração sem mudança de comportamento |
| `style` | Alterações visuais ou de estilo |
| `test` | Adição ou alteração de testes |
| `docs` | Alteração de documentação |
| `chore` | Configurações, dependências ou manutenção |

## Exemplos

```text
feat/FIB-123-tela-login
fix/FIB-210-barra-navegacao-celular
refactor/FIB-321-hook-autenticacao
style/FIB-410-layout-painel
docs/FIB-500-atualizar-readme
```

## Regras

Utilizar:

- letras minúsculas;
- palavras separadas por `-`;
- identificador do Jira;
- descrição curta;
- descrição em português do Brasil;
- sem espaços;
- sem caracteres especiais.

Evitar:

```text
novaTela
feature-login
meu-ajuste
branch-final
teste123
```

Preferir:

```text
feat/FIB-123-tela-login
```

---

# 3. Commits

Os commits seguem o formato:

```text
tipo(JIRA): descrição
```

Exemplo:

```text
feat(FIB-123): implementar tela de login
```

## Tipos

Os mesmos tipos utilizados nas branches devem ser utilizados nos commits.

```text
feat
fix
refactor
style
test
docs
chore
```

## Exemplos

Nova funcionalidade:

```text
feat(FIB-123): implementar formulário de login
```

Correção:

```text
fix(FIB-210): corrigir transbordamento da barra de navegação no celular
```

Refatoração:

```text
refactor(FIB-321): extrair hook de autenticação
```

Estilo:

```text
style(FIB-410): ajustar espaçamento do painel
```

Documentação:

```text
docs(FIB-500): documentar variáveis de ambiente
```

Dependências:

```text
chore(FIB-530): atualizar dependências do eslint
```

---

# 4. Boas práticas de commit

Cada commit deve representar uma alteração lógica.

Evitar commits como:

```text
atualização
fix
alterações
versão final
versão final definitiva
ajustes
coisas
```

O histórico deve permitir entender o que foi alterado sem precisar abrir o código.

Por exemplo, em vez de:

```text
fix(FIB-123): correções
```

utilizar:

```text
fix(FIB-123): tratar credenciais de login inválidas
```

Sempre que possível, evitar colocar várias alterações não relacionadas no mesmo commit.

---

# 5. Pull Requests

O título do Pull Request deve seguir o formato:

```text
[JIRA] descrição
```

Exemplo:

```text
[FIB-123] Implementar tela de login
```

O Pull Request deve explicar o que foi alterado e como a implementação pode ser validada.

---

## Estrutura do Pull Request

O modelo oficial está em [`.github/pull_request_template.md`](../../.github/pull_request_template.md) e é carregado automaticamente pelo GitHub ao abrir um Pull Request.

O template concentra:

- referências ao Jira, Confluence e Figma;
- objetivo e resumo das alterações;
- instruções de teste;
- evidências visuais ou técnicas;
- checklist de validação;
- atualização do changelog, quando aplicável.

Durante a estruturação inicial, o campo do Jira pode ser marcado como não aplicável. Quando existir uma tarefa relacionada, a chave `FIB-XXX` e seu link são obrigatórios.

---

# 6. Screenshots

Pull Requests que alteram a interface devem incluir screenshots.

Sempre que relevante, adicionar pelo menos:

```text
Computador
Celular
```

Mudanças responsivas importantes também podem incluir:

```text
Tablet
```

Screenshots não são obrigatórios para alterações exclusivamente internas, como:

```text
refactor
chore
test
```

---

# 7. Relação com Jira

Toda branch relacionada a uma tarefa deve conter o identificador correspondente.

Exemplo:

```text
FIB-123
```

Esse identificador deve aparecer em:

```text
Jira
 ↓
Branch
 ↓
Commits
 ↓
Pull Request
```

Exemplo completo:

```text
Jira
FIB-123 - Criar tela de login

Branch
feat/FIB-123-tela-login

Commit
feat(FIB-123): implementar formulário de login

Pull Request
[FIB-123] Implementar tela de login
```

Isso permite rastrear uma implementação desde a tarefa até o código.

---

# 8. Antes de abrir um Pull Request

Atualize sua branch em relação à `main` quando necessário.

```bash
git checkout main
git pull

git checkout feat/FIB-123-tela-login
git merge main
```

Resolva eventuais conflitos antes de abrir ou atualizar o Pull Request.

Também execute as verificações disponíveis no projeto.

Exemplo:

```bash
npm run lint
npm run test
npm run build
```

---

# 9. Revisão

Um Pull Request deve ser pequeno o suficiente para que outra pessoa consiga compreender claramente a alteração.

Durante a revisão:

- responder comentários;
- realizar correções na mesma branch;
- adicionar novos commits quando necessário;
- evitar criar outro Pull Request para corrigir o Pull Request atual.

Após aprovação e validação, o Pull Request pode ser integrado à branch principal.

---

# Resumo

Branch:

```text
feat/FIB-123-tela-login
```

Commit:

```text
feat(FIB-123): implementar tela de login
```

Pull Request:

```text
[FIB-123] Implementar tela de login
```

Fluxo:

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
