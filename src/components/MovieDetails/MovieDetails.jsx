import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncMovieDetails  } from "../../features/movieSlice";

const MovieDetails = () => {
  const { Title } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.MovieDetails);
  console.log("Data  of each movie card is: ", movieDetails);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(Title));
  }, [dispatch, Title]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
            <h1>{movieDetails.Title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
  