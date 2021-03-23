interface NewNoteInputProps {
  addNote: (note: string) => void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  return (
    <div>
      <input type="text" name="note" placeholder="Enter your note" />
      <button onClick={() => alert()}>Add note</button>
    </div>
  );
};
