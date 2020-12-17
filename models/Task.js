const uniqid = require("uniqid");
class Task {
  constructor(taskName) {
    this.taskId = uniqid();
    this.taskName = taskName;
    this.status = "pending";
    this.created = Date.now();
    this.completed;
  }
}

module.exports = Task;
