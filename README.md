This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Desafio Concrete - Raywam Shinkoda

Implementação de uma aplicação client-side, que consulta a API do GitHub e mostra os repositórios de um determinado usuário.

### GitHub API v3 (RESTful)

Foi utilizada a versão 3, RESTful do Github:

* Detalhes de um usuário: https://api.github.com/users/{username}
* Repositórios de um usuário: https://api.github.com/users/{username}/repos

### Requisitos atendidos:

* Eu, como usuário, desejo buscar por um usuário do GitHub;
* Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
* Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;

### Definição de pronto

* O layout foi implementado de acordo com a especificação do Zeplin.io
* Nessa aplicação foi utilizada o framework `React.js`.
* Uso de rotas.

### Observações

* Foi utilizado design de fluxo de trabalho Git Flow.
* A aplicação está hospedada na [Netlify](https://distracted-haibt-cbf0c6.netlify.app/)

## Testes Unitários

* Rodei npm eject para conseguir modificar os scripts de configuração dos testes.
* Foi utilizando `Jest` e `Enzyme` para testar a parte de components.

### App.test.js

Para verficação se o component é renderizado corretamente.

### Result.test.js

Para verificação se o component é renderizado corretamente.
Para verificação se a função `getLocationSearch` retorna o username do usuário da query url corretamente.
Para verificação se a função `orderByStargazers` ordena os repositories descrecentemente.