import { GlobalStyle } from './styles/global/GlobalStyle';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetail from './pages/MovieDetail';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:slug" element={<MovieDetail />} />
        <Route path="/search/movie" element={<SearchPage />} />
      </Routes>
      <Footer creator="Tran Thien Khanh" year="2022" />
    </Router>
  );
}

export default App;
