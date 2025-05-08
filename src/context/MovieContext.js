import React, { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [lastSearch, setLastSearch] = useState(
    localStorage.getItem("lastSearch") || ""
  );
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("lastSearch", lastSearch);
    localStorage.setItem("theme", themeMode);
  }, [favorites, lastSearch, themeMode]);

  return (
    <MovieContext.Provider
      value={{
        favorites,
        setFavorites,
        lastSearch,
        setLastSearch,
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
