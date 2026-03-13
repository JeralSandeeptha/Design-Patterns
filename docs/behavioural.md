# Behavioural Patterns
- Deal with communication between objects
- Defines how objects communicate between each other
- These are the behavioural patterns
  - Template Method Pattern
  - Mediator Pattern
  - Chain of Responsibitlity Pattern
  - Observer Pattern
  - Stratergy Pattern
  - Command Pattern
  - State Pattern
  - Visitor Pattern
  - Iterator Pattern
  - Interpreter Pattern
  - Memento Pattern

<br />

### Summary
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
