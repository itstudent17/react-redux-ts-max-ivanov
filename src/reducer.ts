import { AddNoteActionType } from "./actions";
import { ADD_NOTE } from "./actionsTypes";

export interface NotesState {
  notes: Array<string>;
}

const initialState = {
  notes: [],
};

export const reducer = (
  state: NotesState = initialState,
  action: AddNoteActionType
) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

    default:
      return state;
  }
};
