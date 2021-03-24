import React, { useState } from "react";

interface NewNoteInputProps {
  addNote: (note: string) => void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
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
      <button onClick={() => alert()}>Add note</button>
    </div>
  );
};
