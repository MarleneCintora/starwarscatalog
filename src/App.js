import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Movies from "./components/Movies/Movies.js";
import Character from "./components/Characters/Character.js";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies/:episodeId" element={<Movies/>} />
              <Route path="/character/" element={<Character/>} />
            </Routes>
            </BrowserRouter>

  );
}
