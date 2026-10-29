const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Shared fetch helper: throws if the API responds with an error status
const fetchFromApi = async (endpoint) => {
  const separator = endpoint.includes("?") ? "&" : "?";
  const response = await fetch(`${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

// GET /movie/popular
export const getPopularMovies = () => fetchFromApi("/movie/popular");

// GET /search/movie?query=...
export const searchMovies = (query) =>
  fetchFromApi(`/search/movie?query=${encodeURIComponent(query)}`);
