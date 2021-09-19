require("colors");

const { inquirerMenu, pause } = require("./helpers/inquirer");
const Task = require("./models/task");

console.clear();

const main = async () => {
  let opt = "";
  let key = "";
  console.log("Hola Mundo");

  // pausa();

  do {
    // opt = await inquirerMenu();
    // console.log(opt);

    const task = new Task('Comprar comida');
    console.log(task)

    key = await pause();
    
  } while (opt !== "0");
};

main();
