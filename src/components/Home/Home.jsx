import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import MovieListing from "../../components/MovieListing/MovieListing"
import {fetchAsyncMovies, fetchAsyncShows } from "../../features/movieSlice"
import "./Home.scss"

const Home = () => {
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)
  const dispatch = useDispatch();
  useEffect(()=> {
     dispatch(fetchAsyncMovies())
     dispatch(fetchAsyncShows())
  }, [dispatch])

  return (
    <div>
      {
        loading && <div>Loading......</div>
      }
      {
        error && <div> {error}</div>
      }
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home