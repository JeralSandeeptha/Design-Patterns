# Introduction
- Design patterns are proven solutions to common software design problems. They are best practices used by developers to solve recurring design issues in software development. Design patterns are not code, but conceptual templates you can apply in various situations.

- Design patterns are typically grouped into three main categories:
  - Creational Design Patterns
  - Structural Design Patterns
  - Behavioural Design Patterns

- Instead of those patterns there are many design patterns related to specific frameworks [READ THIS ARTICLE](https://www.patterns.dev/#patterns)

## Summary of Patterns

### Creational 
| Pattern              | What is it?                                  | Why use it?                              | Pros                                | Cons                          | Use Cases                                |
| -------------------- | -------------------------------------------- | ---------------------------------------- | ----------------------------------- | ----------------------------- | ---------------------------------------- |
| **Singleton**        | Ensures only one instance of a class exists  | Centralized access, control of resources | Saves memory, global access         | Difficult to test, breaks SRP | Logger, Configs, DB connection           |
| **Factory Method**   | Subclasses decide which class to instantiate | Delegates object creation                | Loose coupling, scalable            | Increases class count         | UI Toolkits, Document creation           |
| **Abstract Factory** | Creates families of related objects          | Ensures consistency                      | Grouped object creation             | Complex to add new families   | Themed UI systems, OS-specific factories |
| **Builder**          | Constructs complex objects step by step      | Avoids constructor pollution             | Clear and readable, flexible        | Extra classes and code        | Product creation, Query builders         |
| **Prototype**        | Clones existing object                       | Avoids costly instantiation              | Faster creation, simple duplication | Deep vs. shallow copy issues  | Game enemies, UI elements                |

### Structural 
| Pattern       | What is it?                                 | Why use it?                        | Pros                       | Cons                         | Use Cases                           |
| ------------- | ------------------------------------------- | ---------------------------------- | -------------------------- | ---------------------------- | ----------------------------------- |
| **Adapter**   | Bridges incompatible interfaces             | Reuse existing code                | Enhances compatibility     | Adds complexity              | Legacy integration, API bridge      |
| **Bridge**    | Separates abstraction from implementation   | Vary implementation independently  | Reduces code duplication   | More abstraction             | UI platform layers, Graphic drivers |
| **Composite** | Tree structure for individual/group objects | Uniform treatment                  | Easy hierarchy             | Restriction can be difficult | File systems, UI layout             |
| **Decorator** | Add responsibilities dynamically            | Flexible behavior                  | Runtime flexibility        | Debugging can be tricky      | GUI elements, Wrappers              |
| **Facade**    | Simplified interface to complex subsystems  | Easier usage                       | Reduces complexity         | Can become bloated           | Media converters, Subsystem access  |
| **Flyweight** | Reuses shared objects to save memory        | High performance with many objects | Reduces memory footprint   | Complexity in sharing state  | Text editors, Particle systems      |
| **Proxy**     | Controls access to real object              | Security, performance              | Adds control, lazy loading | Extra layer overhead         | Virtual proxies, Caching            |

### Behavioural 
| Pattern                     | What is it?                                  | Why use it?                       | Pros                                     | Cons                               | Use Cases                               |
| --------------------------- | -------------------------------------------- | --------------------------------- | ---------------------------------------- | ---------------------------------- | --------------------------------------- |
| **Chain of Responsibility** | Pass request along handlers                  | Decouples sender and receiver     | Flexible routing                         | Hard to trace flow                 | Middleware, Event propagation           |
| **Command**                 | Encapsulates requests as objects             | Parameterize and queue actions    | Undo/redo, logs                          | Extra classes                      | GUI actions, Task queues                |
| **Interpreter**             | Implements grammar rules                     | Simple language processing        | Easy to extend rules                     | Inefficient for large grammars     | Regex engines, SQL interpreters         |
| **Iterator**                | Sequential access to elements                | Hides internal structure          | Unified traversal                        | Extra classes for collections      | Collections, Data structures            |
| **Mediator**                | Centralizes communication between components | Decouples components              | Reduces dependencies                     | May become overly complex          | Chat systems, UI component coordination |
| **Memento**                 | Captures and restores object state           | Undo support                      | Encapsulation preserved                  | High memory usage                  | Text editor history, Game saves         |
| **Observer**                | Notify observers on state change             | Decouples sender and receivers    | Real-time updates                        | Memory leaks possible              | Event systems, Stock tickers            |
| **State**                   | Changes behavior based on internal state     | Avoid conditional logic           | Encapsulates state-specific behavior     | More classes                       | UI toggles, Workflow stages             |
| **Strategy**                | Selects algorithm at runtime                 | Swap logic dynamically            | Eliminates conditionals                  | Overhead with many strategies      | Sorting, Payment methods                |
| **Template Method**         | Defines a skeleton, defers steps             | Common algorithm with flexibility | Reuse logic                              | Rigid inheritance                  | Data parsing, Report generation         |
| **Visitor**                 | Add new operations to structure              | Keeps responsibilities clean      | New operations without modifying objects | Difficult to add new element types | ASTs, Compilers, Reporting tools        |
