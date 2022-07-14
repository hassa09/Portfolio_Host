import Navbar from './Components/Navbar/navbar';
import './App.scss';
import PortfolioSection from './Components/Portfolio/PortfolioSection/PortfolioSection';
import Contact from './Components/Contact/Contact';
import Introduction from './Components/Introduction/Introduction'
import About from './Components/About/about'
import Socialicons from './Components/social-icons/socialicons';
// import NewNavbar from './Components/NewNavbar/NewNavbar';

function App() {
  return (
    <div className="App">
      {/* <NewNavbar /> */}
      <Navbar />
      <Socialicons />
      <Introduction />
      
      <About />
      <PortfolioSection />
      <Contact />
      
    </div>
  );
}

export default App;
