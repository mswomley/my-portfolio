import React from 'react';
import './pages/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"

export default function App () {
  return (
<BrowserRouter>
      <nav className="topnav">
        <Link className="topnav" to="/">Home</Link>
        <Link className="topnav" to="/projects">Projects</Link>
        <Link className="topnav" to="/about">About</Link>
      </nav>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
  </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);