import { Database } from "../interfaces/Database";

class PostgresDatabase implements Database {

    conenct(): void {
        console.log('PostgresSQL database was connected');
    }

}

export default PostgresDatabase;