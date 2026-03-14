// Main interface
interface Payment {
    pay(amount: number): void
}

// Payment Types
class PayPalPayment implements Payment{
    pay(amount: number): void {
        console.log(`${amount} was paid via PayPal payment`);
    }
}

class CardPayment implements Payment{
    pay(amount: number): void {
        console.log(`${amount} was paid via Card payment`);
    }
}

class CryptoPayment implements Payment{
    pay(amount: number): void {
        console.log(`${amount} was paid via Crypto payment`);
    }
}

// Create abstract factory
abstract class PaymentFactory {
    abstract createPayment(): Payment

    makePayment(amount: number): void {
        const payment = this.createPayment();
        payment.pay(amount);
    }
}

// Concrete Factories / Subclasses will decide which payment to create
class PayPalPaymentFactory implements PaymentFactory {
    createPayment(): Payment {
        return new PayPalPayment();
    }
    makePayment(amount: number): void {
        throw new Error("Method not implemented.");
    }
}

class CardPaymentFactory implements PaymentFactory {
    createPayment(): Payment {
        return new CardPayment();
    }
    makePayment(amount: number): void {
        throw new Error("Method not implemented.");
    }

}

class CryptoPaymentFactory implements PaymentFactory {
    createPayment(): Payment {
        return new CryptoPayment();
    }
    makePayment(amount: number): void {
        throw new Error("Method not implemented.");
    }

}

// Usage
const factory = new PayPalPaymentFactory();

factory.createPayment();
factory.makePayment(100);