import { useState } from 'react';
import type { ModalProps } from '../types';

export default function Modal({ type, note, onClose, onConfirm, message }: ModalProps) {
  const [editTitle, setEditTitle] = useState(note?.title || "");
  const [editBody, setEditBody] = useState(note?.body || "");
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmType, setConfirmType] = useState<'save' | 'cancel'>('save');

  const handleEditAction = (action: 'save' | 'cancel') => {
    setConfirmType(action);
    setShowConfirm(true);
  };

  const handleConfirmEdit = () => {
    if (confirmType === 'save' && onConfirm) {
      onConfirm({ title: editTitle, body: editBody });
    }
    setShowConfirm(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {type === 'view' && note && (
          <>
            <div className="modal-header">
              <h2>{note.title}</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              <p>{note.body}</p>
            </div>
          </>
        )}

        {type === 'edit' && note && !showConfirm && (
          <>
            <div className="modal-header">
              <h2>Edit Note</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Note title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="modal-input"
              />
              <textarea
                placeholder="Note body"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="modal-textarea"
                rows={6}
              />
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => handleEditAction('cancel')}>
                Cancel
              </button>
              <button className="btn-save" onClick={() => handleEditAction('save')}>
                Save Changes
              </button>
            </div>
          </>
        )}

        {type === 'edit' && showConfirm && (
          <>
            <div className="modal-header">
              <h2>Confirm Action</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              <p>
                {confirmType === 'save'
                  ? 'Are you sure you want to save these changes?'
                  : 'Are you sure you want to cancel? Your changes will be lost.'}
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setShowConfirm(false)}>
                Go Back
              </button>
              <button className="btn-confirm" onClick={handleConfirmEdit}>
                {confirmType === 'save' ? 'Yes, Save' : 'Yes, Cancel'}
              </button>
            </div>
          </>
        )}

        {type === 'delete' && (
          <>
            <div className="modal-header">
              <h2>Delete Note</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this note? This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="btn-delete" onClick={onConfirm}>
                Delete
              </button>
            </div>
          </>
        )}

        {type === 'error' && (
          <>
            <div className="modal-header error">
              <h2>⚠️ Warning</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button className="btn-confirm" onClick={onClose}>
                OK
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}