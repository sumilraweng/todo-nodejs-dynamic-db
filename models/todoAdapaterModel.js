class todoAdapaterModel {
  constructor(database) {
    switch (database) {
      case "jsonDb": {
        const todoJson = require("./taskJsonCrud");
        this.database = todoJson;
        break;
      }
      case "mongoDb": {
        const todoMongo = require("./todoMongoCrud");
        this.database = todoMongo;
        // console.log(todoMongo);
        break;
      }
      default: {
        console.log("error");
      }
    }
  }
}

module.exports = todoAdapaterModel;
