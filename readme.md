# Arive Challenge

This is a Backend challenge using NodeJS with Typescript and MongoDB with Mongoose client.

## Installation
```bash
npm install
```
## Running the app
```bash
npm run dev
```
Navigate to `http://localhost:3000/api-docs/`, Swagger File should be rendered.
## Important
I used Clound Mongo installation, if you wish to use your local mongo, Please uncomment  this line
```bash
url: `mongodb://${host}:${port}/${database}`
```
in src>databases>index.ts file

## Other useful commands
```bash
npm run build:dev or tsc -w
```
To watch the Typescript changes.
```bash
npm run lint:fix
```
To fix linting issues.
```bash
PORT=3000
```
place it in .env file

## Swagger File

Contains basic CRUD operationd for User Model, Hobbies Model. You can add reference b/w user and Hobbies(one-to-many) relation
It is accessible at http://localhost:3000/api-docs/

## Models	

User - { name, hobbies }, Hobbies - { name, passionLevel, year }

## Demo
![alt text](https://github.com/uday4393/arive-challenge/blob/master/demo/arivedemo.gif?raw=true)

## Screenshots 
![alt text](https://github.com/uday4393/arive-challenge/blob/master/demo/arive1.png?raw=true)

# Folder Structure

│
├── /.vscode
│   ├── launch.json
│   └── settings.json
│
├── /src
│   ├── /configs
│   │   ├── development.json
│   │   ├── production.json
│   │   └── test.json
│   │
│   ├── /controllers
│   │   ├── auth.controller.ts
│   │   ├── index.controller.ts
│   │   └── users.controller.ts
│   │
│   ├── /dtos
│   │   └── users.dto.ts
│   │
│   ├── /exceptions
│   │   └── HttpException.ts
│   │
│   ├── /http
│   │   ├── auth.http
│   │   └── users.http
│   │
│   ├── /interfaces
│   │   ├── auth.interface.ts
│   │   ├── routes.interface.ts
│   │   └── users.interface.ts
│   │
│   ├── /middlewares
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   │
│   ├── /models
│   │   └── users.model.ts
│   │
│   ├── /routes
│   │   ├── auth.route.ts
│   │   ├── index.route.ts
│   │   └── users.route.ts
│   │
│   ├── /services
│   │   ├── auth.service.ts
│   │   └── users.service.ts
│   │
│   ├── /tests
│   │   ├── auth.test.ts
│   │   ├── index.test.ts
│   │   └── users.test.ts
│   │
│   ├── /utils
│   │   ├── logger.ts
│   │   ├── util.ts
│   │   └── vaildateEnv.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .dockerignore
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .huskyrc
├── .lintstagedrc.json
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── ecosystem.config.js
├── jest.config.js
├── Makefile
├── nginx.conf
├── nodemon.json
├── package-lock.json
├── package.json
├── swagger.yaml
└── tsconfig.json


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
