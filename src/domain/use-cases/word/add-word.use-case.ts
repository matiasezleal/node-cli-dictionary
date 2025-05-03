import { WordRepositoryPort } from "../../ports/output/word.repository.port";
import { Word } from "../../word.entity";


export class AddWordUseCase {
    constructor(private readonly wordRepository: WordRepositoryPort) {}

    async execute(word: string, meaning: string, examples: string[]): Promise<Word> {
        const existingWord = await this.wordRepository.findByWord(word);
        if (existingWord) {
            throw new Error(`La palabra "${word}" ya existe en el diccionario`);
        }
        const newWord = Word.create(word, meaning, examples);
        return await this.wordRepository.save(newWord);
    }
} 