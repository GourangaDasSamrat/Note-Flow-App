import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { ModalProps, Note } from "./types";

function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [modal, setModal] = useState<ModalProps | null>(null);

  const handleAddNote = (title: string, body: string) => {
    if (!title || !body) {
      setModal({
        type: "error",
        message: title
          ? "Please enter note content"
          : "Please enter a note title",
        onClose: () => setModal(null),
      });
      return;
    }

    const newNote: Note = {
      id: Date.now().toString(),
      title,
      body,
      createdAt: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const handleViewNote = (note: Note) => {
    setModal({
      type: "view",
      note,
      onClose: () => setModal(null),
    });
  };

  const handleEditNote = (note: Note) => {
    setModal({
      type: "edit",
      note,
      onClose: () => setModal(null),
      onConfirm: (updatedData: { title: string; body: string }) => {
        const updatedNotes = notes.map((item) =>
          item.id === note.id
            ? { ...item, title: updatedData.title, body: updatedData.body }
            : item
        );
        setNotes(updatedNotes);
      },
    });
  };

  const handleDeleteNote = (note: Note) => {
    setModal({
      type: "delete",
      note,
      onClose: () => setModal(null),
      onConfirm: () => {
        setNotes(notes.filter((item) => item.id !== note.id));
        setModal(null);
      },
    });
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <Header />
        <NoteForm onAddNote={handleAddNote} />
        <NoteList
          notes={notes}
          onViewNote={handleViewNote}
          onEditNote={handleEditNote}
          onDeleteNote={handleDeleteNote}
        />
      </div>
      {modal && <Modal {...modal} />}
    </div>
  );
}

export default App;
