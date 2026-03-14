import { Database } from "../interfaces/Database";

class SQLDatabase implements Database {

    conenct(): void {
        console.log('SQL database was connected');
    }

}

export default SQLDatabase;