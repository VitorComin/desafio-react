# Desafio React

Este é um projeto React criado para o Desafio React proposto no processo seletivo da vaga de Desenvolvedor Front End da Tiflux. Você pode usar este guia para configurar e iniciar a aplicação em seu ambiente de desenvolvimento local. Além disso, abaixo há uma breve explicação da aplicação e suas funcionalidades.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Configuração

1. **Clone o Repositório:**

   No terminal, navegue até a pasta onde você deseja clonar o repositório e execute o seguinte comando para clonar o repositório:

   ```shell
   git clone https://github.com/VitorComin/desafio-react.git

2. **Navegue até a Pasta do Projeto:**

   Use o comando 'cd' para entrar na pasta do projeto recém-clonado:

     ```shell
     cd desafio-react
   
3. **Instale as dependências:**

   Execute o seguinte comando para instalar as dependências do projeto:

     ```shell
     npm install
     ```

   ou

     ```shell
     yarn
     ```

4. **Inicie o Servidor de Desenvolvimento:**

   Após a conclusão da instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

     ```shell
     npm start
     ```

   ou
     
     ```shell
     yarn start
     ```

## A Aplicação

A aplicação consiste em uma aplicação Web que apresenta os dados da API do Starwars por meio de um dashboard com estatísticas e tabelas, usando a biblioteca ANTD.

![image](https://github.com/VitorComin/desafio-react/assets/106283734/ffe47c89-90d1-4133-8e72-d9dd90450baa)

### Home

A aplicação apresenta uma página home, que é a página inicial, onde é carregado os dados da API simbolizados por um spin e, após carregados, os apresenta de forma formatada conforme o modelo disponibilizado. 

![image](https://github.com/VitorComin/desafio-react/assets/106283734/e9125447-051b-41f9-94fb-ea52ea9adf30)

O layout, as tabelas, inputs, área de estatisticas e mais componentes foram utilizados da biblioteca ANTD. 

As ferramentas de search funcionam pesquisando sempre pela primeira coluna da tabela, onde é apresentado os resultados. Caso a pesquisa não contenha nada, todos os resultados serão apresentados.

![image](https://github.com/VitorComin/desafio-react/assets/106283734/66cb366e-7df3-44d8-8ca9-098127a97d20)

No canto superior direito da tela, onde aparece o avatar do usuário e o "User", há um link que te leva ao caminho "/login", que troca o content da aplicação por outra página, onde coloquei inputs de username, senha e um botao para enviar, simulando um login. O foco de fazer essa página é aproveitar esse avatar e "User" que já era proposto pro canto superior da tela para mostrar o React Router, sem alterar a proposta originial, não alterando o menu e afins.

![image](https://github.com/VitorComin/desafio-react/assets/106283734/a0d19150-640a-4989-9479-f9d4b1f9e027)

Para voltar a página inicial, os itens do canto superior esquerdo da tela, no caso o logo da Tiflux e a opção Dashboard do menu, estão dentro de um Link também, que direcionam ao caminho "/", que é a página inicial, onde se encontram os dashboards.

![image](https://github.com/VitorComin/desafio-react/assets/106283734/8fb42307-d9fd-4e12-8473-f92c8702bb08)

Também, no canto inferior esquerdo da página, temos um icone que, ao clicar, leva para o caminho "/", servindo como uma opção de voltar para a tela inicial. Esse icone aparece na parte de baixo do menu sider nas duas páginas.

![image](https://github.com/VitorComin/desafio-react/assets/106283734/dbe6d58b-4ca5-4eed-bfdd-edf2ab76dc00)




