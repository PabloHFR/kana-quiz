# Kana Quiz Project
[![Netlify Status](https://api.netlify.com/api/v1/badges/934981fd-6839-46f2-b7bb-93ea417aa659/deploy-status)](https://app.netlify.com/sites/kanaquiz-app/deploys)

![kanaquizapp](https://user-images.githubusercontent.com/97895946/205117931-aaa4bee1-1f61-40c6-ad55-e4470498d634.gif)

O [Kana Quiz](https://kanaquiz-app.netlify.app) é uma _Single Page Application_ (SPA) que permite ao usuário decorar todo o Kana japonês por meio de um Quiz que checará seu conhecimento. O usuário seleciona qual silabário deseja praticar e quais colunas, respondendo em uma área de texto qual o equivalente _Romaji_ de cada _Hiragana_ ou _Katakana_ mostrado. Com a ajuda de um algoritmo, a ordem das perguntas é aleatória a cada novo teste, de modo que o usuário poderá praticar de forma mais eficiente e não decorará apenas as primeiras letras.

Você pode acessar o projeto no site [Kana Quiz](https://kanaquiz-app.netlify.app).

## Features

- O usuário poderá escolher entre praticar _Hiragana_ ou _Katakana_.
- O usuário poderá escolher quais colunas do Kana ele deseja praticar, selecionando todas com um simples clique.
- O usuário poderá digitar o equivalente _Romaji_ na caixa de texto e ter sua resposta checada. Caso acerte, a caixa ficará verde. Caso erre, ela ficará vermelha, mas ele poderá tentar novamente.
- As caixas do quiz serão geradas em ordem aleatória para uma prática mais eficiente.
- O usuário poderá voltar à tela inicial clicando no título da página.

## Tecnologias Utilizadas
![image](https://user-images.githubusercontent.com/97895946/205108561-dde54ea5-a2a7-4533-a148-b62c1375c6e1.png) ![image](https://user-images.githubusercontent.com/97895946/205108636-b0d5860d-94d6-4b79-b805-718d7287a329.png) ![image](https://user-images.githubusercontent.com/97895946/205108442-f8b3cce5-4a18-47c8-9fe4-2d25763f04ea.png)

O projeto utiliza as seguintes tecnologias:

- HTML
- Sass
- JavaScript
- Parcel para compilar e comprimir o código
- [Wanakana API](https://github.com/WaniKani/WanaKana) para converter as letras de _Romaji_ para _Hiragana_ ou _Katakana_.

O deploy foi feito na plataforma [Netlify](https://www.netlify.com).
