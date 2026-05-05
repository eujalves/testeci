# FibroSync Mobile

Um aplicativo mobile/web voltado para pacientes com fibromialgia, ajudando a monitorar suas dores, sono, energia e identificar fatores contribuintes para as crises.

## Estrutura do Projeto

O projeto foi organizado para facilitar a implementação do backend, seguindo uma separação clara de responsabilidades:

- **HTML (Páginas):**
  - `index.html`: Dashboard principal com resumo diário e recomendações.
  - `check-in.html`: Tela para realizar o check-in diário de sintomas (dor, sono, energia, etc).
  - `historico.html`: Calendário e lista de histórico de check-ins.
  - `analise.html`: Gráficos e análises de correlação entre sintomas e fatores climáticos/hábitos.
  - `perfil.html`: Perfil do usuário e configurações.

- **CSS (`/css`):**
  - Cada página possui seu respectivo arquivo CSS (ex: `styles-index.css`, `styles-check.css`), isolando o estilo.

- **JS (`/js`):**
  - O diretório `js/` será utilizado para a lógica do frontend, integrações com o backend via Fetch/Axios. Atualmente, contém scripts básicos para navegação e interatividade da UI.

## Próximos Passos (Integração Backend)

1. **Configurar API RESTful**: Preparar as rotas do backend (Node.js, Python, Java, etc) para receber os dados do frontend.
2. **Autenticação**: Implementar o login e proteger as páginas para que apenas usuários logados acessem o dashboard.
3. **Banco de Dados**: Modelar as tabelas para Usuários e Check-ins (data, níveis de dor, humor, clima, qualidade do sono).
4. **Integração no Frontend**: Substituir os dados estáticos do HTML por requisições dinâmicas para o backend (usando `fetch` ou biblioteca similar no JavaScript).

## Como rodar localmente

Basta abrir o arquivo `index.html` em seu navegador ou utilizar a extensão Live Server no VSCode.
