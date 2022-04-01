import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

function SelectMultiplePlaylists(props) {
  const { playlists } = props;
  const [selectedPlaylists, setSelectedPlaylists] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setSelectedPlaylists(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%', margin:0 }}>
        <InputLabel id="select-playlists-checkbox-label">Playlists</InputLabel>
        <Select
          labelId="select-playlists-checkbox-label"
          id="select-playlists-checkbox"
          multiple
          value={selectedPlaylists}
          onChange={handleChange}
          input={<OutlinedInput label="Playlists" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {playlists.map((playlist) => (
            <MenuItem key={playlist} value={playlist}>
              <Checkbox checked={selectedPlaylists.indexOf(playlist) > -1} />
              <ListItemText primary={playlist} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectMultiplePlaylists;
