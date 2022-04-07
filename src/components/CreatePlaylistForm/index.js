import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BpmSlider from './BpmSlider';
import CreateBtn from './CreateBtn';
import InputName from './InputName';
import SelectMultiplePlaylists from './SelectMultiplePlaylists';

function CreatePlaylistForm(props) {
  const { accessToken } = props;
  const [availablePlaylists, setAvailablePlaylists] = useState([]);
  const [userId, setUserId] = useState('');
  const [form, setForm] = useState({
    playlistName: '',
    selectedPlaylists: [],
    bpm: 160,
  });

  const handleFormChange = (event) => {
    // Clone form because we need to modify it
    console.log('Form changing: ', event);

    const updatedForm = { ...form };
    updatedForm[event.target.name] = event.target.value;
    console.log('Form changed: ', updatedForm);
    // Update state
    setForm(updatedForm);
  };

  useEffect(() => {
    console.log('AccessToken is ', accessToken);
    if (accessToken) {
      fetchMe();
    }
  }, [accessToken]);

  useEffect(() => {
    console.log('UserId is ', userId);
    if (userId) {
      fetchPlaylists();
    }
  }, [userId]);

  const fetchMe = async () => {
    let options = {
      headers: { Authorization: 'Bearer ' + accessToken },
      json: true,
    };
    try {
      const res = await axios.get('https://api.spotify.com/v1/me', options);
      setUserId(res.data.id);
      console.log(res.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlaylists = async () => {
    var options = {
      headers: { Authorization: 'Bearer ' + accessToken },
      json: true,
    };
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        options
      );
      console.log(res.data.items.map((item) => item.name));
      setAvailablePlaylists(res.data.items.map((item) => item.name));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col space-y-5 ">
      <InputName
        value={form.playlistName}
        name={'playlistName'}
        onChange={handleFormChange}
      />
      <BpmSlider value={form.bpm} name={'bpm'} onChange={handleFormChange} />
      <SelectMultiplePlaylists
        name={'selectedPlaylists'}
        value={form.selectedPlaylists}
        onChange={handleFormChange}
        availablePlaylists={availablePlaylists}
      />
      <h1>{JSON.stringify(form)}</h1>
      <CreateBtn userId={userId} accessToken={accessToken} form={form} />
    </div>
  );
}

export default CreatePlaylistForm;
