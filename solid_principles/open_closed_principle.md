# Open / Closed Principle (OCP)

**O** in SOLID. Software entities should be **open for extension** but **closed for modification** (of stable, tested core logic).

## Why it matters

Editing core code for every new variant raises regression risk. Extension points let you add behavior in new types or modules instead of churning a shared conditional.

## Signs of violation

- Long `switch` or `if` / `else if` chains on a type or mode flag that you edit for every new case.
- “Temporary” edits to shared modules whenever a new feature variant appears.

## In practice

- Prefer **polymorphism**, **strategy** objects, or **plugins** so new behavior is added via new implementations, not by editing a central dispatcher.
- Keep the **stable API** small; push variation behind it.

## JavaScript-oriented sketch

```javascript
const strategies = {
  email: (user) => sendEmail(user),
  sms: (user) => sendSms(user),
};

function notify(user, channel) {
  const send = strategies[channel];
  if (!send) throw new Error(`Unknown channel: ${channel}`);
  return send(user);
}
```

Adding `push` means adding one entry (and implementation)—not rewriting `notify`’s control flow every time.

← Back to [SOLID Principles overview](./solid_principles.md)
