import mongoose from "mongoose";


interface ConnctionProperties{
    dbUrl: string;
    dbName: string;
}
export class MongoDbConnection{


    static async connect(conParams:ConnctionProperties){
        const {dbName,dbUrl} = conParams;
        try {
            await mongoose.connect(dbUrl,{dbName});
            return true;
        } catch (error) {
            return false;
        }
    }
}