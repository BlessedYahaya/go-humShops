import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Selam from "./Selam";
import Fatuma from "./Fatuma"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Selam />} />
          <Route path="/fatuma" element={<Fatuma />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;