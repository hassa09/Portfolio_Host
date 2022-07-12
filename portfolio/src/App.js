import Navbar from './Components/Navbar/navbar';
import About from './Components/About/about'
import './App.css';
import PortfolioSection from './Components/Portfolio/PortfolioSection/PortfolioSection';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro'

function App() {
  return (
    <div className="App">
      <Navbar />

      <About />
      <Intro />
      <PortfolioSection />
      <Contact />
    </div>
  );
}

export default App;
