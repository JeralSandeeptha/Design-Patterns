import DBConnection from "./DBConnection";
import Logger, { LogLevel } from "./Logger";

class User {

    private id: number = 0;
    private name: string = '';
    private age: number = 0;
    private address: string= '';

    private logger: Logger;
    private db: DBConnection;

    constructor() {
        this.logger = Logger.getInstance();
        this.db = DBConnection.getInstance();
        // console.log(this.logger.getLoggerInfo());
        // console.log(this.db.getDbStatus());
    };

    createUser(id: number, name: string, age: number, address: string) {
        this.logger.log(LogLevel.INFO, `User has been saved ${id} ${name} ${age} ${address}`);
    }

    getUser(id: number) {
        this.logger.log(LogLevel.INFO, `User ${id} has been retrieved`);
    }

    getAllUsers() {
        this.logger.log(LogLevel.INFO, `All users have been retrieved`);
    }

    deleteUser(id: number) {
        this.logger.log(LogLevel.INFO, `User ${id} have been retrieved`);
    }

    updateUser(id: number) {
        this.logger.log(LogLevel.INFO, `${id} user have been updated with ${this.name} ${this.age} and ${this.address} values`);
    }
}

export default User;
