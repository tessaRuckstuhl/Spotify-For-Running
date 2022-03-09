import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

function Login(props) {
  const [profile, setProfile] = useState({});

  const authorize = async () => {
    try {
      const res = await axios.get('http://localhost:5000/auth/login');
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <Button variant="outlined" onClick={authorize}>
      Login
    </Button>
  );
}
export default Login;
