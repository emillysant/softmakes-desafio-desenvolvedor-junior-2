# softmakes-desafio-desenvolvedor-junior-2

 ![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Desenvolvedor Fullstack Júnior 2 - Health
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato à vaga de Desenvolvedor Fullstack Júnior 2 na Health Team.

## Instruções
- Faça um fork deste repositório;
- O conjunto mínimo de tecnologias a serem utilizadas são: HTML, CSS, JavaScript e React.js no front-end e Node.js no back-end;
- Crie um passo a passo de como rodar a sua aplicação;
- Após finalizar, submeta um pull request com um comentário informando o seu e-mail de contato e aguarde nossa avaliação.

## Proposta
Você deverá desenvolver um projeto no padrão MVC utilizando Node.js para o back-end e React.js para o front-end com a finalidade de que seja possível listar, visualizar, criar, editar, excluir animais de estimação de uma petshop.
> **Observações:**
> - Você deve utilizar o banco de dados relacional PostgreSQL para esse projeto;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, se é gato ou cachorro e sua respectiva raça; Além do nome e telefone para contato de seu dono.

## Diferenciais
Será considerado como diferenciais a utilização ou o conhecimento nas seguintes tecnologias:
- Express JS
- Sequelize
- Redis
- Firebase Realtime Database
- Firebase Firestore
- Serviços de arquitetura em nuvem do Google Cloud Platform

## Solução

### DOCUMENTAÇÃO DA API 

https://documenter.getpostman.com/view/13917264/UVXgKwmi

### Frontend

Foi criado em React.js usando o booststrap e styled-icons para estilização.
O react-router para criar rotas para as paginas de criação, lista de animais e edição de animais. 

#### Orientação para Iniciar o projeto frontend

Para iniciar a aplicação entre na pasta frontend e rode o comando npm install para as dependencias.
Depois click em start no NPM SCRIPT ou rode o comando 'npm run start' na pasta do projeto

### Backend - REST_API_2

Criado em Node, javascript, express, cors e crypto para gerar dados para os testes. 
A comunicação com banco POSTGRES foi feita usando a biblioteca pg-promise. 
Segui uma arquitetura de software em Camadas e foi criando usando TDD.

#### Orientação para Iniciar o projeto Backend - REST_API_2

Faça o clone do repositório, abra a pasta REST_API_2 e rode npm i para instalar as dependencias do projeto.
Para inicializar, entre na pasta server e rode no terminal 'node server'.
Para rodar o testes tbm na pasta server rode o comando 'npm test'.
Observação: O banco deve esta configurado dentro da pasta server > infra. A tabela petshop.animal deve ja esta criada dentro desse banco conforme modelo da pasta database > create.sql
