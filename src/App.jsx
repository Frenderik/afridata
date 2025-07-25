// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import './index.css'; // Tailwind CSS

// You might create a separate Footer component if it gets complex
const AppFooter = () => (
  <footer className="footer">
    © 2025 AfriData Commons — Powered by Open Access &{' '}
    <a href="https://jhubafrica.com" target="_blank" rel="noreferrer">JHUB Africa</a>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen text-gray-900">
        <Navbar />
        <main className="p-4"> {/* Ensure this main class has flex-grow if content is short */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AppFooter /> {/* Footer rendered here, outside the main content area but within the Router */}
      </div>
    </Router>
  );
}

export default App;