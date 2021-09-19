const Task = require("./task");
require("colors");

class Taskes {
  taskList = {};

  get taskArrayList() {
    const taskArray = [];
    Object.keys(this.taskList).forEach((key) => {
      taskArray.push(this.taskList[key]);
    });

    return taskArray;
  }

  constructor() {
    this.taskList = {};
  }

  loadTaskesFromArray(taskes = []) {
    taskes.forEach((task) => {
      this.taskList[task.id] = task;
    });
  }

  createTask(desc = "") {
    const task = new Task(desc);

    this.taskList[task.id] = task;
  }

  taskListComplete() {
    this.taskArrayList.forEach(({ desc, ending }, index) => {
      const position = `${index + 1}`.green;
      const status = ending ? "Completado".green : "Pendiente".red;

      console.log();
      console.log(`${position}. ${desc}:: ${status}`);
    });
  }

  taskListPendingOrComplete(isCompleted = true) {
    let position = 0;
    console.log();
    this.taskArrayList.forEach(({ desc, ending }) => {
      const status = ending ? `${ending.toString().green}` : "Pendiente".red;

      if (isCompleted && ending) {
        position += 1;
        const task = `${(position + '.').green} ${desc}:: ${status}`;
        console.log(task);
      }

      if (!isCompleted && !ending) {
        position += 1;
        const task = `${(position + '.').green} ${desc}:: ${status}`;
        console.log(task);
      }
    });
  }
}

module.exports = Taskes;
