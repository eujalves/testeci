<!-- esqueleto de arquivo, ainda tem que definir com o a prof como será a entrega de dados -->
# Estratégia de testes

// A definir

## Níveis de teste

| Nível | Objetivo | Ferramenta | Status |
|---|---|---|---|
| Unitário | Validar unidades isoladas | A definir | Planejado |
| Integração | Validar a colaboração entre componentes | A definir | Planejado |
| Ponta a ponta | Validar fluxos principais do usuário | A definir | Planejado |

## Critérios por alteração

| Tipo de alteração | Validação esperada |
|---|---|
| Regra de negócio | Testes unitários e de integração aplicáveis |
| Integração externa | Cenários de sucesso, erro e indisponibilidade |
| Interface | Estados, responsividade e acessibilidade |
| Correção de bug | Teste que reproduza a falha corrigida |

## Execução

```bash
npm run lint
npm run build
npm run check
```

## Integração contínua

O workflow de CI valida HTML, CSS e JavaScript e executa o build de produção em cada Pull Request e push para `main`. Testes unitários e ponta a ponta serão adicionados quando o projeto tiver regras de negócio e fluxos estáveis para automatizar.
