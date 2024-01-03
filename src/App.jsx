import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="container">
      <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
