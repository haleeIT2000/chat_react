import React from 'react'
import {Button} from '@mui/material'
import firebase from 'firebase/compat/app';
import {auth} from './../firebase.js'
function SignIn() {
    const signInWithGG = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div className='signIn'>
        <Button onClick = {signInWithGG}>Sign In With Google</Button>
    </div>
  )
}

export default SignIn