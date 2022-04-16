import { TextField } from '@mui/material';
import React from 'react';
function InputName(props) {
  const { value, onChange, name } = props;
  return (
    <>
      <div className='font-londrinaSolid font-light'>First, choose a playlist&apos;s name...</div>
      <TextField
        id="playlist-name-input"
        label="Name"
        variant="outlined"
        color="primary"
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputName;
