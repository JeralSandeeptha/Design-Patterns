export enum LogLevel {
  INFO = "INFO",
  ERROR = "ERROR",
  WARNING = "WARNING"
}

class Logger {

    // Static instance for call thorugh class name without object creation
    private static instance: Logger;
    private message: string;

    // Private constructor to prevent direct instantiation
    // Cancle the creation of objects
    private constructor() {
        this.message = `Logger was initiated at ${new Date().toISOString()}`
    }

    // we want to access via class name not the class created obeject
    public static getInstance(): Logger {
        if(!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public getLoggerInfo(): string {
        return this.message;
    };

    public log(level: LogLevel, message: string): void {
        console.log(`${level} - ${message}`);
    }
}

export default Logger;
