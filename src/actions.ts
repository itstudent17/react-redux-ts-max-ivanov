import { ADD_NOTE } from "./actionsTypes";

export type AddNoteActionType = { type: string; payload: string };

export const addNote = (note: string): AddNoteActionType => ({
  type: ADD_NOTE,
  payload: note,
});
