import { Film, Heart, Bookmark, Search, Home } from "lucide-react";
import { ViewType } from "../hooks/useRouter";
import { useFavorites, useWatchlist } from "../hooks/useLocalStorage";

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, movieId: number | null) => void;
}

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  const { favorites } = useFavorites();
  const { watchlist } = useWatchlist();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 px-6 py-4 md:px-12 flex items-center justify-between">
      {/* Brand Logo */}
      <button 
        onClick={() => onNavigate("home", null)}
        className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
      >
        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#f59e0b] shadow-sm">
          <Film className="w-4 h-4" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-zinc-900 group-hover:text-[#f59e0b] transition-colors duration-200">
          Movie<span className="text-[#f59e0b]">Verse</span>
        </span>
      </button>

      {/* Navigation Links */}
      <div className="flex items-center gap-1 md:gap-2">
        <button
          onClick={() => onNavigate("home", null)}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            currentView === "home"
              ? "bg-zinc-900 text-white shadow-sm"
              : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Home</span>
        </button>

        <button
          onClick={() => onNavigate("search", null)}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            currentView === "search"
              ? "bg-zinc-900 text-white shadow-sm"
              : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>

        <button
          onClick={() => onNavigate("favorites", null)}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer relative ${
            currentView === "favorites"
              ? "bg-zinc-900 text-white shadow-sm"
              : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
          }`}
        >
          <Heart className="w-4 h-4" />
          <span className="hidden sm:inline">Favorites</span>
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-[#f59e0b] text-[10px] font-black text-zinc-950 flex items-center justify-center animate-pulse">
              {favorites.length}
            </span>
          )}
        </button>

        <button
          onClick={() => onNavigate("watchlist", null)}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer relative ${
            currentView === "watchlist"
              ? "bg-zinc-900 text-white shadow-sm"
              : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span className="hidden sm:inline">Watchlist</span>
          {watchlist.length > 0 && (
            <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-zinc-900 text-[10px] font-bold text-white flex items-center justify-center border border-white">
              {watchlist.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
