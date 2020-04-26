This is a boiler plate for anyone who wants to start react and webpack development from scratch. 

We have included two different webpacks

Webpack.dev.js would be used to development build 
Webpack.prod.js would be used for production build
Webpack.common.js has the common settings used for both development and production.

The boilder plate uses react bootstrap for inporting bootstrap into project.
It uses babel for transpiling the modern Javascript to work on all browsers.
It uses webpack merge to modularize the webpack.
It has navigation and routing whihc are readyto use.
This project uses Functional components which is as of today(April 2020) Recomended way to do React programming.

#First Run below command to install dependencies

npm install

To Run the project in development mode run below command

npm start

To Run on prod servers

npm run build:prod