require("colors");

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
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
    }

    saveDB(taskes.taskArrayList);

    await pause();
  } while (opt !== "0");
};

main();
