export default function ShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1410]/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border border-[#DDD4C5] w-full max-w-sm rounded-2xl p-6 shadow-2xl space-y-4 relative animate-in fade-in zoom-in-95 duration-150">
        <div className="flex justify-between items-center border-b border-[#E5DEC3] pb-3">
          <h3 className="font-mono font-bold text-sm text-[#2F261F]">Keyboard Shortcuts</h3>
          <button
            onClick={onClose}
            className="text-[#8C7F72] hover:text-[#2A221B] cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-2.5 font-mono text-xs text-[#52463B]">
          <div className="flex justify-between items-center">
            <span>Jump to Home</span>
            <kbd className="px-2 py-0.5 bg-[#EAE2D3] rounded border border-[#D0C5B4]">h</kbd>
          </div>
          <div className="flex justify-between items-center">
            <span>Jump to Projects</span>
            <kbd className="px-2 py-0.5 bg-[#EAE2D3] rounded border border-[#D0C5B4]">p</kbd>
          </div>
          <div className="flex justify-between items-center">
            <span>Jump to Skills</span>
            <kbd className="px-2 py-0.5 bg-[#EAE2D3] rounded border border-[#D0C5B4]">s</kbd>
          </div>
          <div className="flex justify-between items-center">
            <span>Jump to Education</span>
            <kbd className="px-2 py-0.5 bg-[#EAE2D3] rounded border border-[#D0C5B4]">e</kbd>
          </div>
          <div className="flex justify-between items-center">
            <span>Open Resume</span>
            <kbd className="px-2 py-0.5 bg-[#EAE2D3] rounded border border-[#D0C5B4]">r</kbd>
          </div>
          <div className="flex justify-between items-center">
            <span>Close Modals</span>
            <kbd className="px-2 py-0.5 bg-[#EAE2D3] rounded border border-[#D0C5B4]">esc</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
