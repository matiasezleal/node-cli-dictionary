import mongoose, { Document, Model, Schema, FilterQuery } from 'mongoose';

export abstract class BaseModel<T extends Document> {
    protected model: Model<T>;

    constructor(schema: Schema, modelName: string) {
        this.model = mongoose.model<T>(modelName, schema);
    }

    public async create(data: Partial<T>): Promise<T> {
        return this.model.create(data);
    }

    public async findById(id: string): Promise<T | null> {
        return this.model.findById(id);
    }

    public async findOne(conditions: FilterQuery<T>): Promise<T | null> {
        return this.model.findOne(conditions);
    }

    public async find(conditions: FilterQuery<T>): Promise<T[]> {
        return this.model.find(conditions);
    }

    public async update(id: string, data: Partial<T>): Promise<T | null> {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    public async delete(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id);
        return result !== null;
    }
} 