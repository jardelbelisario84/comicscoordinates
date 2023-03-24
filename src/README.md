![FenixFlorestal](./assets/logotipo_fenix_florestal.png)


# Índice

- [Sobre o projeto](#fenix-florestao-frontend)
  - [Documentação](#documentacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos](#requisitos)
- [Como baixar o projeto](#como-baixar-o-projeto)
- [Como inicializar local](#como-inicializar-local)
- [Como inicializar via Docker](#como-inicializar-via-docker)
- [Subir projeto para ambiente feat via Docker](#subir-projeto-para-ambiente-feat-via-docker)

# 🌲 Fênix Florestal - Frontend

O projeto Fênix Florestal é um sistema para gestão de áreas sinistradas em UP´s da Suzano S.A. Sabendo dos vários incidentes (incêndio, vendaval, furto, doença, etc.) que podem atingir uma UP, foi estabelecido a implementação de um sistema  que possa gerenciar de forma inteligente os sinistros ocorridos nas UP's.


[![Build Status](https://dev.azure.com/suzano/Chapter%20Devs/_apis/build/status/Fenix%20Florestal/FrontEnd/Fenix%20Florestal%20FrontEnd?branchName=main)](https://dev.azure.com/suzano/Chapter%20Devs/_build/latest?definitionId=653&branchName=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Suzano_fenix-florestal-frontend&metric=alert_status&token=419f5f897742ee4e97edfd55ace8adf0ead03a06)](https://sonarcloud.io/dashboard?id=Suzano_fenix-florestal-frontend) 
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Suzano_fenix-florestal-frontend&metric=security_rating&token=419f5f897742ee4e97edfd55ace8adf0ead03a06)](https://sonarcloud.io/dashboard?id=Suzano_fenix-florestal-frontend) 
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Suzano_fenix-florestal-frontend&metric=ncloc&token=419f5f897742ee4e97edfd55ace8adf0ead03a06)](https://sonarcloud.io/dashboard?id=Suzano_fenix-florestal-frontend)

[![Board Status](https://dev.azure.com/suzano/041b272a-be1d-488b-a8ed-bdd950443496/119969ed-ebc6-4d50-a263-194af00f94fc/_apis/work/boardbadge/1dbe557c-5c8d-4d7a-9fa8-4daa9f095382?columnOptions=1)](https://dev.azure.com/suzano/041b272a-be1d-488b-a8ed-bdd950443496/_boards/board/t/119969ed-ebc6-4d50-a263-194af00f94fc/Microsoft.RequirementCategory/)



<a id="documentacao"></a>
## 🌲🌲Documentação

- [Documentação do Projeto](https://dev.azure.com/suzano/Chapter%20Devs/_wiki/wikis/Chapter%20Devs%20Wiki/298/Fenix-Florestal-(GAS))


---
<a id="requisitos"></a>

# 📌 Requisitos
- Node.js (v14.15.3)
- npm (6.14.9)

---
<a id="como-baixar-o-projeto"></a>
## 💾 Como baixar o projeto
- Acesso o repositório no endereço https://dev.azure.com/suzano/Chapter%20Devs/_git/fenix-florestal-frontend
- Clone o projeto e acesse o diretório /fenix-florestal-frontend
- Importante lembrar de utilizar as credenciais do repositório localizadas na Azure DevOps Suzano.



```bash
# Clone this repository
 git clone https://suzano@dev.azure.com/suzano/Chapter%20Devs/_git/fenix-florestal-frontend
 
```

---
<a id="como-inicializar-o-projeto-local"></a>
## 💻 Inicializar o projeto local


- Lembre-se de ter feito o clone do projeto no passo: <a href="#como-baixar-o-projeto">Como baixar o projeto</a> ⬆️
- Navegue até a pasta do projeto no seu computador/notebook e entre no diretório: source

```bash
 # Go into the repository
 cd fenix-florestal-frontend/source

 # Install dependencies
 npm install

 # Start server dev
 npm run develop

# running on port 3000

```

![FeniFlorestalLogin](./assets/localhost_login.jpg)


---

<a id="como-inicializar-via-docker"></a>
### 🐳 Como inicializar via Docker

Para rodar estes passos:

1. Primeiramente deve estar instalado o docker!

- [Guia Docker Windows](https://docs.microsoft.com/pt-br/virtualization/windowscontainers/manage-docker/configure-docker-daemon)
- [Guia Docker Linux](https://docs.docker.com/engine/install/ubuntu/)

2. Ter realizado autenticação no Google Cloud Platform (GCP)

   [Registrar autenticação no GCP](https://cloud.google.com/container-registry/docs/advanced-authentication)

  #### 📢 Inicializar:

  ##### 📢 🟧 Expotar .env para ambiente de desenvolvimento

```bash
 # Exportar as variáveis do .env.local para ambiente de desenvolvimento
 export $(grep -v '^#' .env.local | xargs -0)

NODE_ENV=development 

```

#####  📢 🟧🟧 Caso utilize WSL2:

- Fazer set das variáveis de ambiente no WSL2:
```bash
PATH $(grep -v '^#' .env.local | xargs -0) export PATH
```

##### 📢 🟥 Expotar .env para ambiente de produção 
```bash
 # Go into the repository
 cd fenix-florestal-frontend/source

 # Exportar as variáveis do .env para ambiente de produção
 export $(grep -v '^#' .env | xargs -0)
 
NODE_ENV=production 

```

📢 ⚙ Realizar build do projeto via Docker
 
```bash
 # Rodar o Build do Container
docker build -t  gcr.io/sz-fenix-feat/fenix-frontend-next --build-arg NEXT_PUBLIC_FIREBASE_PROJECT_ID=$NEXT_PUBLIC_FIREBASE_PROJECT_ID --build-arg NEXT_PUBLIC_FENIX_API_BACKEND=$NEXT_PUBLIC_FENIX_API_BACKEND --build-arg NEXT_PUBLIC_FIREBASE_APPID=$NEXT_PUBLIC_FIREBASE_APPID --build-arg NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=$NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN --build-arg NEXT_PUBLIC_FIREBASE_MESSAGINSENDERID=$NEXT_PUBLIC_FIREBASE_MESSAGINSENDERID --build-arg NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=$NEXT_PUBLIC_FIREBASE_STORAGEBUCKET --build-arg NEXT_PUBLIC_FIREBASE_API_KEY=$NEXT_PUBLIC_FIREBASE_API_KEY --build-arg NEXT_PUBLIC_HANDTALK=$NEXT_PUBLIC_HANDTALK --build-arg NEXT_PUBLIC_URL_REDIRECT=$NEXT_PUBLIC_URL_REDIRECT --build-arg NODE_ENV_SECRET=$NODE_ENV_SECRET --build-arg NODE_ENV_TOKEN_SECRET=$NODE_ENV_TOKEN_SECRET --build-arg NODE_ENV=$NODE_ENV --build-arg GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS .

```

##### 📢 🟪 Rodar projeto localmente via Docker:
```bash
# Rodar o container
 docker run -p "8080:8080" gcr.io/sz-fenix-feat/fenix-frontend-next:latest

# running on port 8080
```

---    
<a id="ubir-projeto-para-ambiente-feat-via-docker"></a>
###  🟦 Subir projeto para ambiente feat via Docker:
```bash
### Fazer o Push - Feat

docker push gcr.io/sz-fenix-feat/fenix-frontend-next:latest
```
##### 🟦 Entrar no CGP:
[Acessar Link de acesso](https://console.cloud.google.com/run/detail/us-central1/fenix-frontend-next/revisions?hl=pt-br&project=sz-fenix-feat)

##### 1. Ao clicar no link acima, você verá essa tela:
![FeniFlorestalLogin](./assets/cgp_01.jpg)

##### 2. Clique em Editar e Implantar uma nova revisão
![FeniFlorestalCGP_02](./assets/cgp_02.jpg)
##### 3. Role a página para baixo:
![FeniFlorestalCGP_02](./assets/cgp_03.jpg)
##### 3. Clique em Implantar:
![FeniFlorestalCGP_02](./assets/cgp_04.jpg)

Simples Assim, e estamos prontos para o desenvolvimento!

---


<a id="tecnologias-utilizadas"></a>

# 🚀 Tecnologias Utilizadas
As seguintes tecnologias estão sendo utilizadas neste projeto até o momento: 

- [Node.js](https://nodejs.org/en/)
- [TypeScript](typescriptlang.org)
- [React JS](https://pt-br.reactjs.org/)
- [Next JS](https://nextjs.org/)
- [Axios](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hooks Form](https://react-hook-form.com/)
- [React Ggoogle Charts](https://www.react-google-charts.com/)
- [Yup](https://github.com/jquense/yup)
- [Nookies](https://github.com/maticzav/nookies)
- [Firebase](https://firebase.google.com/)

<br><br>

<p align="center">Fênix</p>

