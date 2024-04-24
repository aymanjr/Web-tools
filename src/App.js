import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import TextToPdf from './Components/Tools/Texttopdf';
import Navbar from './Components/Navbar'; // Import your navbar component


function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-to-pdf" element={<TextToPdf />} />
        {/* ... */}
      </Routes>
    </Router>
  );
}



export default App;
