import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Crime from "./components/crime";
import Incident from "./components/incident";
import Analytics from "./components/analytics";
import Login from "./login";
import Accident from "./components/accident";
import Report from "./report";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {" "}
          <Route
            path="/Crime"
            element={
              <ProtectedRoute>
                <Crime />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Incident"
            element={
              <ProtectedRoute>
                <Incident />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Accident"
            element={
              <ProtectedRoute>
                <Accident />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Report"
            element={
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
