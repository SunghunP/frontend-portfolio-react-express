import './styles.sass';
// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  const URL = "https://backend-portfolio-sunghunp.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<Projects URL={URL}/> } />
        <Route path="/about/" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
