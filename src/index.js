import React from 'react';
import './pages/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Projects from "./pages/Projects"

export default function App () {
  return (
<BrowserRouter>
      <nav className="topnav">
        <Link className="topnav" to="/">Home</Link>
        <Link className="topnav" to="/projects">Projects</Link>
      </nav>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
  </Routes>
  <footer className="contact">
      <hr></hr>
      CONTACT<br></br>
      maggieswomley18@gmail.com<br></br>
      860-921-8824<br></br>
      <a href="https://www.linkedin.com/in/maggie-s-5427491a2/"><button className="button" >LinkedIn</button></a><br></br>
      <a href="https://github.com/mswomley"><button className="button" >Github</button></a>
      </footer>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);