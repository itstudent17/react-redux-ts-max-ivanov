import { NewNoteInput } from "./NewNoteInput";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
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
