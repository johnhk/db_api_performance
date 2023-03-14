import { Sequelize } from "sequelize";

export class TestClass {
  test() {
    const sequelize = new Sequelize("postgres://pgAdmin:mitpassword@localhost:5432/default_database");
    try {
      sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

// Option 1: Passing a connection URI
