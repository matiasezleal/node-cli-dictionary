
import { WordModel } from "../../datamanager/models/word.model";
import { WordRepositoryPort } from "../../domain/ports/output/word.repository.port";
import { Word } from "../../domain/word.entity";


export class WordRepository implements WordRepositoryPort {
    private wordModel: WordModel;

    constructor() {
        this.wordModel = new WordModel();
    }

    async save(word: Word): Promise<Word> {
        const savedWord = await this.wordModel.create({
            word: word.word,
            meaning: word.meaning,
            examples: word.examples,
            createdAt: word.createdAt,
            updatedAt: word.updatedAt
        });
        return this.toDomain(savedWord);
    }

    async findById(id: string): Promise<Word | null> {
        const word = await this.wordModel.findById(id);
        return word ? this.toDomain(word) : null;
    }

    async findByWord(word: string): Promise<Word | null> {
        const foundWord = await this.wordModel.findOne({ word });
        return foundWord ? this.toDomain(foundWord) : null;
    }

    async findAll(): Promise<Word[]> {
        const words = await this.wordModel.find({});
        return words.map(this.toDomain);
    }

    async update(id: string, word: Word): Promise<Word | null> {
        const updatedWord = await this.wordModel.update(id, {
            word: word.word,
            meaning: word.meaning,
            examples: word.examples,
            updatedAt: new Date()
        });
        return updatedWord ? this.toDomain(updatedWord) : null;
    }

    async delete(id: string): Promise<boolean> {
        return await this.wordModel.delete(id);
    }

    private toDomain(word: any): Word {
        return Word.create(
            word.word,
            word.meaning,
            word.examples
        );
    }
} 