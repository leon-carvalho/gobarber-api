<h1 align="center">
  <img src="./github-docs/logo.svg"></img>
</h1>

<h4 align="center"> Bootcamp GoStack 11 🚀</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leon-carvalho/gobarber-api?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leon-carvalho/gobarber-api">

  <a href="https://github.com/leon-carvalho/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leon-carvalho/gobarber-api">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </a>
</p>

## 💻 Sobre o projeto

**GoBarber** - Aplicação para agendar e gerenciar serviços de beleza, onde prestadores de serviços podem se cadastrar, e usuários poderão marcar agendamentos com estes provedores.

## 🚀 Como rodar este projeto?

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js][nodejs] - para executar JavaScript fora do navegador
- [Docker][docker] - rodar as imagens do banco de dados
- [NPM] ou [Yarn] para instalar as dependências do projeto
- [Git](https://git-scm.com) - caso queira clonar o projeto no GitHub (Você pode simplesmente fazer o dowload pelo GitHub caso ache melhor)
- Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

###  Rodando o projeto

```bash
# Clone este repositório
$ git clone https://github.com/leon-carvalho/gobarber-api

# Acesse a pasta do projeto no terminal/cmd
$ cd gobarber-api

# Instale as dependências
$ yarn
# Ou use NPM se preferir
$ npm install

# Crie a imagem Docker 🐳 do banco de dados com base no arquivo docker-compose.yml
# Serão criadas imagens dos bancos: PostgreSQL, MongoDb e Redis
$ docker-compose up -d

# Rode as migrations para o banco de dados
$ yarn typeorm migration:run

# Execute os testes da aplicação com o comando
$ npm run test

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server
# O servidor inciará na porta:3333 - acesse http://localhost:3333

# Gere a build da aplicação com o comando:
$ npm run build
```

## 🛤 Rotas

Você pode acessar as rotas no Insomnia clicando no botão abaixo:

<a href="https://insomnia.rest/run/?label=GoBarber&uri=https%3A%2F%2Fgithub.com%2Fleon-carvalho%2Fgobarber-api%2Fblob%2Fmaster%2Finsomnia-gobarber.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

## 🛠 Tecnologias

Principais ferramentas usadas na construção do projeto:

- [Node.js][nodejs]
- [Express][express]
- [TypeScript][typescript]
- [Jest][jest]

## 📚 O que pude estudar desenvolvendo esta aplicação?**
- TypeScript
- Autenticação JWT
- Filas com Redis
- Envio de e-mails
- Validação de dados
- Injeção de dependência
- Geração de Hash de senha
- Utilizar imagens Docker
- Upload de arquivos no Node
- Trabalhar com datas e fusos
- Utilização de banco de dados SQL
- Utilização de banco de dados NoSQL
- Criação de testes unitários com Jest
- Domain Driven Design (DDD)
- Test Driven Design (para os services da aplicação)

## 🤔 Como contribuir para o projeto?
1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 👏 Agradecimentos
- [Time da Rocketseat][rs]
- [Diego Fernandes, CTO at Rocketseat][diego3g]

## ✍🏽 Autores

Feito com ❤️ por Leonardo Carvalho 

GitHub - [@leon-carvalho](https://github.com/leon-carvalho/)

Sinta-se livre para [entrar em contato!](https://www.linkedin.com/in/leonardo-dev/)

## 📝 Licença
Este projeto esta sobe a licença MIT. Veja a [LICENÇA](./LICENSE) para saber mais.

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[express]: https://expressjs.com/pt-br/
[typescript]: https://www.typescriptlang.org/
[jest]: https://www.jestjs.io
[supertest]: https://github.com/visionmedia/supertest
[ts-node]: https://www.npmjs.com/package/ts-node
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[diego3g]: https://github.com/diego3g
[docker]: https://www.docker.com/
