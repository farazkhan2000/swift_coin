import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About /> 
        <HowToBuy />
      </main>
      <Footer /> 
    </>
  )
}

export default App;
