import React from "react";
// import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"; // Import Routes instead of Switch
import Crime from "./components/crime";
import Incident from "./components/incident";
import Analytics from "./components/analytics";
import Login from "./login";
import Accident from "./components/accident";
import Flash from "./components/flash";
import Map from "./components/map";
import Operations from "./components/operations";
import Report from "./report";
import ProtectedRoute from "./components/protectedRoute";
import Experience from "./components/experience";
import Allincidents from "./components/allincidents";

function App() {
  return (
    <Router basename="/app">
      <div className="App">
        <Routes>
          <Route
            path="allincidents"
            element={
              <ProtectedRoute>
                <Allincidents />
              </ProtectedRoute>
            }
          />
          <Route
            path="crime"
            element={
              <ProtectedRoute>
                <Crime />
              </ProtectedRoute>
            }
          />
          <Route
            path="incident"
            element={
              <ProtectedRoute>
                <Incident />
              </ProtectedRoute>
            }
          />
          <Route
            path="accident"
            element={
              <ProtectedRoute>
                <Accident />
              </ProtectedRoute>
            }
          />
          <Route
            path="analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="operations"
            element={
              <ProtectedRoute>
                <Operations />
              </ProtectedRoute>
            }
          />
          <Route
            path="report"
            element={
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            }
          />
          <Route
            path="flash"
            element={
              <ProtectedRoute>
                <Flash />
              </ProtectedRoute>
            }
          />
          <Route
            path="map"
            element={
              <ProtectedRoute>
                <Map />
              </ProtectedRoute>
            }
          />
          <Route
            path="experience"
            element={
              <ProtectedRoute>
                <Experience />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
