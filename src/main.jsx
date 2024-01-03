import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import {Provider} from "react-redux"
import Home from './components/Home/Home.jsx'
import MovieDetails from './components/MovieDetails/MovieDetails.jsx'
import './index.css'
import App from './App.jsx'
import { store } from './features/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movie/:movieTitle",
        element: <MovieDetails />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
     </Provider >
  // </React.StrictMode>,
)
