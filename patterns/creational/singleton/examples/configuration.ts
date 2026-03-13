class Configuration {
  private static instance: Configuration;
  private settings: { [key: string]: string };
  
  private constructor() {
    // Private constructor to prevent direct instantiation
    this.settings = {
      apiEndpoint: "https://api.example.com",
      apiKey: "123456789"
    };
  }

  public static getInstance(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }
    return Configuration.instance;
  }

  public getSetting(key: string): string {
    // Get the value of the specified setting
    return this.settings[key];
  }
}

// Usage:
const config1 = Configuration.getInstance();
console.log(config1.getSetting("apiEndpoint")); // "https://api.example.com"

const config2 = Configuration.getInstance();
console.log(config2.getSetting("apiKey")); // "123456789"

console.log(config1 === config2); // true