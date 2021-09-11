require("colors");

const { inquirerMenu } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";
  console.log("Hola Mundo");

  // pausa();

  do {
    opt = await inquirerMenu();
    console.log({ opt })

  } while (opt !== "0");
};

main();
