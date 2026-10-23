# Configuração do ambiente

## Pré-requisitos

| Ferramenta | Versão | Finalidade |
|---|---|---|
| Node.js | 24 LTS | Executar as ferramentas de desenvolvimento e o build |
| npm | Incluído no Node.js | Instalar dependências e executar scripts |

A versão principal do Node.js também está registrada no arquivo `.nvmrc`.

## Instalação

```bash
npm ci
```

O `package-lock.json` deve ser mantido no repositório. O comando `npm ci` garante que o ambiente local e o CI usem exatamente as mesmas versões resolvidas.

## Execução local

```bash
npm run dev
```

O Vite inicia o servidor de desenvolvimento e abre a landing page. Para conferir o resultado de produção:

```bash
npm run build
npm run preview
```

## Verificações

```bash
npm run lint       # valida HTML, CSS e JavaScript
npm run check:links # valida referências a arquivos locais
npm run build      # gera os arquivos de produção em dist/
npm run check      # executa todas as verificações do CI
```

## Integração contínua

O workflow `.github/workflows/ci.yml` executa `npm ci` e `npm run check` em Pull Requests e em pushes para a branch `main`.

## Variáveis de ambiente

O frontend atual não requer variáveis de ambiente.
