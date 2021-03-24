import { NewNoteInput } from "./NewNoteInput";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { NotesState } from "./reducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  return (
    <Provider store={store}>
      <NewNoteInput addNote={() => alert()} />
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
