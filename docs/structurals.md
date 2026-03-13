# Structural Patterns
- Deal with object composition, creating relationships between objects
- There are the strcutral patterns
  - Adapter Pattern
  - Composite Pattern
  - Proxy Pattern
  - Fly Weight Pattern
  - Facade Pattern
  - Bridge Pattern
  - Decorator Pattern

<br />

### Summary 
| Pattern       | What is it?                                 | Why use it?                        | Pros                       | Cons                         | Use Cases                           |
| ------------- | ------------------------------------------- | ---------------------------------- | -------------------------- | ---------------------------- | ----------------------------------- |
| **Adapter**   | Bridges incompatible interfaces             | Reuse existing code                | Enhances compatibility     | Adds complexity              | Legacy integration, API bridge      |
| **Bridge**    | Separates abstraction from implementation   | Vary implementation independently  | Reduces code duplication   | More abstraction             | UI platform layers, Graphic drivers |
| **Composite** | Tree structure for individual/group objects | Uniform treatment                  | Easy hierarchy             | Restriction can be difficult | File systems, UI layout             |
| **Decorator** | Add responsibilities dynamically            | Flexible behavior                  | Runtime flexibility        | Debugging can be tricky      | GUI elements, Wrappers              |
| **Facade**    | Simplified interface to complex subsystems  | Easier usage                       | Reduces complexity         | Can become bloated           | Media converters, Subsystem access  |
| **Flyweight** | Reuses shared objects to save memory        | High performance with many objects | Reduces memory footprint   | Complexity in sharing state  | Text editors, Particle systems      |
| **Proxy**     | Controls access to real object              | Security, performance              | Adds control, lazy loading | Extra layer overhead         | Virtual proxies, Caching            |
