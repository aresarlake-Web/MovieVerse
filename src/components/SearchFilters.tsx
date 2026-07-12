import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types";
import { X, Calendar } from "lucide-react";

interface SearchFiltersProps {
  selectedGenre: number | null;
  onGenreSelect: (genreId: number | null) => void;
  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;
  onClear: () => void;
}

export function SearchFilters({
  selectedGenre,
  onGenreSelect,
  selectedYear,
  onYearSelect,
  onClear
}: SearchFiltersProps) {
  // Fetch genres using React Query
  const { data, isLoading } = useQuery<{ genres: Genre[] }>({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await fetch("/api/movies/genres");
      if (!res.ok) throw new Error("Failed to load genres");
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const genres = data?.genres || [];

  // Years array for movie release dates
  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2014, 2012, 2010, 2008, 2003, 2001, 1999, 1994];

  const hasActiveFilters = selectedGenre !== null || selectedYear !== null;

  return (
    <div className="flex flex-col gap-5 border-b border-zinc-100 pb-6">
      {/* Genre pills horizontal scroll container */}
      <div className="flex flex-col gap-2.5">
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-0.5">
          Browse by Genre
        </span>
        
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 -mx-4 md:-mx-12 px-4 md:px-12">
          {/* "All" pill */}
          <button
            onClick={() => onGenreSelect(null)}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 shrink-0 select-none ${
              selectedGenre === null
                ? "bg-zinc-900 text-white shadow-xs"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            All Genres
          </button>

          {isLoading ? (
            // Shimmer skeletons for genre pills
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-9 w-20 rounded-full bg-zinc-100 animate-pulse shrink-0" />
            ))
          ) : (
            genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => onGenreSelect(genre.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 shrink-0 select-none ${
                  selectedGenre === genre.id
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-transparent hover:border-zinc-200"
                }`}
              >
                {genre.name}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Row of dropdown controls and clear triggers */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Year selector */}
          <div className="relative flex items-center bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-zinc-700 hover:bg-zinc-100 transition-colors duration-150">
            <Calendar className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
            <select
              value={selectedYear || ""}
              onChange={(e) => onYearSelect(e.target.value ? parseInt(e.target.value) : null)}
              className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer pr-1"
            >
              <option value="">Release Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear triggers */}
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 border border-amber-100 rounded-xl cursor-pointer transition-all duration-150"
          >
            <X className="w-3.5 h-3.5" />
            Clear Active Filters
          </button>
        )}
      </div>
    </div>
  );
}
