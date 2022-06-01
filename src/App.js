import { GlobalStyle } from './styles/global/GlobalStyle';
import Header from './components/Header';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
