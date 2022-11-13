import pg from "pg";

const { Pool } = pg;

const databaseConfig = {
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  database: "poc_ts",
};

const connection = new Pool(databaseConfig);

export { connection };
