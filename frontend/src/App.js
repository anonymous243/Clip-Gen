import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClipGenLanding from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClipGenLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;