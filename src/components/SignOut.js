import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'
import LogoutIcon from '@mui/icons-material/Logout';
function SignOut() {
  return (
    <div>
        <Button style={{color: 'white', background: 'blueviolet', position: 'fixed', top: '0'}} onClick={() => auth.signOut()}><LogoutIcon /> Sign Out</Button>
    </div>
  )
}

export default SignOut