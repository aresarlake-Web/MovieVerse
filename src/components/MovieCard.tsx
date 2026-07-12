import { Star, Heart, Bookmark, Eye } from "lucide-react";
import { Movie } from "../types";
import { useFavorites, useWatchlist } from "../hooks/useLocalStorage";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  key?: any;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { inWatchlist, toggleWatchlist } = useWatchlist();

  const fav = isFavorite(movie.id);
  const watch = inWatchlist(movie.id);

  const posterUrl = movie.poster_path
    ? movie.poster_path.startsWith("http")
      ? movie.poster_path
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div className="group relative flex flex-col cursor-pointer" onClick={onClick}>
      {/* Poster Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100 shadow-xs transition-all duration-300 group-hover:shadow-md">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image fails to load
              (e.currentTarget as HTMLImageElement).src = `https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=500`;
            }}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-zinc-50">
            <span className="font-display font-bold text-zinc-300 text-6xl select-none">M</span>
            <p className="mt-4 text-sm font-medium text-zinc-400 px-4">{movie.title}</p>
          </div>
        )}

        {/* Action Overlays - Airbnb-style heart save and Watchlist quick toggle */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(movie);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 border hover:scale-115 active:scale-95 ${
              fav
                ? "bg-rose-50 border-rose-100 text-rose-500"
                : "bg-white/80 backdrop-blur-xs border-zinc-100 text-zinc-700 hover:bg-white"
            }`}
            title={fav ? "Remove from Favorites" : "Save to Favorites"}
          >
            <Heart className={`w-4.5 h-4.5 ${fav ? "fill-rose-500" : ""}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWatchlist(movie);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 border hover:scale-115 active:scale-95 ${
              watch
                ? "bg-zinc-900 border-zinc-800 text-white"
                : "bg-white/80 backdrop-blur-xs border-zinc-100 text-zinc-700 hover:bg-white"
            }`}
            title={watch ? "Remove from Watchlist" : "Add to Watchlist"}
          >
            <Bookmark className={`w-4.5 h-4.5 ${watch ? "fill-white" : ""}`} />
          </button>
        </div>

        {/* Star rating overlay for quick glance */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs border border-zinc-100/30 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-zinc-900">
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </span>
        </div>
      </div>

      {/* Meta Content */}
      <div className="mt-3.5 px-0.5">
        <h3 className="font-display font-semibold text-[15px] leading-tight text-zinc-950 tracking-tight group-hover:text-[#f59e0b] transition-colors duration-150 truncate">
          {movie.title}
        </h3>
        <div className="mt-1 flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span>{releaseYear}</span>
          <span className="flex items-center gap-1 text-zinc-400 group-hover:text-zinc-600 transition-colors duration-150">
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </span>
        </div>
      </div>
    </div>
  );
}
