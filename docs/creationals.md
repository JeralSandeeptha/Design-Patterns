# Creational Patterns'

- Deal with object creation mechanisms
- Defines how we can create objects
- These are the creational patterns
  - [Singleton Pattern](./patterns/createtional/singleton.md)
  - Builder Pattern
  - [Factory Pattern](./patterns/createtional/factory.md)
  - Abstract Factory Pattern
  - Prototype Pattern

<br />

### Summary 
| Pattern              | What is it?                                  | Why use it?                              | Pros                                | Cons                          | Use Cases                                |
| -------------------- | -------------------------------------------- | ---------------------------------------- | ----------------------------------- | ----------------------------- | ---------------------------------------- |
| **Singleton**        | Ensures only one instance of a class exists  | Centralized access, control of resources | Saves memory, global access         | Difficult to test, breaks SRP | Logger, Configs, DB connection           |
| **Factory Method**   | Subclasses decide which class to instantiate | Delegates object creation                | Loose coupling, scalable            | Increases class count         | UI Toolkits, Document creation           |
| **Abstract Factory** | Creates families of related objects          | Ensures consistency                      | Grouped object creation             | Complex to add new families   | Themed UI systems, OS-specific factories |
| **Builder**          | Constructs complex objects step by step      | Avoids constructor pollution             | Clear and readable, flexible        | Extra classes and code        | Product creation, Query builders         |
| **Prototype**        | Clones existing object                       | Avoids costly instantiation              | Faster creation, simple duplication | Deep vs. shallow copy issues  | Game enemies, UI elements                |