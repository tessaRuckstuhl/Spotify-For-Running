import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

function LoginBtn() {
  const [profile, setProfile] = useState({});

  const authorize = async () => {
    try {
      const res = await axios.get('http://localhost:5000/auth/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" onClick={authorize}>
      Login to Spotify
    </Button>
  );
}
export default LoginBtn;
