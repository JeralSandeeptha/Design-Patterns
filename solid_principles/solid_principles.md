# SOLID Principles

`SOLID` is a set of five design guidelines for object-oriented (and OO-style) programs. They aim to keep designs understandable, flexible, and maintainable. The acronym was popularized by Robert C. Martin (Uncle Bob). Together they reduce tight coupling, scattered responsibilities, and fragile hierarchies.

| Letter | Principle | Details |
| ------ | --------- | ------- |
| **S** | Single Responsibility | [Notes](./single_responsibility_principle.md) |
| **O** | Open / Closed | [Notes](./open_closed_principle.md) |
| **L** | Liskov Substitution | [Notes](./liskov_substitution.md) |
| **I** | Interface Segregation | [Notes](./interface_segregation.md) |
| **D** | Dependency Inversion | [Notes](./dependency_inversion.md) |

SRP and ISP keep units small and focused. OCP and DIP make it easier to extend and swap implementations. LSP keeps inheritance and polymorphism honest so those extensions do not break callers.
