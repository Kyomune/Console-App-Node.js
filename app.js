require("colors");

const { inquirerMenu, pause } = require("./helpers/inquirer");
const Taskes = require("./models/taskes");

console.clear();

const main = async () => {
  let opt = "";
  console.log("Hola Mundo");

  // pausa();

  do {
    opt = await inquirerMenu();
    const taskes = new Taskes()
    console.log(opt);


    await pause();
  } while (opt !== "0");
};

main();
