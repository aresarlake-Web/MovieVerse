import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { ALL_MOVIES, GENRES } from "./src/movies-data.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// API Key detection
const TMDB_API_KEY = process.env.TMDB_API_KEY || "";
const isTMDBConfigured = !!TMDB_API_KEY;

// TMDB Fetch helper
async function fetchFromTMDB(endpoint: string, params: Record<string, string> = {}) {
  const queryParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    ...params,
  });
  const url = `https://api.themoviedb.org/3/${endpoint}?${queryParams.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB error: ${response.statusText}`);
  }
  return response.json();
}

// Helper: paginate and filter mock movies
function paginateAndFilterMock(movies: any[], query: any) {
  let list = [...movies];
  
  // Filter by genre
  if (query.genre) {
    const genreId = parseInt(query.genre);
    list = list.filter(m => m.genre_ids && m.genre_ids.includes(genreId));
  }
  
  // Filter by year
  if (query.year) {
    const year = parseInt(query.year);
    list = list.filter(m => m.release_date && new Date(m.release_date).getFullYear() === year);
  }

  // Filter by search query (if any)
  if (query.search) {
    const term = query.search.toLowerCase();
    list = list.filter(m => 
      (m.title && m.title.toLowerCase().includes(term)) || 
      (m.overview && m.overview.toLowerCase().includes(term))
    );
  }
  
  const page = parseInt(query.page || "1");
  const limit = 8; // 8 movies per page for clean visual density
  const total_results = list.length;
  const total_pages = Math.ceil(total_results / limit);
  const results = list.slice((page - 1) * limit, page * limit);

  return {
    results,
    page,
    total_pages,
    total_results
  };
}

// API Routes

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    tmdbConfigured: isTMDBConfigured,
    localMoviesCount: ALL_MOVIES.length 
  });
});

// Genres List
app.get("/api/movies/genres", async (req, res) => {
  try {
    if (isTMDBConfigured) {
      const data = await fetchFromTMDB("genre/movie/list");
      return res.json(data);
    } else {
      return res.json({ genres: GENRES });
    }
  } catch (error: any) {
    console.error("Error fetching genres:", error.message);
    return res.json({ genres: GENRES }); // Safe fallback
  }
});

// Trending Movies
app.get("/api/movies/trending", async (req, res) => {
  try {
    const page = req.query.page?.toString() || "1";
    if (isTMDBConfigured) {
      const genre = req.query.genre?.toString();
      const year = req.query.year?.toString();
      
      // If genre or year is selected, we query TMDB's discover API for robust server-side filtering
      if (genre || year) {
        const params: Record<string, string> = { page };
        if (genre) params.with_genres = genre;
        if (year) params.primary_release_year = year;
        const data = await fetchFromTMDB("discover/movie", params);
        return res.json(data);
      }
      
      const data = await fetchFromTMDB("trending/movie/day", { page });
      return res.json(data);
    } else {
      // Sort by popularity score or high rating
      const sorted = [...ALL_MOVIES].sort((a, b) => b.popularity - a.popularity);
      return res.json(paginateAndFilterMock(sorted, req.query));
    }
  } catch (error: any) {
    console.error("Error fetching trending:", error);
    const sorted = [...ALL_MOVIES].sort((a, b) => b.popularity - a.popularity);
    return res.json(paginateAndFilterMock(sorted, req.query));
  }
});

// Popular Movies
app.get("/api/movies/popular", async (req, res) => {
  try {
    const page = req.query.page?.toString() || "1";
    if (isTMDBConfigured) {
      const data = await fetchFromTMDB("movie/popular", { page });
      return res.json(data);
    } else {
      const sorted = [...ALL_MOVIES].sort((a, b) => b.popularity - a.popularity);
      return res.json(paginateAndFilterMock(sorted, req.query));
    }
  } catch (error: any) {
    console.error("Error fetching popular:", error);
    const sorted = [...ALL_MOVIES].sort((a, b) => b.popularity - a.popularity);
    return res.json(paginateAndFilterMock(sorted, req.query));
  }
});

// Top Rated Movies
app.get("/api/movies/top-rated", async (req, res) => {
  try {
    const page = req.query.page?.toString() || "1";
    if (isTMDBConfigured) {
      const data = await fetchFromTMDB("movie/top_rated", { page });
      return res.json(data);
    } else {
      const sorted = [...ALL_MOVIES].sort((a, b) => b.vote_average - a.vote_average);
      return res.json(paginateAndFilterMock(sorted, req.query));
    }
  } catch (error: any) {
    console.error("Error fetching top rated:", error);
    const sorted = [...ALL_MOVIES].sort((a, b) => b.vote_average - a.vote_average);
    return res.json(paginateAndFilterMock(sorted, req.query));
  }
});

// Upcoming Movies
app.get("/api/movies/upcoming", async (req, res) => {
  try {
    const page = req.query.page?.toString() || "1";
    if (isTMDBConfigured) {
      const data = await fetchFromTMDB("movie/upcoming", { page });
      return res.json(data);
    } else {
      const sorted = [...ALL_MOVIES].sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
      return res.json(paginateAndFilterMock(sorted, req.query));
    }
  } catch (error: any) {
    console.error("Error fetching upcoming:", error);
    const sorted = [...ALL_MOVIES].sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    return res.json(paginateAndFilterMock(sorted, req.query));
  }
});

// Search Movies
app.get("/api/movies/search", async (req, res) => {
  try {
    const query = req.query.query?.toString() || "";
    const page = req.query.page?.toString() || "1";
    if (!query.trim()) {
      return res.json({ results: [], page: 1, total_pages: 1, total_results: 0 });
    }

    if (isTMDBConfigured) {
      const data = await fetchFromTMDB("search/movie", { query, page });
      
      const genre = req.query.genre?.toString();
      const year = req.query.year?.toString();
      
      if (genre || year) {
        let results = data.results || [];
        if (genre) {
          const genreId = parseInt(genre);
          results = results.filter((m: any) => m.genre_ids && m.genre_ids.includes(genreId));
        }
        if (year) {
          results = results.filter((m: any) => m.release_date && m.release_date.startsWith(year));
        }
        return res.json({
          ...data,
          results,
          total_results: results.length
        });
      }
      return res.json(data);
    } else {
      const filteredParams = { ...req.query, search: query };
      return res.json(paginateAndFilterMock(ALL_MOVIES, filteredParams));
    }
  } catch (error: any) {
    console.error("Error searching movies:", error);
    const filteredParams = { ...req.query, search: req.query.query };
    return res.json(paginateAndFilterMock(ALL_MOVIES, filteredParams));
  }
});

// Instant Search Suggestions (Prefix-matching titles or popular elements)
app.get("/api/movies/suggestions", async (req, res) => {
  try {
    const query = req.query.query?.toString() || "";
    if (!query.trim()) {
      return res.json({ results: [] });
    }

    if (isTMDBConfigured) {
      // Just fetch the first page from search
      const data = await fetchFromTMDB("search/movie", { query, page: "1" });
      return res.json({ results: (data.results || []).slice(0, 5) });
    } else {
      const term = query.toLowerCase();
      const matched = ALL_MOVIES.filter(m => m.title.toLowerCase().includes(term))
        .slice(0, 5);
      return res.json({ results: matched });
    }
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return res.json({ results: [] });
  }
});

// Movie Details
app.get("/api/movies/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (isTMDBConfigured) {
      const [details, credits, videos, similar] = await Promise.all([
        fetchFromTMDB(`movie/${id}`),
        fetchFromTMDB(`movie/${id}/credits`),
        fetchFromTMDB(`movie/${id}/videos`),
        fetchFromTMDB(`movie/${id}/similar`)
      ]);
      
      const trailer = (videos.results || []).find((v: any) => v.type === "Trailer" && v.site === "YouTube");
      
      return res.json({
        ...details,
        genres: details.genres || [],
        runtime: details.runtime || 120,
        tagline: details.tagline || "",
        cast: (credits.cast || []).slice(0, 10).map((c: any) => ({
          id: c.id,
          name: c.name,
          character: c.character,
          profile_path: c.profile_path ? `https://image.tmdb.org/t/p/w200${c.profile_path}` : null
        })),
        trailer_url: trailer ? `https://www.youtube.com/embed/${trailer.key}` : null,
        similar: (similar.results || []).slice(0, 4)
      });
    } else {
      const movie = ALL_MOVIES.find(m => m.id === parseInt(id));
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }
      return res.json(movie);
    }
  } catch (error: any) {
    console.error(`Error fetching movie detail for ID ${req.params.id}:`, error);
    const movie = ALL_MOVIES.find(m => m.id === parseInt(req.params.id));
    if (movie) {
      return res.json(movie);
    }
    return res.status(500).json({ error: "Failed to load movie details" });
  }
});

// Set up fullstack environment
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

start();
