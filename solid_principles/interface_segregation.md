# Interface Segregation Principle (ISP)

**I** in SOLID. Clients should not be forced to depend on methods they do not use. Prefer **several small** interfaces (or role types) over one large one.

## Why it matters

Fat interfaces couple unrelated clients to the same shape. Implementers end up with **empty methods**, **stubs**, or `throw new Error('not implemented')`—a sign the abstraction is wrong for some users.

## Signs of violation

- Implementations that leave several methods unused or intentionally broken.
- Callers that only need a subset of a type but must import or mock the whole surface.

## In practice

- In JavaScript/TypeScript, use **small object shapes**, **multiple focused types**, or **split APIs** by role (`Readable`, `Writable`, not always `ReadWrite`).
- Prefer **narrow** parameters: pass only what a function needs (e.g. `{ read: fn }` instead of a full database client).

## JavaScript-oriented sketch

```javascript
// Instead of one “god” worker type, segregate by what callers need:
async function generateReport(fetchOrders, renderPdf) {
  const orders = await fetchOrders();
  return renderPdf(orders);
}
```

`fetchOrders` and `renderPdf` can be implemented independently; a single mega-interface is not forced on either side.

← Back to [SOLID Principles overview](./solid_principles.md)
