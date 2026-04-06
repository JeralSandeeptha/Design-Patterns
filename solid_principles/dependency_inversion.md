# Dependency Inversion Principle (DIP)

DIP is the **D** in SOLID. It is often confused with “dependency injection,” but they are related ideas, not the same thing.

## The two rules (Uncle Bob’s formulation)

1. **High-level modules** should not depend on **low-level modules**. Both should depend on **abstractions**.
2. **Abstractions** should not depend on **details**. **Details** should depend on **abstractions**.

**High-level** code encodes business rules and application flow. **Low-level** code talks to the file system, database, HTTP, timers, or third-party SDKs. DIP pushes you to depend on something stable (an interface, protocol, or small abstraction) in the middle, not on concrete vendors.

## Why it matters

- **Testability:** You can substitute fakes or mocks behind the abstraction.
- **Flexibility:** Swap SQLite for Postgres, or REST for gRPC, without rewriting domain logic.
- **Clear boundaries:** “What the app does” stays separate from “how data gets in and out.”

## Dependency injection vs inversion

| Concept | Meaning |
| ------- | ------- |
| **Dependency inversion** | The *design* rule: depend on abstractions, not concrete implementations. |
| **Dependency injection** | A *mechanism*: abstractions are supplied from outside (constructor, factory, framework) instead of being `new`’d inside the module. |

You can invert dependencies without a DI container; passing a small object or function that implements the abstraction is enough.

## JavaScript-oriented sketch

High-level code depends only on a narrow contract (here, a function or object shape):

```javascript
// Abstraction: “something that loads users”
async function listAdminEmails(userRepository) {
  const users = await userRepository.findByRole('admin');
  return users.map((u) => u.email);
}
```

Low-level detail implements that contract:

```javascript
// Detail: concrete DB access
const postgresUserRepository = {
  async findByRole(role) {
    // ...query Postgres...
  },
};

// Wiring (composition root): choose the concrete implementation here
await listAdminEmails(postgresUserRepository);
```

The domain function does not import the database driver; the **detail** depends on the **abstraction** (the agreed `findByRole` shape), and the caller supplies an implementation.

## Practical tips

- Define **narrow** ports (what you need: `save`, `findById`, `sendEmail`) instead of leaking framework types into domain code.
- Keep a **composition root** (main module, bootstrap) where concrete implementations are chosen and wired.
- In TypeScript, model abstractions with `interface` or small types; in plain JS, document the expected shape in JSDoc or tests.

## Related SOLID ideas

DIP pairs naturally with [Open / Closed](./open_closed.md): new implementations extend behavior behind the same abstraction. [Interface Segregation](./interface_segregation.md) keeps those abstractions small so high-level code does not pull in unused capabilities.

← Back to [SOLID Principles overview](./solid_principles.md)
