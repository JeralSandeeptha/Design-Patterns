import DBConnection from "./DBConnection";
import Logger, { LogLevel } from "./Logger";

type ProductFields = {
    id: number;
    name: string;
    price: number;
};

let products: ProductFields[] = [];

class Product {

    private id: number = 0;
    private name: string = '';
    private price: number = 0;

    private logger: Logger;
    private db: DBConnection;

    constructor() {
        this.logger = Logger.getInstance();
        this.db = DBConnection.getInstance();
        // console.log(this.logger.getLoggerInfo());
        // console.log(this.db.getDbStatus());
    };

    createProduct(id: number, name: string, price: number) {
        this.logger.log(LogLevel.INFO, `Product has been saved ${id} ${name} ${price}`);
        return products.push(...products, {
            id,
            name,
            price
        });
    }

    getProduct(id: number) {
        this.logger.log(LogLevel.INFO, `Product ${id} has been retrieved`);
    }

    getAllProducts() {
        this.logger.log(LogLevel.INFO, `All products have been retrieved`);
        return products;
    }

    deleteProduct(id: number) {
        this.logger.log(LogLevel.INFO, `Product ${id} have been retrieved`);
    }

    updateProduct(id: number) {
        this.logger.log(LogLevel.INFO, `${id} product have been updated with ${this.name} and ${this.price} values`);
    }
}

export default Product;