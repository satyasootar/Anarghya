import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import Competitions from './components/Competitions';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Competitions />
        <Venue />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
export default App;