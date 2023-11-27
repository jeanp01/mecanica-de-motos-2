import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroment.js";

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export async function authenticated() {
  try {
    await sequelize.authenticate();
    console.log("conection sucess");
  } catch (error) {
    throw new Error("error al autenticar:", error);
  }
}

export async function synchonize() {
  try {
    await sequelize.sync();
    console.log("synchonize success");
  } catch (error) {
    throw new Error("error al sincronizar:", error);
  }
}

export default sequelize;
