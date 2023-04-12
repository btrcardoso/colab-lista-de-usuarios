# Lista de usuários

Esta é uma aplicação WEB que lista um conjunto de usuários consumindo a API [Random User](https://randomuser.me/). Esta aplicação foi criada para o processo seletivo do Colab.

## Tecnologias utilizadas

Para esta aplicação foram utilzadas as seguintes tecnologias:
- [NodeJS](https://nodejs.org/en): Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de rede escaláveis.
- [AdonisJS](https://adonisjs.com/): AdonisJS é um FrameWork de back-end para criar aplicativos da Web dinâmicos orientados a dados.
- [DaisyUI](https://daisyui.com/): Um plug-in gratuito para Tailwind CSS, utilizado para fazer os componentes HTML e CSS da aplicação.

## Organização dos principais arquivos

- Controllers

As rotas estão definidas em ```start/routes.ts```. Uma única rota foi criada para a função ```show``` do controlador ```UsersController.ts```. Dentro da pasta ```Controllers``` é possível encontrar o arquivo que define as funções de controle do Usuário que definirá as funções executadas quando a rota for chamada.

- Views

Na pasta ```resources/views``` encontram-se os arquivos de HyperTexto em ```.edge``` da aplicação. Foi utilizado o plugin CSS DaisyUI baseado em Tailwind para a criação dos componentes HTML e CSS. O arquivo ```welcome.edge``` possui a _section_ com a listagem de usuários. Na pasta layouts, encontra-se o arquivo de layout para a página ```main.edge```. 

## Padrões de Commits

Para a criação das branchs e commits, foi utilizado o padrão fornecido por este [artigo](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657). 

## Executar

Para executar localmente em sua máquina

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