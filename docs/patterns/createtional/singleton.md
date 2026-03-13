# Singleton

The `Singleton Design Pattern` ensures that a class has only one instance and provides a global access point to it. It is used when we want centralized control of resources, such as managing database connections, configuration settings or logging.

- Ensures only one instance of a class exists
- Can create only one object through a class
- If we don't have a created instance, it will create a object and return it but if we already has and object of that class, it will return the exist object
- This object can access through the whole code
- We are using this where having more than one instance could cause problems or waster resources

## Features

The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it, while efficiently managing resources.

- `Single Instance`: Ensures only one object of the class exists in the JVM.
- `Global Access Point`: Provides a centralized way to access the instance.
- `Lazy or Eager Initialization`: An Instance can be created at class load time (eager) or when first needed (lazy).
- `Thread Safety`: Can be designed to work correctly in multithreaded environments.
- `Resource Management`: Useful for managing shared resources like configurations, logging or database connections.
- `Flexibility in Implementation`: Can be implemented using eager initialization, lazy initialization, double-checked locking or an inner static class.

## Scenario

![Image](https://res.cloudinary.com/djgwvmcdl/image/upload/v1773383911/6811d5d9-00c4-4404-ae1c-ae9dd4320f3f.png)

In this scenario, when we want to get data from the database, then we have to create 3 database connections which is a waste of resources. 

In that case, we can create a single database conenction and use that connection accross all the accessicble points.

![Image](https://res.cloudinary.com/djgwvmcdl/image/upload/v1773384243/fb3306ab-72ca-4529-972e-75f74452e93f.png)

## Usage

- `Logging Systems` : Maintain a consistent logging mechanism across an application.
- `Configuration Managers` : Centralize access to configuration settings.
- `Database Connections` : Manage a single point of database access.
- `Thread Pools` : Efficiently manage a pool of threads for concurrent tasks.

## Benefits

- Prevents accidental creation of multiple instances.
- Controls resource usage efficiently (e.g., memory, connections).
- Can simplify coordination across different parts of an application.

## Implementation

- `Private constructor`:
To prevent direct instantiation from outside the class, the constructor of the Singleton class should be made private. This ensures that the class cannot be instantiated using the ‘new’ keyword.

- `Static instance variable`:
Declare a static variable within the class to hold the single instance. This variable should be of the same type as the class itself.

- `Static getInstance() method`:
Provide a static method that controls access to the Singleton instance. This method should check if the instance already exists and return it, or create a new instance if it doesn’t.

- `Lazy initialization`:
The Singleton instance should be created only when it is first requested. This technique, known as lazy initialization, ensures that the instance is not unnecessarily created if it is never used during the application’s execution. Create not only in the constructor but through a getInstance() method.