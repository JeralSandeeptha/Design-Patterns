import { Database } from "../interfaces/Database";

class MongoDatabase implements Database {

    conenct(): void {
        console.log('MongoDB database was connected');
    }

}

export default MongoDatabase;