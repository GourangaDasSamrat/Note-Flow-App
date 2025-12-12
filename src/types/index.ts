export interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: number;
}

export interface ModalProps {
  type: "view" | "edit" | "delete" | "error";
  note?: Note | null;
  onClose: () => void;
  onConfirm?: (data?: any) => void;
  message?: string;
}

export interface NoteFormProps {
  onAddNote: (title: string, body: string) => void;
}

export interface NoteListProps {
  notes: Note[];
  onViewNote: (note: Note) => void;
  onEditNote: (note: Note) => void;
  onDeleteNote: (note: Note) => void;
}

export interface NoteItemProps {
  note: Note;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export type Theme = "light" | "dark";

export interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}
