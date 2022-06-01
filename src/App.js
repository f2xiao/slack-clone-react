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
import { CircularProgress } from '@mui/material';

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoadingContainer>
        <AppLoadingContent>
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt='Slack' />
          <CircularProgress />
        </AppLoadingContent>
      </AppLoadingContainer>
    )
  }
  return (
    <div className="App" theme="dark">
      {!user ? <Login /> : (<>
              <Header user={user} />
              <AppBody>
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </AppBody>
            </>)
        }
    </div>
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

const AppLoadingContainer = styled(AppBody)`
  justify-content: center;
`
const AppLoadingContent = styled(AppBody)`
  flex-direction: column;
  justify-content: center;
  align-items: center;;

  > img {
  width: 8em;
  margin-bottom: 4em;
}
`