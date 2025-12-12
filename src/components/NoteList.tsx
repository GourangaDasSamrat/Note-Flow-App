import type { NoteListProps } from '../types';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onViewNote, onEditNote, onDeleteNote }: NoteListProps) {
  return (
    <div className="notes-section">
      <h2>Your Notes ({notes.length})</h2>
      {notes.length === 0 ? (
        <div className="empty-state">
          <p>No notes yet. Create your first note above!</p>
        </div>
      ) : (
        <ul className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onView={() => onViewNote(note)}
              onEdit={() => onEditNote(note)}
              onDelete={() => onDeleteNote(note)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}