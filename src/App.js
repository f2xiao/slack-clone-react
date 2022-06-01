import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import styled from 'styled-components'

import Header from "./layout/Header.js"
import Sidebar from "./layout/Sidebar.js"
import Chat from './layout/Chat.js';
import Login from './layout/Login.js';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth); 
  return (
    <>
      {!user?<Login />:
        (<div className="App" theme="dark">
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </AppBody>
        </div>)
       }
    </>
  );
}
function Home() {
  return (
    <>
      <Chat />
    </>
  );
}
export default App;
const AppBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;