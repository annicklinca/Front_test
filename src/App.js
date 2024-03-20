import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Crime from './crime';
import Incident from './incident';
import Analytics from './analytics';
import Login from './login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/Crime" element={<Crime />} />
          <Route path="/Incident" element={<Incident />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
