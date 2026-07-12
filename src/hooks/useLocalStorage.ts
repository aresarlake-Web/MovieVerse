import { useState, useEffect, useCallback } from "react";
import { Movie } from "../types";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("Error reading localStorage key", key, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        // Dispatch custom event to trigger updates in other components
        window.dispatchEvent(new Event("local-storage-update"));
        return valueToStore;
      });
    } catch (error) {
      console.error("Error setting localStorage key", key, error);
    }
  }, [key]);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.warn("Error re-syncing localStorage key", key, error);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage-update", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage-update", handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}

// Concrete helper hooks for Favorites and Watchlist
export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<Movie[]>("movieverse-favorites", []);

  const isFavorite = useCallback((movieId: number) => {
    return favorites.some((m) => m.id === movieId);
  }, [favorites]);

  const toggleFavorite = useCallback((movie: Movie) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  }, [setFavorites]);

  return { favorites, isFavorite, toggleFavorite };
}

export function useWatchlist() {
  const [watchlist, setWatchlist] = useLocalStorage<Movie[]>("movieverse-watchlist", []);

  const inWatchlist = useCallback((movieId: number) => {
    return watchlist.some((m) => m.id === movieId);
  }, [watchlist]);

  const toggleWatchlist = useCallback((movie: Movie) => {
    setWatchlist((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  }, [setWatchlist]);

  return { watchlist, inWatchlist, toggleWatchlist };
}
