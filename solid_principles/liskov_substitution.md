# Liskov Substitution Principle (LSP)

**L** in SOLID. Objects of a **subtype** must be usable **anywhere** the base type is expected, without surprising callers. Subtypes must honor the **contract** of the supertype (inputs, outputs, errors, and observable behavior).

## Why it matters

Polymorphism only works if every implementation is a true substitute. If a subclass behaves differently in ways callers do not expect, code that typed the base breaks at runtime or becomes riddled with special cases.

## Signs of violation

- Subclass methods throw “not supported” or no-op for operations the base guarantees.
- **Stronger preconditions** (e.g. base accepts any string, subclass requires non-empty) or **weaker postconditions** than the base implies.
- Inheritance used for code reuse where the “is-a” relationship is not really true (e.g. `Square extends Rectangle` in the classic example when width/height can diverge).

## In practice

- Favor **composition** when “is-a” is awkward; share behavior with delegation, not forced hierarchy.
- Keep **contracts** consistent: same kinds of inputs accepted, same guarantees on return values and errors.

## JavaScript-oriented sketch

If every “storage” implementation must support `get` and `set`, a read-only cache that throws on `set` is **not** a drop-in substitute unless callers were never allowed to call `set`—in which case the shared type was too broad. Narrow the interface (see [Interface Segregation](./interface_segregation.md)) or split types so substitutability holds.

← Back to [SOLID Principles overview](./solid_principles.md)
