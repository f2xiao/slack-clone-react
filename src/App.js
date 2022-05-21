import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import styled from 'styled-components'

import Header from "./layout/Header.js"

function App() {
  return (
    <div className="App" theme="dark">
      <Header />
      <AppBody>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </AppBody>
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
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;