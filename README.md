# Javascript Books Directory

The MVC web app called ‘Javascript Books Directory’, consists in two different parts.

 - Client (React / Redux )
 - Server (Express, NodeJs, MongoDB)

# Prerequisites

To run locally the app, you need to have installed and running NodeJS and mongoDB.

# Run server locally

You can set port and mongoDB address in .env file.

    cd server
    npm install
    npm run start

# Run client locally

You can set api address at config.js

    cd client
    npm install
    npm run start

For production you can run following command that will generate a dist folder.

    npm run build
