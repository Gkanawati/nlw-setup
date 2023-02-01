<p align="center">
  <img alt="Habits" src="https://user-images.githubusercontent.com/87530595/216034411-11a262f1-ecf2-4eae-8929-29f4a52462fd.png" />
</p>

## :rocket: Projeto

Aplicação para criar uma rotina de hábitos e começar 2023 com tudo de forma organizada!

Esta é uma aplicação completa construída durante o evento NLW SETUP da Rocketseat, trata-se de uma aplicação para criar seus hábitos do dia a dia e poder controlar seus a fazeres durante o dia.

A plataforma foi construída utilizando Vite para a construção do frontend e NodeJs com Prisma e SQLite no banco de dados para a construção das APIs consumidas pela plataforma. Os dados persistidos pelo site são variáveis e recebem todas as informações via API do server.

Ao entrar na versão web, vemos na tela uma tabela com os dias do ano e os dias em qua foram realizadas as tarefas, estarão destacadas em tons de roxo, sendo os mais claros representando maios atividade. Ao clicar sobre um dia é aberto um Popover com os hábitos do dia. Ao clicar sobre o botão novo, é aberto um popup para criação de um novo hábito, basta dar um titulo e selecionar os dias que irá praticar. 

No app, o usuário é direcionado à pagina inicial do App, onde é possível ter uma visão geral dos seus dias. Nessa tela ao clicar sobre um dia você é direcionado a uma tela para controle dos seus hábitos do dia e ao clicar no botão de Novo, você poderá criar um novo hábito para a sua rotina.

As principais bibliotecas JS utilizadas nesse projeto são: Prisma para a construção da API e banco de dados afim de possibilitar a conexão do Node com o SQLite (o nosso banco de dados), TailwindCSS para a estilização da plataforma web, e Radix Ui  uma biblioteca fornece os componentes pré prontos para utilização em React. 📚 

O maior desafio desse projeto para mim, foi a construção do backend para lidar com os relacionamentos do banco de dados entre os dias da semana e os hábitos, que são muito para muito. E com certeza um grande desafio é lidar com as datas, mas nesse projeto foi utilizado uma biblioteca 'dayjs' para auxiliar e muito a lidar e comparar as datas.

## :bulb: Tecnologias:

- `Typescript`
- `React`
- `Vite`
- `Tailwindcss`
- `NativeWind`
- `React Native`
- `Expo`
- `Node JS`
- `SQLite`
- `Prisma`
- `Fastify`

## :gear: Executar o projeto:

Em todos os projetos, ao acessar a pasta, é preciso baixar os pacotes com o gerenciador de sua preferencia.

Acesse a documentação de cada projeto:

- [Backend](./server/README.md)
- [Web](./web/README.md)
- [Mobile](./mobile/README.md)

## :computer::iphone: Telas

![habits-web](https://user-images.githubusercontent.com/87530595/216033836-ae962aa1-6989-4ff7-856d-5996ba749d22.png)

![habits-web](https://user-images.githubusercontent.com/87530595/216033879-e3d76526-4225-4ebf-9df7-b0f0332d6051.png)

![habits-web](https://user-images.githubusercontent.com/87530595/216033920-e2cbcda7-d073-4f19-be54-80fd5896e4df.png)

<div align='center' style="justify-content: center; align-items: center;">

<img src='https://user-images.githubusercontent.com/87530595/216033940-950973ea-f232-48b0-a74b-b67439a98f53.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/216033942-8b6137b3-3737-4555-8d18-5ef959a2d694.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/216033948-998db9ce-6708-466f-af4f-e357d0b708e5.png' height='450' />

<br>
<br>

<img src='https://user-images.githubusercontent.com/87530595/216033952-4b0534f6-4b2b-4284-86bd-166bf73156a6.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/216033962-c57cbe13-26e8-4260-b258-5a5f4b5a711e.png' height='450' />

<img src='https://user-images.githubusercontent.com/87530595/216033957-00d93feb-8171-4e05-b020-f6e3dbad0400.png' height='450' />

</div>

## 💽 Schema do Banco de Dados

![NLW-Setup-database](https://user-images.githubusercontent.com/87530595/216034213-2e782b22-2123-4f7c-8e9e-b4e687024383.svg)
