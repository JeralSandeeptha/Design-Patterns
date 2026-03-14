# Factory

Encapsulates the object creation logic and let's subclasses / factory methods decide which concreate class to instantiate.

- return one object
- return object type is selecting by sub classes
- We are passing a input and based on that input it decides which object to return

## Approaches

- Factory with switch / if (`Simple Factory`)

- Factory Method (`Concrete Factory Classes`)

## Diagram
```bash
Client
  |
  v
Abstract Factory
  |
  +---- CreditCardFactory -> CreditCardPayment
  |
  +---- PayPalFactory -> PayPalPayment
  |
  +---- CryptoFactory -> CryptoPayment
```