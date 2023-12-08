// This component has the routes to open each section.
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {  
  return (
    <div className="App-container">
        <NavBar />
        <Element id="Home">
          <Home />
        </Element>
        <Element id="About">
          <About />
        </Element>
        <Element id="Services">
          <Services />
        </Element>
        <Element id="Customers">
          <Customers />
        </Element>
        <Element id="Contact">
          <Contact />
        </Element>
        <Footer />
    </div>
  );
}
export default App;
