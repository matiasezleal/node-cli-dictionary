import { Word } from "../../word.entity";

export interface WordRepositoryPort {
    save(word: Word): Promise<Word>;
    findById(id: string): Promise<Word | null>;
    findByWord(word: string): Promise<Word | null>;
    findAll(): Promise<Word[]>;
    update(id: string, word: Word): Promise<Word | null>;
    delete(id: string): Promise<boolean>;
} 