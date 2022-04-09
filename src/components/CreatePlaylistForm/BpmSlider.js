import { Slider, Stack } from '@mui/material';
import React from 'react';
function BpmSlider(props) {
  const { value, onChange, name } = props;

  return (
      <Slider
        min={0}
        max={200}
        value={value}
        name={name}
        onChange={onChange}
        valueLabelDisplay="auto"
      />
  );
}
export default BpmSlider;
