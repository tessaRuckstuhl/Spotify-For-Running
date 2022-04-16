import { HelpOutlined } from '@mui/icons-material';
import { Slider, Tooltip } from '@mui/material';
import React from 'react';
function BpmSlider(props) {
  const { value, onChange, name } = props;

  return (
    <>
      {' '}
      <div className="flex justify-between">
        <div className="font-londrinaSolid font-light">
          ...next, choose a range for BPM...
        </div>
        <Tooltip
          arrow
          placement="right"
          title="The right tempo range for your running playlist will depend on a number of things, from the length of your stride to the type of exercise. The 120 to 140 BPM range is a good area for regular runs or going for longer distances where you need to pace yourself. If you’re pushing yourself with some short, fast runs, then you might want to go for something between 147 to 160 BPM."
        >
          <HelpOutlined />
        </Tooltip>
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
