require("colors");

const { inquirerMenu, pause } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";
  let key = "";
  console.log("Hola Mundo");

  // pausa();

  do {
    opt = await inquirerMenu();
    console.log(opt);

    console.log('\n')
    key = await pause();
  } while (opt !== "0");
};

main();
