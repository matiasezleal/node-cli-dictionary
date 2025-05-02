import mongoose from "mongoose";
import { mongodbConfig } from "../../config/mongodb.config";

export class MongoDbConnection {
    private static instance: MongoDbConnection;
    private isConnected: boolean = false;

    private constructor() {}

    public static getInstance(): MongoDbConnection {
        if (!MongoDbConnection.instance) {
            MongoDbConnection.instance = new MongoDbConnection();
        }
        return MongoDbConnection.instance;
    }

    public async connect(): Promise<boolean> {
        if (this.isConnected) {
            return true;
        }

        try {
            await mongoose.connect(mongodbConfig.url, {
                dbName: mongodbConfig.dbName,
                ...mongodbConfig.options
            });

            mongoose.connection.on('error', (err) => {
                console.error('MongoDB connection error:', err);
                this.isConnected = false;
            });

            mongoose.connection.on('disconnected', () => {
                console.log('MongoDB disconnected');
                this.isConnected = false;
            });

            this.isConnected = true;
            console.log('MongoDB connected successfully');
            return true;
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            return false;
        }
    }

    public async disconnect(): Promise<void> {
        if (this.isConnected) {
            await mongoose.disconnect();
            this.isConnected = false;
            console.log('MongoDB disconnected');
        }
    }

    public getConnection(): mongoose.Connection {
        return mongoose.connection;
    }
}

