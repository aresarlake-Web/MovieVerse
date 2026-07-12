import { useEffect } from "react";
import { X } from "lucide-react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl: string;
  movieTitle: string;
}

export function TrailerModal({ isOpen, onClose, trailerUrl, movieTitle }: TrailerModalProps) {
  // Dismiss on ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase">Trailer</span>
          <span className="text-xs font-semibold text-white truncate max-w-xs md:max-w-md">{movieTitle}</span>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 cursor-pointer transition-all duration-150"
          title="Close Trailer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Iframe */}
        <iframe
          src={`${trailerUrl}?autoplay=1&rel=0`}
          title={`${movieTitle} Trailer`}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
