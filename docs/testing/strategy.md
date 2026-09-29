# Estratégia de testes

Este documento registra os níveis de teste, responsabilidades e critérios de validação do Fibrosync.

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
# Comandos a definir após a escolha das ferramentas de teste.
```

## Integração contínua

Os testes automatizados farão parte do workflow de CI quando a stack e os comandos do projeto estiverem definidos.
