import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL no está definida en las variables de entorno');
}

if (!process.env.MONGODB_DB_NAME) {
    throw new Error('MONGODB_DB_NAME no está definida en las variables de entorno');
}

export const mongodbConfig = {
    url: 'mongodb://localhost:27017',
    dbName: 'freakDictionary',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
}; 