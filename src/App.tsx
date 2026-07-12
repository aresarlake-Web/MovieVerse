import { useState, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { 
  Star, 
  Clock, 
  Heart, 
  Bookmark, 
  Play, 
  ArrowLeft, 
  Search, 
  Sparkles, 
  Plus, 
  Check, 
  ExternalLink, 
  Film, 
  ChevronRight, 
  SlidersHorizontal,
  X,
  AlertCircle,
  Flame,
  Calendar
} from "lucide-react";

import { Movie, MovieDetail, Genre } from "./types";
import { useRouter } from "./hooks/useRouter";
import { useFavorites, useWatchlist } from "./hooks/useLocalStorage";
import { Navbar } from "./components/Navbar";
import { MovieGrid } from "./components/MovieGrid";
import { SearchFilters } from "./components/SearchFilters";
import { TrailerModal } from "./components/TrailerModal";

// Create Query Client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function MovieVerseApp() {
  const { view, movieId, navigate } = useRouter();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const { watchlist, inWatchlist, toggleWatchlist } = useWatchlist();

  // --- Home Tab States ---
  const [activeHomeTab, setActiveHomeTab] = useState<"trending" | "popular" | "top-rated" | "upcoming">("trending");
  const [homePage, setHomePage] = useState(1);
  const [loadedHomeMovies, setLoadedHomeMovies] = useState<Movie[]>([]);

  // --- Search Tab States ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [searchPage, setSearchPage] = useState(1);
  const [loadedSearchMovies, setLoadedSearchMovies] = useState<Movie[]>([]);
  
  // Instant search suggestion states
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);

  // --- Trailer Modal States ---
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [activeTrailerUrl, setActiveTrailerUrl] = useState("");
  const [activeTrailerTitle, setActiveTrailerTitle] = useState("");

  // Dismiss suggestions if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync suggestion list on search text input
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const res = await fetch(`/api/movies/suggestions?query=${encodeURIComponent(searchQuery)}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data.results || []);
        }
      } catch (err) {
        console.error("Error fetching suggestions", err);
      }
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // --- React Query for Home Section ---
  const { data: homeData, isLoading: isHomeLoading, isError: isHomeError } = useQuery({
    queryKey: ["homeMovies", activeHomeTab, homePage],
    queryFn: async () => {
      const res = await fetch(`/api/movies/${activeHomeTab}?page=${homePage}`);
      if (!res.ok) throw new Error("Failed to load categories");
      return res.json() as Promise<{ results: Movie[]; total_pages: number; page: number }>;
    }
  });

  // Handle merging infinite pages for Home categories
  useEffect(() => {
    if (homeData?.results) {
      if (homePage === 1) {
        setLoadedHomeMovies(homeData.results);
      } else {
        setLoadedHomeMovies((prev) => {
          const ids = new Set(prev.map(m => m.id));
          const uniques = homeData.results.filter(m => !ids.has(m.id));
          return [...prev, ...uniques];
        });
      }
    }
  }, [homeData, homePage]);

  // Reset page when category tab changes
  const handleHomeTabChange = (tab: typeof activeHomeTab) => {
    if (tab === activeHomeTab) return;
    setActiveHomeTab(tab);
    setHomePage(1);
    setLoadedHomeMovies([]);
  };

  // --- React Query for Search Results ---
  const searchQueryKey = ["searchMovies", searchQuery, selectedGenre, selectedYear, searchPage];
  const { data: searchData, isLoading: isSearchLoading, isError: isSearchError } = useQuery({
    queryKey: searchQueryKey,
    queryFn: async () => {
      const url = searchQuery.trim() 
        ? `/api/movies/search?query=${encodeURIComponent(searchQuery)}&genre=${selectedGenre || ""}&year=${selectedYear || ""}&page=${searchPage}`
        : `/api/movies/trending?genre=${selectedGenre || ""}&year=${selectedYear || ""}&page=${searchPage}`; // Trending serves as search tab home state
      
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to execute search");
      return res.json() as Promise<{ results: Movie[]; total_pages: number; page: number }>;
    }
  });

  // Merge infinite scrolling pages for Search tab
  useEffect(() => {
    if (searchData?.results) {
      if (searchPage === 1) {
        setLoadedSearchMovies(searchData.results);
      } else {
        setLoadedSearchMovies((prev) => {
          const ids = new Set(prev.map(m => m.id));
          const uniques = searchData.results.filter(m => !ids.has(m.id));
          return [...prev, ...uniques];
        });
      }
    }
  }, [searchData, searchPage]);

  // Handle Search Input adjustments
  const handleSearchQueryChange = (val: string) => {
    setSearchQuery(val);
    setSearchPage(1);
    setLoadedSearchMovies([]);
  };

  const handleGenreChange = (genreId: number | null) => {
    setSelectedGenre(genreId);
    setSearchPage(1);
    setLoadedSearchMovies([]);
  };

  const handleYearChange = (year: number | null) => {
    setSelectedYear(year);
    setSearchPage(1);
    setLoadedSearchMovies([]);
  };

  const handleClearFilters = () => {
    setSelectedGenre(null);
    setSelectedYear(null);
    setSearchQuery("");
    setSearchPage(1);
    setLoadedSearchMovies([]);
  };

  // --- React Query for Movie Details Page ---
  const { data: detailMovie, isLoading: isDetailLoading, isError: isDetailError } = useQuery<MovieDetail>({
    queryKey: ["movieDetail", movieId],
    queryFn: async () => {
      if (!movieId) throw new Error("No movie ID provided");
      const res = await fetch(`/api/movies/${movieId}`);
      if (!res.ok) throw new Error("Failed to load details");
      return res.json();
    },
    enabled: view === "details" && movieId !== null
  });

  const openTrailer = (title: string, url: string | null) => {
    if (!url) return;
    setActiveTrailerTitle(title);
    setActiveTrailerUrl(url);
    setTrailerModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      {/* Top Navbar */}
      <Navbar currentView={view} onNavigate={navigate} />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-12">
        {/* =========================================================================
            1. HOME VIEW 
           ========================================================================= */}
        {view === "home" && (
          <div className="flex flex-col gap-10">
            {/* Spotlight Hero Section (Mockup-inspired cinematic header) */}
            <div className="relative w-full rounded-3xl overflow-hidden bg-zinc-950 text-white border border-zinc-900 shadow-2xl">
              {/* Giant backdrop image */}
              <div className="absolute inset-0 z-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Spotlight Hero backdrop"
                  className="w-full h-full object-cover object-center animate-fade-in"
                />
              </div>
              <div className="absolute inset-0 z-1 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
              
              {/* Hero details layout */}
              <div className="relative z-10 px-6 py-12 md:p-14 flex flex-col items-start max-w-2xl gap-5">
                {/* Authentic Mockup Breadcrumb Locator */}
                <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-zinc-400 uppercase select-none">
                  <span>You are here:</span>
                  <span className="text-zinc-500">Movies</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-amber-400 font-extrabold">Dune: Part Two</span>
                </div>
                
                {/* Floating white box with crisp title */}
                <div className="bg-white px-6 py-4.5 rounded-lg border border-zinc-200/80 shadow-lg text-zinc-950 max-w-full select-all">
                  <h1 className="font-display font-extrabold text-2xl md:text-4xl leading-tight tracking-wider uppercase">
                    DUNE: PART TWO
                  </h1>
                </div>

                {/* Orange/Yellow Badge label block */}
                <div className="bg-[#f59e0b] text-zinc-950 font-black text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-sm shadow-sm select-none">
                  MOVIE
                </div>
                
                {/* Metadata row with custom borders */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-zinc-300">
                  <span className="border border-zinc-700 bg-zinc-900/50 px-2 py-0.5 rounded text-[10px] text-zinc-400 tracking-wider">HD</span>
                  <span className="border border-zinc-700 bg-zinc-900/50 px-2 py-0.5 rounded text-[10px] text-zinc-400 tracking-wider">PG-13</span>
                  <span>•</span>
                  <span>165 MIN</span>
                  <span>•</span>
                  <span className="text-[#f59e0b] uppercase tracking-wide">Sci-Fi / Adventure</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-white font-bold">8.3</span>
                  </span>
                </div>
                
                <p className="text-sm md:text-[14px] text-zinc-300 font-normal leading-relaxed">
                  Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.
                </p>
                
                {/* Hero Action Buttons - Styled exactly like the mockup */}
                <div className="mt-3 flex flex-wrap gap-3.5 items-center">
                  <button 
                    onClick={() => navigate("details", 967847)}
                    className="px-6 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-zinc-950 rounded-lg font-black text-xs uppercase tracking-widest cursor-pointer shadow-md flex items-center gap-2.5 transition-all duration-150 active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-zinc-950 text-zinc-950" />
                    Play Movie
                  </button>
                  <button 
                    onClick={() => {
                      toggleWatchlist({
                        id: 967847,
                        title: "Dune: Part Two",
                        overview: "Follow the mythic journey of Paul Atreides...",
                        poster_path: "/czemb77OIv6Ur87VgG9vEPSgFBb.jpg",
                        backdrop_path: "/xOMo8BRK7ev677v976fe7vFe8ev.jpg",
                        vote_average: 8.3,
                        release_date: "2024-02-27",
                        genre_ids: [878, 12],
                        popularity: 250.6,
                        vote_count: 5320
                      });
                    }}
                    className={`px-5 py-3.5 border rounded-lg font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-150 flex items-center gap-2 active:scale-95 ${
                      inWatchlist(967847)
                        ? "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                        : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                    }`}
                  >
                    {inWatchlist(967847) ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>

            {/* Category Browser Header */}
            <div className="flex flex-col gap-6 border-b border-zinc-100 pb-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  {/* Decorative mockup-inspired left accent label */}
                  <div className="flex items-center gap-2 mb-2 select-none">
                    <span className="w-1.5 h-4 bg-[#f59e0b] rounded-xs" />
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">CATALOGUE EXPLORER</span>
                  </div>
                  <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-zinc-950 uppercase">
                    Browse Cinematic Collections
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    Select a curated track to view direct live-persisted movie registries.
                  </p>
                </div>
              </div>

              {/* Styled tab bar mimicking the premium mockup in the photo */}
              <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl flex items-center overflow-x-auto no-scrollbar gap-1 shadow-inner">
                {([
                  { id: "trending", label: "TRENDING", icon: Flame },
                  { id: "popular", label: "POPULAR", icon: Film },
                  { id: "top-rated", label: "TOP RATED", icon: Star },
                  { id: "upcoming", label: "UPCOMING", icon: Calendar }
                ] as const).map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeHomeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleHomeTabChange(tab.id)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-150 cursor-pointer shrink-0 select-none ${
                        isActive
                          ? "bg-zinc-800 text-white border-b-2 border-[#f59e0b] shadow-md"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#f59e0b] fill-[#f59e0b]" : "text-zinc-500"}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Movies Display Grid */}
            {isHomeError ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <AlertCircle className="w-10 h-10 text-rose-500 mb-3" />
                <h3 className="font-semibold text-zinc-900">Failed to load movies</h3>
                <p className="text-sm text-zinc-500 mt-1">Please try again later or check your internet connection.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-12">
                <MovieGrid 
                  movies={loadedHomeMovies} 
                  isLoading={isHomeLoading && loadedHomeMovies.length === 0} 
                  onMovieClick={(id) => navigate("details", id)}
                />

                {/* Pagination / Infinite Scroll Loading Button */}
                {loadedHomeMovies.length > 0 && homeData && homeData.page < homeData.total_pages && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setHomePage(prev => prev + 1)}
                      disabled={isHomeLoading}
                      className="px-6 py-3 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-xl font-bold text-sm text-zinc-900 cursor-pointer shadow-xs flex items-center gap-2.5 disabled:opacity-50 transition-all duration-150 active:scale-97"
                    >
                      {isHomeLoading ? (
                        <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                      ) : null}
                      Load More Movies
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            2. SEARCH & DISCOVER VIEW 
           ========================================================================= */}
        {view === "search" && (
          <div className="flex flex-col gap-8">
            {/* Search Input Bar and Suggested Dropdown */}
            <div className="relative max-w-2xl mx-auto w-full flex flex-col gap-2 z-30">
              <div className="relative flex items-center bg-white border border-zinc-200 rounded-2xl px-4.5 py-3.5 shadow-xs focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-950 transition-all duration-200">
                <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search movies by title, actors or plots..."
                  value={searchQuery}
                  onChange={(e) => handleSearchQueryChange(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full bg-transparent border-none text-sm font-medium text-zinc-900 focus:outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => handleSearchQueryChange("")}
                    className="w-5 h-5 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-500 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Live instant search suggestions box */}
              {showSuggestions && suggestions.length > 0 && (
                <div 
                  ref={suggestionRef}
                  className="absolute top-16 left-0 right-0 bg-white border border-zinc-100 rounded-2xl shadow-lg p-2 flex flex-col gap-0.5 animate-fade-in"
                >
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-3 py-2">
                    Instant Suggestions
                  </span>
                  {suggestions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setShowSuggestions(false);
                        navigate("details", s.id);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-zinc-50 flex items-center justify-between gap-3 transition-colors cursor-pointer duration-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-11 bg-zinc-100 rounded-md overflow-hidden shrink-0">
                          {s.poster_path ? (
                            <img 
                              src={`https://image.tmdb.org/t/p/w200${s.poster_path}`} 
                              alt={s.title} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-400">M</div>
                          )}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-zinc-950 block leading-tight">{s.title}</span>
                          <span className="text-[11px] font-medium text-zinc-500">{s.release_date ? new Date(s.release_date).getFullYear() : "N/A"}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-zinc-900">{s.vote_average?.toFixed(1) || "N/A"}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Custom Horizontal Genre Scroll and Dropdown Filters */}
            <SearchFilters
              selectedGenre={selectedGenre}
              onGenreSelect={handleGenreChange}
              selectedYear={selectedYear}
              onYearSelect={handleYearChange}
              onClear={handleClearFilters}
            />

            {/* Searched Results Display */}
            {isSearchError ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <AlertCircle className="w-10 h-10 text-rose-500 mb-3" />
                <h3 className="font-semibold text-zinc-900">Failed to find search results</h3>
                <p className="text-sm text-zinc-500 mt-1">Please try modifying your keywords or filters.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-10">
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest px-0.5">
                  {searchQuery.trim() ? "Search Results" : "Trending Discovery"}
                </h3>

                <MovieGrid
                  movies={loadedSearchMovies}
                  isLoading={isSearchLoading && loadedSearchMovies.length === 0}
                  onMovieClick={(id) => navigate("details", id)}
                  emptyTitle="No cinematic matches found"
                  emptyDescription="Try broadening your spelling, selecting a different genre, or clearing active years."
                />

                {/* Search Pagination */}
                {loadedSearchMovies.length > 0 && searchData && searchPage < searchData.total_pages && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setSearchPage(prev => prev + 1)}
                      disabled={isSearchLoading}
                      className="px-6 py-3 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-xl font-bold text-sm text-zinc-900 cursor-pointer shadow-xs flex items-center gap-2.5 disabled:opacity-50 transition-all duration-150 active:scale-97"
                    >
                      {isSearchLoading ? (
                        <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                      ) : null}
                      Load More Results
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            3. FAVORITES VIEW 
           ========================================================================= */}
        {view === "favorites" && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <div>
              <h2 className="font-display font-bold text-2xl tracking-tight text-zinc-950">
                Favorite Movies
              </h2>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                Your personal safe-haven of favorite cinema pieces. Saved in local storage.
              </p>
            </div>

            <MovieGrid
              movies={favorites}
              isLoading={false}
              onMovieClick={(id) => navigate("details", id)}
              emptyTitle="No favorites saved yet"
              emptyDescription="Tap the circular heart button on any movie card or detail page to add them here."
            />
          </div>
        )}

        {/* =========================================================================
            4. WATCHLIST VIEW 
           ========================================================================= */}
        {view === "watchlist" && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <div>
              <h2 className="font-display font-bold text-2xl tracking-tight text-zinc-950">
                Watchlist Collection
              </h2>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                Movies queued for your upcoming viewing schedules. Saved locally.
              </p>
            </div>

            <MovieGrid
              movies={watchlist}
              isLoading={false}
              onMovieClick={(id) => navigate("details", id)}
              emptyTitle="Your Watchlist is empty"
              emptyDescription="Queue movies to watch next by clicking the bookmark tab icon on any movie poster."
            />
          </div>
        )}

        {/* =========================================================================
            5. DETAILS VIEW 
           ========================================================================= */}
        {view === "details" && (
          <div className="animate-fade-in">
            {isDetailLoading ? (
              // Structured detail page skeleton
              <div className="flex flex-col gap-10 animate-pulse">
                <div className="h-96 w-full rounded-3xl bg-zinc-200" />
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="w-full md:w-1/3 aspect-[2/3] rounded-2xl bg-zinc-200 shrink-0" />
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-8 bg-zinc-200 rounded-sm w-1/2" />
                    <div className="h-4 bg-zinc-200 rounded-sm w-1/4" />
                    <div className="h-24 bg-zinc-200 rounded-sm w-full mt-4" />
                  </div>
                </div>
              </div>
            ) : isDetailError || !detailMovie ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <AlertCircle className="w-12 h-12 text-rose-500 mb-4" />
                <h3 className="font-display font-bold text-xl text-zinc-950">Failed to load movie details</h3>
                <p className="text-zinc-500 mt-2 max-w-sm">This could be due to a missing/invalid TMDB ID or network limits.</p>
                <button
                  onClick={() => navigate("home")}
                  className="mt-6 px-5 py-2.5 bg-zinc-900 text-white rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-12">
                {/* Back link */}
                <button
                  onClick={() => window.history.back()}
                  className="self-start flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 cursor-pointer group transition-colors duration-150"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to previous
                </button>

                {/* Detailed banner layout */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-14">
                  {/* Left Poster block */}
                  <div className="w-full md:w-80 shrink-0">
                    <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-md">
                      {detailMovie.poster_path ? (
                        <img 
                          src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`} 
                          alt={detailMovie.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold">No Poster</div>
                      )}
                    </div>
                  </div>

                  {/* Right movie credentials info */}
                  <div className="flex-1 flex flex-col justify-center gap-5">
                    {/* Authentic Mockup Breadcrumb Locator */}
                    <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-zinc-400 uppercase select-none">
                      <span>You are here:</span>
                      <span className="text-zinc-500">Movies</span>
                      <span className="text-zinc-600">/</span>
                      <span className="text-amber-500 font-extrabold">{detailMovie.title}</span>
                    </div>

                    {/* Floating white box with crisp title */}
                    <div className="bg-white px-6 py-4.5 rounded-lg border border-zinc-200 shadow-md text-zinc-950 max-w-full inline-block self-start">
                      <h1 className="font-display font-extrabold text-2xl md:text-4xl leading-tight tracking-wider uppercase">
                        {detailMovie.title}
                      </h1>
                    </div>

                    {/* Orange/Yellow Badge label block */}
                    <div className="bg-[#f59e0b] text-zinc-950 font-black text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-sm shadow-sm select-none self-start">
                      MOVIE
                    </div>

                    {/* Metadata row with custom borders */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-zinc-600 bg-zinc-50 border border-zinc-200/60 rounded-xl px-4 py-3">
                      <span className="border border-zinc-300 bg-white px-2 py-0.5 rounded text-[10px] text-zinc-500 tracking-wider">HD</span>
                      <span className="border border-zinc-300 bg-white px-2 py-0.5 rounded text-[10px] text-zinc-500 tracking-wider">PG-13</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-zinc-950 font-bold">{detailMovie.vote_average ? detailMovie.vote_average.toFixed(1) : "N/A"}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{detailMovie.runtime || 120} MIN</span>
                      </span>
                      <span>•</span>
                      <span className="uppercase">{detailMovie.release_date ? new Date(detailMovie.release_date).getFullYear() : "N/A"}</span>
                    </div>

                    {/* Genres pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      {(detailMovie.genres || []).map((g) => (
                        <span key={g.id} className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold select-none border border-zinc-200/40">
                          {g.name.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    {detailMovie.tagline && (
                      <p className="italic text-zinc-500 font-medium text-sm md:text-base leading-relaxed">
                        "{detailMovie.tagline}"
                      </p>
                    )}

                    <div>
                      <h3 className="font-display font-semibold text-zinc-950 text-base mb-2">Storyline</h3>
                      <p className="text-zinc-600 text-[15px] leading-relaxed font-normal">
                        {detailMovie.overview || "No plot description available."}
                      </p>
                    </div>

                    {/* Primary Interactions Bar */}
                    <div className="flex flex-wrap gap-3.5 mt-3">
                      {detailMovie.trailer_url && (
                        <button
                          onClick={() => openTrailer(detailMovie.title, detailMovie.trailer_url)}
                          className="px-6 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-zinc-950 rounded-lg font-black text-xs uppercase tracking-widest cursor-pointer shadow-md flex items-center gap-2.5 transition-all duration-150 active:scale-95"
                        >
                          <Play className="w-4 h-4 fill-zinc-950 text-zinc-950" />
                          Play Movie
                        </button>
                      )}

                      <button
                        onClick={() => toggleFavorite(detailMovie)}
                        className={`px-5 py-3.5 border rounded-lg font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-150 flex items-center gap-2.5 active:scale-95 ${
                          isFavorite(detailMovie.id)
                            ? "bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100/50"
                            : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite(detailMovie.id) ? "fill-rose-500" : ""}`} />
                        {isFavorite(detailMovie.id) ? "Favorited" : "Save to Favorites"}
                      </button>

                      <button
                        onClick={() => toggleWatchlist(detailMovie)}
                        className={`px-5 py-3.5 border rounded-lg font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-150 flex items-center gap-2.5 active:scale-95 ${
                          inWatchlist(detailMovie.id)
                            ? "bg-zinc-900 border-zinc-800 text-white"
                            : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                        }`}
                      >
                        {inWatchlist(detailMovie.id) ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        {inWatchlist(detailMovie.id) ? "In Watchlist" : "Add to Watchlist"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cast Members section */}
                {detailMovie.cast && detailMovie.cast.length > 0 && (
                  <div className="border-t border-zinc-100 pt-10">
                    <h3 className="font-display font-bold text-xl text-zinc-950 mb-6">
                      Top Billed Cast
                    </h3>
                    <div className="flex items-start gap-6 overflow-x-auto no-scrollbar py-2 px-1">
                      {detailMovie.cast.map((actor) => (
                        <div key={actor.id} className="w-28 shrink-0 flex flex-col items-center text-center gap-2">
                          <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 border border-zinc-200 shadow-xs shrink-0">
                            {actor.profile_path ? (
                              <img 
                                src={actor.profile_path} 
                                alt={actor.name}
                                className="w-full h-full object-cover object-top"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-400 font-bold text-xs select-none">
                                {actor.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs font-bold text-zinc-950 leading-tight block">{actor.name}</span>
                            <span className="text-[10px] font-medium text-zinc-500 leading-snug">{actor.character}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Similar Recommendations block */}
                {detailMovie.similar && detailMovie.similar.length > 0 && (
                  <div className="border-t border-zinc-100 pt-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display font-bold text-xl text-zinc-950">
                        Similar Movies to Explore
                      </h3>
                      <span className="text-xs font-semibold text-zinc-400 flex items-center gap-0.5">
                        Recommendations
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <MovieGrid
                      movies={detailMovie.similar}
                      isLoading={false}
                      onMovieClick={(id) => navigate("details", id)}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer footer element */}
      <footer className="mt-16 bg-white border-t border-zinc-100 py-10 px-6 md:px-12 text-center text-zinc-400 text-xs font-medium flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full">
        <span className="font-display font-bold text-zinc-700">
          Movie<span className="text-[#f59e0b]">Verse</span> &copy; {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-6 text-zinc-500 font-semibold">
          <a href="#home" className="hover:text-[#f59e0b] transition-colors">Privacy</a>
          <a href="#home" className="hover:text-[#f59e0b] transition-colors">Terms of Use</a>
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#f59e0b] flex items-center gap-1 transition-colors">
            TMDB Source
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>

      {/* Embedded YouTube Trailer Overlay */}
      <TrailerModal
        isOpen={trailerModalOpen}
        onClose={() => setTrailerModalOpen(false)}
        trailerUrl={activeTrailerUrl}
        movieTitle={activeTrailerTitle}
      />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieVerseApp />
    </QueryClientProvider>
  );
}
