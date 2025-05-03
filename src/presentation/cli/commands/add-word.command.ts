import { AddWordUseCase } from "../../../domain/use-cases/word/add-word.use-case";
import { WordRepository } from "../../../infrastructure/repositories/word.repository";

export class AddWordCommand {
    private addWordUseCase: AddWordUseCase;

    constructor() {
        const wordRepository = new WordRepository();
        this.addWordUseCase = new AddWordUseCase(wordRepository);
    }

    async execute(word: string, meaning: string, examples: string[]): Promise<void> {
        try {
            const newWord = await this.addWordUseCase.execute(word, meaning, examples);
            console.log(`Palabra agregada exitosamente: ${newWord.word}`);
            console.log(`Significado: ${newWord.meaning}`);
            console.log(`Ejemplos: ${newWord.examples.join(', ')}`);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
} 