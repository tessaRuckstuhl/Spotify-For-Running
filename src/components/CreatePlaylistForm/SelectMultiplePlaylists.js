import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

function SelectMultiplePlaylists(props) {
  const {
    usersPlaylists,
    name,
    value,
    onChange,
  } = props;
  console.log(value, usersPlaylists)
  return (
    <>
      <div className="font-londrinaSolid font-light">
        ...and finally, select playlists to merge.
      </div>

      <FormControl sx={{ m: 1, width: '100%', margin: 0 }}>
        <InputLabel id="select-playlists-checkbox-label">
          Playlists
        </InputLabel>
        <Select
          labelId="select-playlists-checkbox-label"
          id="select-playlists-checkbox"
          multiple
          name={name}
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Playlists" />}
          renderValue={(selected) => {
            return selected.map(s => s.name).join(', ');
          }}
        >
          {usersPlaylists.map((p) => (
            <MenuItem key={p.id} value={p}>
              <Checkbox
                checked={value.indexOf(p) > -1}
              />
              <ListItemText primary={p.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectMultiplePlaylists;
