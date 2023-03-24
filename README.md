<img src="https://user-images.githubusercontent.com/14846583/227642020-f27b6645-b00e-4514-92b7-fb15d240ce7f.svg" width="250">

# Índice

- [Sobre o projeto](#fenix-florestao-frontend)
  - [Telas](#telas)
      - [Tela Inicial](#tela-home)
      - [Tela Quadrinhos](#tela-quadrinhos)
      - [Tela Personagens](#tela-personagens)
      - [Tela Mapa](#tela-maps)
      - [Tela Histórico Endereços](#tela-historico-endereco)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos](#requisitos)
- [Como baixar o projeto](#como-baixar-o-projeto)
- [Como inicializar local](#como-inicializar-local)
- [Como inicializar via Docker](#como-inicializar-via-docker)
- [Subir projeto para ambiente feat via Docker](#subir-projeto-para-ambiente-feat-via-docker)

# ⍟ Marvel Comic Coornidates - Front End

O projeto Marvel Comic Coordinates é um projeto feito para teste de vaga Front End. O intuito desse projeto é utilizar a API Web da Marvel e listar Quadrinhos. Mostrar dados do Quadrinho em uma janela modal e ter a possibilidade de enviar Lista de Quadrinhos para um endereço escolhido aleatoriamente no Google Maps.

- Acesso oo projeto online: https://comicscoordinates.vercel.app


<a id="requisitos"></a>

# 📌 Requisitos
- Node.js (14.18+, 16+) 
- npm (6.14.9)

---
<a id="como-baixar-o-projeto"></a>
## 💾 Como baixar o projeto
- Acesso o repositório no endereço https://github.com/jardelbelisario84/comicscoordinates
- Clone o projeto


```bash
# Clone this repository
 git clone https://github.com/jardelbelisario84/comicscoordinates.git
 
```

---
<a id="como-inicializar-o-projeto-local"></a>
## 💻 Inicializar o projeto local


- Lembre-se de ter feito o clone do projeto no passo: <a href="#como-baixar-o-projeto">Como baixar o projeto</a> ⬆️
- Navegue até a pasta do projeto no seu computador/notebook e entre no diretório: comicscoordinates

```bash
 # Go into the repository
 cd comicscoordinates

 # Install dependencies
 npm install

 # Start server dev
 npm run dev

# running on http://127.0.0.1:5173 or http://localhost:5173/

```

---
<a id="como-inicializar-o-projeto-local"></a>
## 💻 Credenciais e chaves de acesso

- Antes de iniciar o projeto, verifique se possui todas as credenciais necessárias para que funcione corretamente

- Google Maps Key: [Console Google](https://console.cloud.google.com/)
- Marvel Key API: [Marvel Developer Account](https://developer.marvel.com/account)
  - Você precisará da chave pública e privada


- Lembre-se de ter feito o clone do projeto no passo: <a href="#como-baixar-o-projeto">Como baixar o projeto</a> ⬆️

Simples Assim, e estamos rodar o projeto!

---


<a id="tecnologias-utilizadas"></a>

# 🚀 Tecnologias Utilizadas
As seguintes tecnologias estão sendo utilizadas neste projeto até o momento: 

- [Vite](https://vitejs.dev/guide/)
- [TypeScript](typescriptlang.org)
- [React JS](https://pt-br.reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [React Loading](https://www.npmjs.com/package/react-loading)
- [React Google Maps API](https://www.react-google-charts.com/)
- [Style Components](https://styled-components.com/)
- [md5](https://www.npmjs.com/package/md5)
- [Date fns](https://www.npmjs.com/package/date-fns)
- [Axios](https://www.npmjs.com/package/axios)
- [Google Maps](https://developers.google.com/maps/documentation/javascript/overview?hl=pt-br)




<a id="telas"></a>
## Esse projeto se divide em 5 principais telas:


<a id="tela-home"></a>
1. Tela inicial com banner ilustrativo
<img src="https://user-images.githubusercontent.com/14846583/227641159-fc777425-ed1d-4eba-9e98-dcc0127722bf.jpg">


---
<a id="tela-quadrinhos"></a>
2. Tela de listagem de quadrinhos ( comics )
<img src="https://user-images.githubusercontent.com/14846583/227640869-e71e1a04-5782-4d07-839f-333c4199be92.jpg">

2.1 Quadrinho Modal
<img src="https://user-images.githubusercontent.com/14846583/227641285-578b552e-ecaa-4b99-8f39-592a3a620b72.jpg">

---
<a id="tela-personagens"></a>
3. Tela de listagem de personagens ( characters )

<img src="https://user-images.githubusercontent.com/14846583/227641438-f3136966-0eb1-499f-a911-ec978e46c6d6.jpg">


3.1 Personagem Modal
<img src="https://user-images.githubusercontent.com/14846583/227641633-767f2406-0550-4fec-a26c-2d855bd49882.jpg">

---
<a id="tela-maps"></a>
4. Tela Mapa com possibilidade de marcação de endereços e envio da lista de quadrinhos 

<img src=".https://user-images.githubusercontent.com/14846583/227641828-5f689a60-7d05-4f88-8b3b-13ca99cc2689.jpg">

4.1 Instruções Modal
<img src="https://user-images.githubusercontent.com/14846583/227641941-9ad7100d-2a77-499a-9d61-a4c9e6f83aad.jpg">

---
<a id="tela-historico-endereco"></a>
5. Tela de histórico de endereços aos quais foram enviados os quadrinhos

<img src="https://user-images.githubusercontent.com/14846583/227641732-ac49cdcf-ebb3-4405-b206-3ef65db6b510.jpg">


---

<br><br>

<p align="center">Jardel.Dev</p>

