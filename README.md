# Todo backend

This is Nodejs-express project. Which is implemented to learn the fundamentals of express.
In this project we make the server using express and having api.
We also implemented the the crud operation using mongodb

## _NOTE_

> In this Database is changed by changing the paramter in config file
> I have created the 2 database mongodb and jsonfile which is dynamically change according to the set parameter and uses the Adapter design Pattern to achieve this

### LIST Of API

- /todolist/tasks - sned get req to get all the task
- /todolist/tasks - sned post req to create the task
- /todolist/tasks:id - send get req to fetch task with respective id
- /todolist/tasks:id - send put req to update task with respective id
- /todolist/tasks:id - send delete req to delete task with respective id
-

### send the post request in following manner

#### example to send create task body in json:

```json
{
  "taskName": "sleep"
}
```

#### example to send update task body in json:

```json
{
  "taskName": "sleep",
  "status": "completed"
}
```

## folder structure

```sh
├── app.js
├── config.env
├── controllers
│   └── taskController.js
├── Data
│   └── todoData.json
├── middelware
│   └── todoMiddelware.js
├── models
│   ├── mongoConnection.js
│   ├── Task.js
│   ├── taskJsonCrud.js
│   ├── taskSchema.js
│   ├── todoAdapaterModel.js
│   └── todoMongoCrud.js
├── package.json
├── package-lock.json
├── README.md
└── routes
    └── todoRoutes.js
```

## Installation

Install the dependencies and start the server.

### prerequisite

1. vscode editor
2. node js installed
3. npm installed

### steps

1. > clone this project
2. > go into to the the project folder
3. > open the terminal

4. > open vscode using following command

```sh
$ code .
```

5. > Install the dependencies

```sh
$ npm install

```

6. > run the project

```sh
$ npm run start
```

#### Configure config.env parametre

> PORT = <3000>

config the PORT number

> DATABASE= mongoDb || DATABASE = jsonDb

which database you want to use config that database parameter with respect to that name i.e (mongoDb or jsonDb )

> DATABASE_URL=

Use the atlas mongo connect link here

### Link to server

[Todo-backend-server](https://todo-dynamic-backend-app.herokuapp.com/todolist/tasks)
