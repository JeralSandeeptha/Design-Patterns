import MongoDatabase from "./MongoDatabase";
import PostgresDatabase from "./PostgresDatabase";
import SQLDatabase from "./SQLDatabase";

class DatabaseFactory {

    public static createDatabase(type: string) {
        switch (type) {
            case "mysql":
                return new SQLDatabase();
            case "postgres":
                return new PostgresDatabase();
            case "mongodb":
                return new MongoDatabase();
            default:
                throw new Error("Unknown database type");
            }
    }
}

export default DatabaseFactory;