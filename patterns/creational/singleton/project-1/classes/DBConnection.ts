class DBConnection {

    private static instance: DBConnection;
    private status: string;

    private constructor() {
        this.status = `Database initialized at ${new Date().toISOString()}`;
    }

    public static getInstance(): DBConnection {
        if(!DBConnection.instance) {
            DBConnection.instance = new DBConnection();
        }
        return DBConnection.instance;
    }

    public getDbStatus(): string {
        return this.status;
    }
}

export default DBConnection;