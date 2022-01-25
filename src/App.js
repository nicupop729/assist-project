import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => (
  <div className="App">
    <div className="container">
      <Navigation />
      <main className="hero">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  </div>
);

export default App;
