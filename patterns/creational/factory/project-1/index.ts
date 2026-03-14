import DatabaseFactory from "./classes/DatabaseFactory";

const mongoDb = DatabaseFactory.createDatabase("mongodb");
const sqlDb = DatabaseFactory.createDatabase("mysql");
const postgresDb = DatabaseFactory.createDatabase("postgres");

console.log(mongoDb);
console.log(sqlDb);
console.log(postgresDb);

mongoDb.conenct();