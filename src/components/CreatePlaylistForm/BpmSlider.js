import { Slider } from '@mui/material';
import React from 'react';
function BpmSlider(props) {
  const { value, onChange, name } = props;

  return (
    <>
      {' '}
      <div className="font-londrinaSolid font-light">
        ...next, choose a range for bpm...
      </div>
      <Slider
        size="small"
        min={0}
        max={200}
        value={value}
        name={name}
        onChange={onChange}
        valueLabelDisplay="auto"
      />
    </>
  );
}
export default BpmSlider;
