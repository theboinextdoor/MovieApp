import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../common/apis/movieApi"
import { APIKey } from "../common/apis/MovieapiKey"


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',

    async () => {
        try {
            const movieName = "Harry"
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieName}&type=movie`)
            console.log("Response of the movie", response)
            return response.data || [];
        } catch (error) {
            throw new Error;
        }
    })

    
    export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    
        async () => {
            try {
                const showsText = "vampire"
                const response = await movieApi.get(`?apiKey=${APIKey}&s=${showsText}&type=series`)
                console.log("Response of the show",response)
                return response.data || [];
            } catch (error) {
                throw new Error;
            }
        })

    export const fetchAsyncMovieDetails = createAsyncThunk('movies/fetchAsyncMovieDetails',
    
        async (title, {rejectWithValue}) => {
            try {
                const response = await movieApi.get(`?apiKey=${APIKey}&t=${title}&plot=full`)
                console.log("Response of the Movie Details: ",response)
                return response.data || [];
            } catch (error) {
               console.log("Error fetching the data : ", error)
                return rejectWithValue("Failed to fetch the movie details");
            }
        })


const initialState = {
    movies: {},
    shows: {},
    MovieDetails: {},
    loading: false,
    error: null,
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, (state) => {
            console.log("Status Pending")
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                console.log("Status Fullfilled")
                state.loading = false;
                state.movies = action.payload
            })
            .addCase(fetchAsyncMovies.rejected, (state, action) => {
                console.log("Status Failed")
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data"
            })
            .addCase(fetchAsyncShows.fulfilled, (state, action) => {
                console.log("Status Fullfilled")
                state.loading = false;
                state.shows = action.payload
            })
            .addCase(fetchAsyncMovieDetails.fulfilled, (state, action) => {
                console.log("Status Fullfilled of MovieDetails")
                state.loading = false;
                state.MovieDetails=  action.payload
            })
            .addCase(fetchAsyncMovieDetails.rejected, (state, action) => {
                console.log("Status Failed")
                state.loading = false;
                state.error = action.error.message
            })
    }

})


export const { addMovies } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
// export const getAllShows = (state) => state.movies.shows;
// export const getAllDetails = (state) => state.movies.movies.selectedMovieOrShow;

export default movieSlice.reducer