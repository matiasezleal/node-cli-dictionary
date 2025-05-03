export class Word {
    constructor(
        public readonly word: string,
        public readonly meaning: string,
        public readonly examples: string[],
        public readonly createdAt: Date = new Date(),
        public readonly updatedAt: Date = new Date()
    ) {}

    static create(word: string, meaning: string, examples: string[]): Word {
        return new Word(word, meaning, examples);
    }
} 