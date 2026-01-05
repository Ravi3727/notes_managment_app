import { Request, Response } from 'express';
import Note from '../models/Note';

interface AuthRequest extends Request {
    user?: any;
}

export const getNotes = async (req: AuthRequest, res: Response) => {
    try {
        const notes = await Note.find({ userId: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const createNote = async (req: AuthRequest, res: Response) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Please add all fields' });
    }

    try {
        const note = await Note.create({
            title,
            description,
            userId: req.user.id,
        });
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteNote = async (req: AuthRequest, res: Response) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        if (note.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await note.deleteOne();
        res.json({ message: 'Note removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
