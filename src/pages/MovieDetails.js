// src/components/MovieDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Chip, Button } from "@mui/material";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
        );
        setMovie(res.data);
      } catch (err) {
        console.error("Error fetching movie details", err);
      }
    };
    fetchMovie();
  }, [id, API_KEY]);

  if (!movie) return <Typography>Loading...</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>
        {movie.release_date} | {movie.runtime} min | ⭐ {movie.vote_average}
      </Typography>
      <Box display="flex" gap={1} mb={2}>
        {movie.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} />
        ))}
      </Box>
      <Typography variant="body1" mb={2}>
        {movie.overview}
      </Typography>
      {movie.videos?.results?.length > 0 && (
        <Button
          variant="contained"
          color="secondary"
          href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
          target="_blank"
        >
          Watch Trailer
        </Button>
      )}
    </Box>
  );
};

export default MovieDetails;
