const inquirer = require("inquirer");
require("colors");

const inquirerMenu = async () => {
  const questions = [
    {
      type: "list",
      name: "option",
      message: "¿Qué desea hacer?",
      choices: [
        { value: "1", name: `${'1.'.green} Crear Tarea` },
        { value: "2", name: `${'2.'.green} Listar tareas` },
        { value: "3", name: `${'3.'.green} Listar tareas completadas` },
        { value: "4", name: `${'4.'.green} Listar tareas pendientes` },
        { value: "5", name: `${'5.'.green} Completar una tarea` },
        { value: "6", name: `${'6.'.green} Borrar una tarea` },
        { value: "0", name: `${'0.'.green} Salir` },
      ],
    },
  ];
  //   console.clear();

  console.log("==========".green);
  console.log(" Seleccione una opción ");
  console.log("==========\n".green);

  const { option: opt } = await inquirer.prompt(questions);

  return opt;
};

const pause = async () => {
  const pressForContinue = {
    type: "input",
    name: "key",
    message: `Presione ${"enter".green} para continuar`,
  };

  console.log("\n");
  await inquirer.prompt(pressForContinue);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }

        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
};
