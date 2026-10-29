import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "favorites";

const MovieContext = createContext();

// Custom hook to consume the favorites context from any component
// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  // Prevents the save effect from overwriting localStorage before favorites are loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on startup
  useEffect(() => {
    const storedFavorites = localStorage.getItem(STORAGE_KEY);
    if (storedFavorites) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites(JSON.parse(storedFavorites));
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage every time they change
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites, isLoaded]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => favorites.some((movie) => movie.id === movieId);

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
