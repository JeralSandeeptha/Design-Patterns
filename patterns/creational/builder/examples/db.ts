class DatabaseConfig {
  constructor(
    public readonly host: string,
    public readonly port: number,
    public readonly username: string,
    public readonly password: string,
    public readonly databaseName: string,
    public readonly ssl?: boolean
  ) {}
}

class DatabaseConfigBuilder {
  private host!: string;
  private port!: number;
  private username!: string;
  private password!: string;
  private databaseName!: string;
  private ssl?: boolean;

  setHost(host: string): this {
    this.host = host;
    return this;
  }

  setPort(port: number): this {
    this.port = port;
    return this;
  }

  setUsername(username: string): this {
    this.username = username;
    return this;
  }

  setPassword(password: string): this {
    this.password = password;
    return this;
  }

  setDatabaseName(databaseName: string): this {
    this.databaseName = databaseName;
    return this;
  }

  enableSSL(): this {
    this.ssl = true;
    return this;
  }

  build(): DatabaseConfig {
    return new DatabaseConfig(this.host, this.port, this.username, this.password, this.databaseName, this.ssl);
  }
}

const dbConfig = new DatabaseConfigBuilder()
  .setHost("localhost")
  .setPort(5432)
  .setUsername("admin")
  .setPassword("securepass")
  .setDatabaseName("mydb")
  .enableSSL()
  .build();

console.log(dbConfig);
