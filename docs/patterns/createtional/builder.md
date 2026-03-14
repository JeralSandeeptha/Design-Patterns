# Builder

Allows for the step-by-step construction of complex objects, separating the building process from the object's final representation 

If we have optional parts this would be nice

We can constructs complex objects step by step

## Traditional Issue

```ts
class User {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public phone?: string,
    public address?: string
  ) {}
}

const user = new User("John", 45, "john.doe@example.com", "123-456", "Washington");
console.log(user);

// we have to pass large amount of parameters
```

## Components

The pattern typically involves the following components: 

- `Product`: The complex object that is being built.
- `Builder`: An interface or abstract class defining the step-by-step methods for constructing the product's parts.
- `Concrete Builder`: Implements the Builder interface, keeps track of the product, and provides a method to retrieve the final, assembled product.
- `Director (Optional)`: Manages the construction process and defines the order of the building steps, which is especially useful for creating specific, standard configurations of the product.
- `Client`: The code that uses the builder (and optionally a director) to construct the desired object. 

## When to Use the Builder Pattern 🤔

You should consider using the Builder Pattern when:

- You want to `avoid long parameter lists in constructors`
- An object has a `large number of optional parameters`
- When you want to create `immutable or consistent objects`
- The object construction process is complex and needs to be `customizable`
