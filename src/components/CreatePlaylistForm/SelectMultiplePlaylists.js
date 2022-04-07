import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

function SelectMultiplePlaylists(props) {
  const { availablePlaylists, name, value, onChange } = props;

  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%', margin: 0 }}>
        <InputLabel id="select-playlists-checkbox-label">Playlists</InputLabel>
        <Select
          labelId="select-playlists-checkbox-label"
          id="select-playlists-checkbox"
          multiple
          name={name}
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Playlists" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {availablePlaylists.map((playlist) => (
            <MenuItem key={playlist} value={playlist}>
              <Checkbox checked={value.indexOf(playlist) > -1} />
              <ListItemText primary={playlist} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectMultiplePlaylists;
