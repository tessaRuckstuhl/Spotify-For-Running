import { Button } from '@mui/material';
import React, { useState } from 'react';

function LoginBtn() {
  const authorize = async () => {
    try {
      window.location.href = 'http://localhost:5000/auth/login';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button mode="dark" color="primary" variant="contained" onClick={authorize}>
      Login to Spotify
    </Button>
  );
}
export default LoginBtn;
