import {useSelector} from "react-redux"
import MovieCard from "../../components/MovieCard/MovieCard"
import PageNotFound from '../../components/PageNotFound/PageNotFound'
// import { getAllMovies , getAllShows} from "../../features/movieSlice"
import "./MovieListing.scss"
import Loading from "../Loading/Loading"

const MovieListing = () => {
  const movies = useSelector((state) => state.movies);
  const shows =  useSelector((state) => state.shows);


  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.movies.Response === "True" ? (
            movies.movies.Search.map((movie, index) => 
              <MovieCard key={index} data={movie}  />
            )
          ) : (
            <div className="movies-error">
              
              <Loading />
            </div>
          )}
        </div>
      </div>

      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {movies.shows.Response === "True" ? (
            movies.shows.Search.map((movie, index) => 
              <MovieCard  key={index} data={movie} />
            )
          ) : (
            <div className="movies-error">
              {/* <h3>{movies.shows.Error}</h3> */}
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default MovieListing;