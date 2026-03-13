enum LogLevel {
  INFO,
  ERROR,
  WARNING
}

class Logger {
  private static instance: Logger;
  
  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(level: LogLevel, message: string): void {
    // Log the message with the specified level
    console.log(`[${LogLevel[level]}] ${message}`);
  }
}

// Usage:
const logger1 = Logger.getInstance();
logger1.log(LogLevel.INFO, "Application started");

const logger2 = Logger.getInstance();
logger2.log(LogLevel.ERROR, "An error occurred");

console.log(logger1 === logger2); // true