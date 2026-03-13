import { memo } from 'react';
import '../styles/components/shortcuts-modal.css';

const ShortcutsModal = memo(({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="shortcuts-backdrop open" onClick={onClose}>
      <div className="shortcuts-panel" onClick={(e) => e.stopPropagation()}>
        <div className="shortcuts-header">
          <h3>Keyboard Shortcuts</h3>
          <span className="close-hint">esc</span>
        </div>
        <div className="shortcuts-body">
          <div className="shortcuts-group">
            <div className="shortcuts-group-title">general</div>
            <div className="sc-row">
              <span className="sc-label">Open terminal</span>
              <span className="sc-keys"><kbd>⌘</kbd><kbd>J</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Show shortcuts</span>
              <span className="sc-keys"><kbd>?</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Close overlay</span>
              <span className="sc-keys"><kbd>Esc</kbd></span>
            </div>
          </div>
          <div className="shortcuts-group">
            <div className="shortcuts-group-title">terminal</div>
            <div className="sc-row">
              <span className="sc-label">Tab completion</span>
              <span className="sc-keys"><kbd>Tab</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">History navigation</span>
              <span className="sc-keys"><kbd>↑</kbd><kbd>↓</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Clear screen</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>L</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Cancel input</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>C</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Cursor to start</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>A</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Cursor to end</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>E</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Delete word</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>W</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Delete to end</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>K</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Delete line</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>U</kbd></span>
            </div>
            <div className="sc-row">
              <span className="sc-label">Exit (empty line)</span>
              <span className="sc-keys"><kbd>Ctrl</kbd><kbd>D</kbd></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
ShortcutsModal.displayName = 'ShortcutsModal';

export default ShortcutsModal;
