require("colors");

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Taskes = require("./models/taskes");

console.clear();

const main = async () => {
  let opt = "";
  const taskes = new Taskes();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Descripción:");
        taskes.createTask(desc);
        break;
      case "2":
        console.log(taskes.taskList);
        break;
    }

    await pause();
  } while (opt !== "0");
};

main();
