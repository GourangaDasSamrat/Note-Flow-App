import type { NoteItemProps } from '../types';

export default function NoteItem({ note, onView, onEdit, onDelete }: NoteItemProps) {
  return (
    <li className="note-item">
      <div className="note-info">
        <h3>{note.title}</h3>
        <p className="note-preview">
          {note.body.substring(0, 60)}
          {note.body.length > 60 ? '...' : ''}
        </p>
      </div>
      <div className="note-actions">
        <button
          type="button"
          className="btn-view"
          onClick={onView}
          aria-label="View note"
        >
          👁️ View
        </button>
        <button
          type="button"
          className="btn-edit"
          onClick={onEdit}
          aria-label="Edit note"
        >
          ✏️ Edit
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={onDelete}
          aria-label="Delete note"
        >
          🗑️ Delete
        </button>
      </div>
    </li>
  );
}