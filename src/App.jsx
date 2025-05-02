//imported tools from the react-router-dom package
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import React components from my components
import Home from './components/Home';
import About from './components/about';
import Contact from './components/Contact';
import './App.css';



function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>Connect with me: 
          <a href="https://github.com/Jeremy-waweru10/HTML-intro.git" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
          <a href="https://www.linkedin.com/in/jeremy-waweru-26a885352" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </footer>
    </Router>
  );
}

export default App;
