# Prototype

Instead of creating new objects using `new`, you clone an existing object (the prototype) and then customize the clone.

## 💡 Key idea

- You keep a **template object** (the prototype).
- When you need a new instance, you **clone** the prototype.
- Then you modify only the properties that differ.

## ✅ When to use

- **Object creation is expensive** (e.g., requires heavy computation, I/O, or setup)
- **Objects have many properties or nested state** and you want to avoid repeating initialization code
- You need **many similar objects** that share most of their configuration
- You want to avoid coupling object construction to specific classes (clone-based object creation)

## ⚙️ How it works (high-level)

1. Create an initial instance (the prototype).
2. Clone the prototype when you need a new object.
3. Apply any changes to the cloned object.

## 🧭 Advantages

- Reduces the cost of creating objects when cloning is cheaper than instantiation.
- Simplifies the creation of objects with lots of configuration.
- Supports dynamic and runtime customization without hardcoding constructors.

## ⚠️ Considerations

- Cloning can be shallow by default; you may need to implement deep copy logic for nested objects.
- Can make code harder to understand if cloning logic is implicit or scattered.
- Managing shared references (mutable nested objects) can lead to bugs if not handled carefully.

## 🔍 Example (JavaScript/TypeScript)

```ts
interface Widget {
  type: string;
  options: Record<string, unknown>;
  render: () => void;
}

const baseWidget: Widget = {
  type: "chart",
  options: { width: 400, height: 200, color: "blue" },
  render() {
    console.log(`Rendering ${this.type} at ${this.options.width}x${this.options.height}`);
  },
};

function cloneWidget(proto: Widget, overrides: Partial<Widget> = {}): Widget {
  // shallow clone for strings and primitives
  return {
    ...proto,
    ...overrides,
    // deep clone nested objects when needed
    options: { ...proto.options, ...(overrides.options ?? {}) },
  };
}

const dashboardWidget = cloneWidget(baseWidget, {
  options: { color: "green", height: 250 },
});

dashboardWidget.render();
```

> Tip: In languages like Java or C#, the Prototype pattern is often implemented by providing a `clone()` method that returns a new object with duplicated state.
