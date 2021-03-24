import { NewNoteInput } from "./NewNoteInput";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import { NotesState } from "./reducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <Provider store={store}>
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note: string) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </Provider>
  );
}

export default App;
