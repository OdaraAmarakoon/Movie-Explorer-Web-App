import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Trending Movies</h2>
      <MovieCard />
    </div>
  );
};

export default Home;
