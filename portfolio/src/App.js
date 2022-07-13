import Navbar from './Components/Navbar/navbar';
import './App.css';
import PortfolioSection from './Components/Portfolio/PortfolioSection/PortfolioSection';
import Contact from './Components/Contact/Contact';
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/About'
// import NewNavbar from './Components/NewNavbar/NewNavbar';

function App() {
  return (
    <div className="App">
      {/* <NewNavbar /> */}
      <Navbar />
      <Introduction />
      <About />
      <PortfolioSection />
      <Contact />
    </div>
  );
}

export default App;
