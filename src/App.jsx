// This component has the routes to open each section.
//import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
//import Customers from "./components/Customers";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
//import ScrollToTop from "./components/ScrollToTop";
import { Element } from "react-scroll";
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
        <Element id="Contact">
          <Contact />
        </Element>
        <Footer />
    </div>
  );
}
export default App;
/*
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Customers' element={<Customers />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes> */