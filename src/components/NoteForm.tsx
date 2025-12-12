import { useState } from "react";
import type { NoteFormProps } from "../types";

export default function NoteForm({ onAddNote }: NoteFormProps) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const handleSubmit = () => {
    if (noteTitle.trim() && noteBody.trim()) {
      onAddNote(noteTitle.trim(), noteBody.trim());
      setNoteTitle("");
      setNoteBody("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, isBody: boolean) => {
    if (e.key === "Enter" && !isBody && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Note title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e, false)}
        className="input-title"
      />
      <textarea
        placeholder="Write your note here..."
        value={noteBody}
        onChange={(e) => setNoteBody(e.target.value)}
        className="input-body"
        rows={4}
      />
      <button type="button" className="add-btn" onClick={handleSubmit}>
        <span>+</span> Add Note
      </button>
    </div>
  );
}
