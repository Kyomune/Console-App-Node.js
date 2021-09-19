const Task = require("./task");

class Taskes {
  taskList = {};

  constructor() {
    this.taskList = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);

    this.taskList[task.id] = task;
  }
}

module.exports = Taskes;
