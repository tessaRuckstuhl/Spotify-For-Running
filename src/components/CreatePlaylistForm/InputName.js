import { TextField } from '@mui/material';
import React from 'react';
function InputName(props) {
  const { value, onChange, name } = props;
  return (
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
  );
}

export default InputName;
