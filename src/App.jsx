import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage } from "./Components/HomePage/HomePage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <HomePage />}/>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
