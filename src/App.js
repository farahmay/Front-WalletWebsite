import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/navbar';
import Login from './components/login'; // Assurez-vous que le chemin est correct
import Wallet from './components/wallet';
const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/" element={<HowItWorks />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
     
    </div>
  </Router>
  );
};

export default App;