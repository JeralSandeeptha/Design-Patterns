# Single Responsibility Principle (SRP)

**S** in SOLID. A module (class, function, file) should have **one reason to change**—one cohesive job.

## Why it matters

Mixed concerns make bugs harder to isolate and force unrelated features to collide in one place. When only one kind of change maps to one module, reviews and refactors stay smaller and safer.

## Signs of violation

- God objects or modules that “do everything.”
- Catch-all `utils` that mix unrelated helpers.
- Unrelated features repeatedly touching the same file for different reasons.

## In practice

- Split **persistence**, **UI**, and **domain rules** along boundaries that match how requirements change.
- Extract **validation**, **mapping** (DTO ↔ domain), and **side effects** when they obscure the main flow.

## JavaScript-oriented sketch

Instead of one object that formats output *and* saves to disk:

```javascript
function buildInvoiceLines(cart) {
  /* pure domain: cart → line items */
}

async function saveInvoice(lines, storage) {
  await storage.write(lines);
}
```

Callers orchestrate; each unit answers to a single, clear responsibility.

← Back to [SOLID Principles overview](./solid_principles.md)
