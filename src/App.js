import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import Header from "./layout/Header.js"

function App() {
  return (
    <div className="App" theme="dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
export default App;
