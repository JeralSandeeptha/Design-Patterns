class DatabaseConnection {
  private static instance: DatabaseConnection;
  
  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      // Perform database connection setup here
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    // Execute the query
    console.log(`Executing query: ${sql}`);
  }
}

// Usage:
const dbConnection1 = DatabaseConnection.getInstance();
dbConnection1.query("SELECT * FROM users");

const dbConnection2 = DatabaseConnection.getInstance();
dbConnection2.query("UPDATE users SET name = 'John'");

console.log(dbConnection1 === dbConnection2); // true