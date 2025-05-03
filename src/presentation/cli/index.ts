import { AddWordCommand } from './commands/add-word.command';
import readline from 'readline';

export class CLI {
    private rl: readline.Interface;
    private addWordCommand: AddWordCommand;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.addWordCommand = new AddWordCommand();
    }

    public async start(): Promise<void> {
        console.log('Bienvenido al Diccionario Freak');
        console.log('Comandos disponibles:');
        console.log('1. add - Agregar una nueva palabra');
        console.log('2. find - Buscar una palabra');
        console.log('3. list - Listar todas las palabras');
        console.log('4. exit - Salir');

        await this.prompt();
    }

    private async prompt(): Promise<void> {
        this.rl.question('\nIngrese un comando: ', async (command) => {
            switch (command.toLowerCase()) {
                case 'add':
                    await this.handleAddWord();
                    break;
                case 'find':
                    await this.handleFindWord();
                    break;
                case 'list':
                    await this.handleListWords();
                    break;
                case 'exit':
                    console.log('¡Hasta luego!');
                    this.rl.close();
                    return;
                default:
                    console.log('Comando no reconocido');
                    await this.prompt();
            }
        });
    }

    private async handleAddWord(): Promise<void> {
        this.rl.question('Palabra: ', async (word) => {
            this.rl.question('Significado: ', async (meaning) => {
                this.rl.question('Ejemplos (separados por coma): ', async (examplesInput) => {
                    const examples = examplesInput.split(',').map(e => e.trim());
                    await this.addWordCommand.execute(word, meaning, examples);
                    await this.prompt();
                });
            });
        });
    }

    private async handleFindWord(): Promise<void> {
        // Implementaremos esto después
        console.log('Función de búsqueda pendiente');
        await this.prompt();
    }

    private async handleListWords(): Promise<void> {
        // Implementaremos esto después
        console.log('Función de listado pendiente');
        await this.prompt();
    }
} 