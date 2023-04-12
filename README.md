# Colab - Lista de usuários

Esta é uma aplicação WEB que lista um conjunto de usuários consumindo a API [Random User](https://randomuser.me/). Esta aplicação foi criada para o processo seletivo do Colab.

![Lista de usuários](/public/images/colab-lista-de-usuarios-users.PNG)

![Detalhes do usuário](/public/images/colab-lista-de-usuarios-user-details.PNG)

## Tecnologias utilizadas

Para esta aplicação foram utilzadas as seguintes tecnologias:
- [NodeJS](https://nodejs.org/en): Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de rede escaláveis, permintindo a execução de código JavaScript fora do navegador.
- [AdonisJS](https://adonisjs.com/): AdonisJS é um FrameWork de back-end para criar aplicativos da Web dinâmicos orientados a dados.
- [DaisyUI](https://daisyui.com/): Um plug-in gratuito para Tailwind CSS, utilizado para fazer os componentes HTML e CSS da aplicação.

## Organização do projeto

O FrameWork Back-End AdonisJS permite o uso do padrão [MVC](https://legacy.adonisjs.com/docs/3.2/mvc-pattern) (_Model_, _View_ e _Controller_) para construir o sistema. Aqui, foram utilizados os componentes _Controllers_ e _Views_. O _AdonisRouter_ é responsável por lidar com as requisições HTTP, passando-as para o _Controller_. O componente _Models_ não foi utilizado, pois não foi realiazado um acesso a um Banco de Dados (os dados foram consumidos pela _API_).

![Arquitetura MVC do AdonisJS](https://res.cloudinary.com/adonisjs/image/upload/v1472842310/MVC-Flow-Chart_ccz2zb.jpg)

- _Routes_ e _Controllers_

As rotas estão definidas em ```start/routes.ts```. Dentro da pasta ```Controllers``` é possível encontrar o arquivo que define as funções de controle do Usuário que definirá as funções executadas quando a rota for chamada. Uma única rota foi criada para a função ```show``` do controlador ```UsersController.ts```

- _Views_

Na pasta ```resources/views``` encontram-se as pastas com arquivos de HiperTexto em ```.edge``` da aplicação. Foi utilizado o plugin CSS DaisyUI baseado em Tailwind para a criação dos componentes HTML e CSS. Os arquivos com a listagem de usuários e os detalhes do usuário estão na pasta ```resources/views/users```. Na pasta ```resources/views/layouts```, encontra-se o arquivo de _layout_ ```main.edge```. 

## Padrões de Commits

Para a criação das branchs e commits, foi utilizado o padrão fornecido pelo artigo [_Conventional Commits Pattern_](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657) e os principais tipos foram:

- ```feat```: para features adicionadas ao projeto.
- ```docs```: para mudanças na documentação do projeto.

## Executar

Para executar localmente em sua máquina:

1. Clone os arquivos deste repositório.
2. Crie um arquivo ```.env``` e cole o conteúdo de ```.env.example``` nele.
3. Instale os dependências da aplicação com o seguinte comando no terminal:
```bash
npm install
```
4. Execute o servidor no terminal:
```bash
npm run dev #node ace serve --watch
```
5. Em seu navegador, cole a seguinte URL: http://127.0.0.1:3333

## Minhas considerações

Este projeto foi uma ótima oportunidade de praticar e demonstrar como funciona o meu processo de pensamento para construir um WebSite. Utilizei frameworks em que já estou familiarizada e usando para outros projetos paralelamente. Foi uma aplicação simples e tranquila de fazer, e também foi gratificante vê-la funcionando.
