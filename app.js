require("colors");

const {
  inquirerMenu,
  pause,
  readInput,
  taskListDelete,
  confirm,
  showCheckList,
} = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Taskes = require("./models/taskes");

console.clear();

const main = async () => {
  let opt = "";
  const taskes = new Taskes();

  const tareasDB = readDB();

  if (tareasDB) {
    taskes.loadTaskesFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Descripción:");
        taskes.createTask(desc);
        break;
      case "2":
        taskes.taskListComplete();
        break;
      case "3":
        taskes.taskListPendingOrComplete(true);
        break;
      case "4":
        taskes.taskListPendingOrComplete(false);
        break;
      case "5":
        const ids = await showCheckList(taskes.taskArrayList);
        taskes.toggleCompleteds(ids);
        break;
      case "6":
        const id = await taskListDelete(taskes.taskArrayList);
        const ok = await confirm("Estas seguro de eliminar?");
        if (id !== "0") {
          if (ok) {
            taskes.deleteTask(id);
            console.log("Tarea eliminada.");
          }
        }
    }

    saveDB(taskes.taskArrayList);

    await pause();
  } while (opt !== "0");
};

main();
