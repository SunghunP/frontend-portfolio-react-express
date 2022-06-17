import './styles.sass';
import styled from 'styled-components';
// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import portfolioBg from './images/portfolioBg.jpg';

const StyledDiv = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
`

function App() {
  const URL = "https://backend-portfolio-sunghunp.herokuapp.com/";

  return (
    <StyledDiv bg={portfolioBg} className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<Projects URL={URL}/> } />
        <Route path="/about/" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </StyledDiv>
  );
};

export default App;
