import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Selam from "./Selam";
import Fatuma from "./Fatuma"
import Daniella from "./Daniella"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Selam />} />
          <Route path="/fatuma" element={<Fatuma />} />
          <Route path="/daniella" element={<Daniella />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;