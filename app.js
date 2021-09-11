const { showMenu, pausa } = require("./helpers/messages");

require("colors");

console.clear();

const main = async () => {
  let opt = "";
  console.log("Hola Mundo");

  // pausa();

  do {
    opt = await showMenu();

    if (opt !== '0') await pausa();
  } while (opt !== "0");
};

main();
