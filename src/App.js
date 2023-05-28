import Cards from "./components/Cards";
import Development from "./components/Development";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Development />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}
export default App;
