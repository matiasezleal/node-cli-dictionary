import { Schema, Document } from 'mongoose';
import { BaseModel } from './base.model';

export interface IWord extends Document {
    word: string;
    meaning: string;
    examples: string[];
    createdAt: Date;
    updatedAt: Date;
}

const wordSchema = new Schema<IWord>({
    word: { type: String, required: true, unique: true },
    meaning: { type: String, required: true },
    examples: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export class WordModel extends BaseModel<IWord> {
    constructor() {
        super(wordSchema, 'Word');
    }
} 