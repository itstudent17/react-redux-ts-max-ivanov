import React, { useState } from "react";

interface NewNoteInputProps {
  addNote: (note: string) => void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const addNewNote = () => {
    if (!note.trim()) return;
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        type="text"
        name="note"
        placeholder="Enter your note"
        value={note}
        onChange={handleChange}
      />
      <button onClick={addNewNote}>Add note</button>
    </div>
  );
};
