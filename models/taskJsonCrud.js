const fs = require("fs").promises;
const path = require("path");
const fileName = path.join(__dirname, "..", "Data", "todoData.json");
const uniqid = require("uniqid");
const Task = require("./Task");
//header-->
// const MyModel = (connection, modelName) => {
//   return
// };

// create model(return model) -->connect to mongo(return connection) -->crud operation

const create = async (obj) => {
  try {
    let taskArray = await find();
    const task = new Task(obj);
    taskArray.push(new Task(obj.taskName));
    const data = await fs.writeFile(
      fileName,
      JSON.stringify(taskArray, null, 2)
    );
    return data;
  } catch (error) {
    console.error("create Error-->", error);
  }
};
const find = async (obj) => {
  try {
    const taskArray = JSON.parse(await fs.readFile(fileName, "utf-8"));
    if (typeof obj == typeof {}) {
      const task = taskArray.filter((arrayObj) => {
        return Object.keys(obj).every((prop) => {
          return arrayObj[prop] == obj[prop];
        });
      });
      console.log(task);
      return task;
    }
    return taskArray;
  } catch (error) {
    console.error("find Error-->", error);
  }
};

const findById = async (obj) => {
  try {
    const taskArray = await find();
    const task = taskArray.filter((arrayObj) => {
      return Object.keys(obj).every((prop) => {
        return arrayObj[prop] == obj[prop];
      });
    });
    return task;
  } catch (error) {
    console.error();
  }
};

const updateById = async (findObj, updateObj) => {
  try {
    const taskArray = await find();

    const task = taskArray.find((element) => {
      return element.taskId == findObj.taskId;
    });

    if (task.status != "completed") {
      task.status = updateObj.status;
      task.completed = Date.now();

      const data = await fs.writeFile(
        fileName,
        JSON.stringify(taskArray, null, 2)
      );
    }

    return task;
  } catch (err) {
    console.error("update-->", err);
  }
};

const deleteById = async (obj) => {
  try {
    const taskArray = await find();
    const index = taskArray.findIndex((element, index) => {
      if (element.taskId == obj.taskId) {
        return true;
      }
    });
    console.log(index);
    if (index !== -1) {
      const task = taskArray.splice(index, 1);

      const data = await fs.writeFile(
        fileName,
        JSON.stringify(taskArray, null, 2)
      );
      return task;
    } else {
      return "not found";
    }

    // return task;
  } catch (err) {
    console.error("deleted-->", err);
  }
};

module.exports = {
  createTask: create,
  findTask: find,
  findTaskByName: findById,
  updateTask: updateById,
  deleteTask: deleteById,
};
