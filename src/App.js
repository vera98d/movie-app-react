import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="movie-app-react">
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
