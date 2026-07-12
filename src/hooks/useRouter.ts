import { useState, useEffect } from "react";

export type ViewType = "home" | "search" | "favorites" | "watchlist" | "details";

interface RouteState {
  view: ViewType;
  movieId: number | null;
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(() => {
    return parseHash(window.location.hash);
  });

  function parseHash(hash: string): RouteState {
    const cleanHash = hash.replace("#", "");
    if (!cleanHash || cleanHash === "home") {
      return { view: "home", movieId: null };
    }
    if (cleanHash === "search") {
      return { view: "search", movieId: null };
    }
    if (cleanHash === "favorites") {
      return { view: "favorites", movieId: null };
    }
    if (cleanHash === "watchlist") {
      return { view: "watchlist", movieId: null };
    }
    if (cleanHash.startsWith("movie/")) {
      const parts = cleanHash.split("/");
      const id = parseInt(parts[1], 10);
      if (!isNaN(id)) {
        return { view: "details", movieId: id };
      }
    }
    return { view: "home", movieId: null };
  }

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = (view: ViewType, movieId: number | null = null) => {
    let newHash = `#${view}`;
    if (view === "details" && movieId) {
      newHash = `#movie/${movieId}`;
    }
    window.location.hash = newHash;
  };

  return {
    view: route.view,
    movieId: route.movieId,
    navigate
  };
}
