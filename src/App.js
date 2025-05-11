import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieCard from "./components/MovieCard";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <div>
      <MovieCard />
      <ThemeProvider />
    </div>
  );
};

export default App;
