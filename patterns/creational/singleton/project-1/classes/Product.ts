import Logger, { LogLevel } from "./Logger";

class Product {

    private id: number = 0;
    private name: string = '';
    private price: number = 0;

    private logger: Logger;

    constructor() {
        this.logger = Logger.getInstance();
        console.log(this.logger.getLoggerInfo());
    };

    createUser(id: number, name: string, price: number) {
        this.logger.log(LogLevel.INFO, `Product has been saved ${id} ${name} ${price}`);
    }

    getProduct(id: number) {
        this.logger.log(LogLevel.INFO, `Product ${id} has been retrieved`);
    }

    getAllProducts() {
        this.logger.log(LogLevel.INFO, `All products have been retrieved`);
    }

    deleteProduct(id: number) {
        this.logger.log(LogLevel.INFO, `Product ${id} have been retrieved`);
    }

    updateProduct(id: number) {
        this.logger.log(LogLevel.INFO, `${id} product have been updated with ${this.name} and ${this.price} values`);
    }
}

export default Product;