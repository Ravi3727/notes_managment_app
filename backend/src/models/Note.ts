import mongoose, { Document, Schema } from 'mongoose';

export interface INote extends Document {
    title: string;
    description: string;
    userId: mongoose.Types.ObjectId;
}

const NoteSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

export default mongoose.model<INote>('Note', NoteSchema);
