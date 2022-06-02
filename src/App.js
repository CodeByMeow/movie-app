import { GlobalStyle } from './styles/global/GlobalStyle';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={null} />
      </Routes>
      <Footer creator="Tran Thien Khanh" year="2022" />
    </Router>
  );
}

export default App;
