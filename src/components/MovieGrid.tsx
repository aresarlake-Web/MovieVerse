import { Movie } from "../types";
import { MovieCard } from "./MovieCard";
import { SkeletonCard } from "./SkeletonCard";
import { Film } from "lucide-react";

interface MovieGridProps {
  movies: Movie[];
  isLoading: boolean;
  onMovieClick: (movieId: number) => void;
  emptyTitle?: string;
  emptyDescription?: string;
  skeletonCount?: number;
}

export function MovieGrid({
  movies,
  isLoading,
  onMovieClick,
  emptyTitle = "No movies found",
  emptyDescription = "Try adjusting your filters or search terms.",
  skeletonCount = 8
}: MovieGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-white border border-zinc-100 rounded-3xl shadow-xs max-w-xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 mb-5">
          <Film className="w-6 h-6" />
        </div>
        <h3 className="font-display font-semibold text-lg text-zinc-950 tracking-tight">
          {emptyTitle}
        </h3>
        <p className="mt-2 text-sm text-zinc-500 max-w-sm leading-relaxed">
          {emptyDescription}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onMovieClick(movie.id)}
        />
      ))}
    </div>
  );
}
