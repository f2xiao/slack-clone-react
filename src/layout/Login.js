import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {  signInWithPopup } from "firebase/auth";
import {  auth, provider } from "../firebase.js";


function Login() {
  const Signin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = provider.credentialFromError(error);
      // ...
    });
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt='Slack'/>
      <h1>Sign in to the CAT HQ</h1>
      <p>cathq.slack.com</p>
      <Button variant="outlined" color="primary" onClick={Signin}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login
const flexbox = styled.div`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;

`

const LoginContainer = styled(flexbox)`
  height: 100vh;
`

const LoginInnerContainer = styled(flexbox)`
> img {
  width: 8em;
  margin-bottom: 4em;
}
> Button {
  margin-top: 4em;
}
`

