export type AddNoteActionType = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: string): AddNoteActionType => ({
  type: "ADD_NOTE",
  payload: note,
});
