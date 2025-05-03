import { MongoDbConnection } from './datamanager';
import { CLI } from './presentation/cli';


async function main() {
    try {
        // Conectar a MongoDB
        const mongoConnection = MongoDbConnection.getInstance();
        const connected = await mongoConnection.connect();
        
        if (!connected) {
            console.error('No se pudo conectar a MongoDB');
            process.exit(1);
        }

        // Iniciar la CLI
        const cli = new CLI();
        await cli.start();

    } catch (error) {
        console.error('Error al iniciar la aplicación:', error);
        process.exit(1);
    }
}

main();
