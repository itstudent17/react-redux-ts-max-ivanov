import { NewNoteInput } from "./NewNoteInput";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";

function App() {
  const state = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  return (
    <Provider store={store}>
      <NewNoteInput addNote={() => alert()} />
      <hr />
      <ul>
        <li>Some note</li>
      </ul>
    </Provider>
  );
}

export default App;
