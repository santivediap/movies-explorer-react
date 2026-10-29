import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const year = movie.release_date ? movie.release_date.split("-")[0] : "—";

  const onFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster_path ? (
          <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        ) : (
          <div className="no-poster">Sin póster</div>
        )}
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          >
            {favorite ? "♥" : "♡"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
