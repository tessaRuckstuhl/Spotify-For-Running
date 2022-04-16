import { Button } from '@mui/material';
import React from 'react';
import { loginUrl } from '../../config';

function LoginBtn() {
  const authorize = async () => {
    try {
      // window.location.href = 'http://localhost:5000/auth/login';
      window.location.href = loginUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      mode="dark"
      color="primary"
      variant="contained"
      onClick={authorize}
    >
      Login to Spotify
    </Button>
  );
}
export default LoginBtn;
