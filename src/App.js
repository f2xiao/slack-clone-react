import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import styled from 'styled-components'

import Header from "./layout/Header.js"
import Sidebar from "./layout/Sidebar.js"

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
      <Sidebar />
    </>
  );
}
export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;