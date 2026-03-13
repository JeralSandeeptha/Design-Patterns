# Singleton

- Ensures only one instance of a class exists
- Can create only one object through a class
- If we don't have a created instance, it will create a object and return it but if we already has and object of that class, it will return the exist object
- This object can access through the whole code
- We are using this where having more than one instance could cause problems or waster resources

## Scenario

![Image](https://res.cloudinary.com/djgwvmcdl/image/upload/v1773383911/6811d5d9-00c4-4404-ae1c-ae9dd4320f3f.png)

In this scenario, when we want to get data from the database, then we have to create 3 database connections which is a waste of resources. 

In that case, we can create a single database conenction and use that connection accross all the accessicble points.

![Image](https://res.cloudinary.com/djgwvmcdl/image/upload/v1773384243/fb3306ab-72ca-4529-972e-75f74452e93f.png)

## Usage

- Loggers
- Database Connections
- Configurations