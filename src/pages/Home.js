import React from "react";
import MovieCard from "../components/MovieCard";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Trending Movies</h2>
      <MovieCard />
      <ThemeToggle />
      <h2 style={{ textAlign: "center" }}>Trending Movies</h2>
      <MovieCard />
    </div>
  );
};

export default Home;
