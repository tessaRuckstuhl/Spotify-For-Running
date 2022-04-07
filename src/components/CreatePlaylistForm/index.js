import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BpmSlider from './BpmSlider';
import CreateBtn from './CreateBtn';
import InputName from './InputName';
import SelectMultiplePlaylists from './SelectMultiplePlaylists';
import UserService from '../../services/UserService';
import PlaylistService from '../../services/PlaylistService';
import { useToken } from '../../contexts/TokenContext';

function CreatePlaylistForm() {
  const [availablePlaylists, setAvailablePlaylists] = useState([]);
  const [userId, setUserId] = useState('');
  const { accessToken } = useToken();
  const [form, setForm] = useState({
    playlistName: '',
    selectedPlaylists: [],
    bpm: 160,
  });

  const handleFormChange = (event) => {
    const updatedForm = { ...form };
    updatedForm[event.target.name] = event.target.value;
    setForm(updatedForm);
  };

  useEffect(() => {
    fetchMe();
  }, [accessToken]);

  useEffect(() => {
    if (userId) {
      fetchPlaylists();
    }
  }, [userId]);

  const fetchMe = async () => {
    try {
      const user = await UserService.getCurrentUser(accessToken);
      setUserId(user.id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlaylists = async () => {
    try {
      const playlists = await PlaylistService.getPlaylists(accessToken, userId);
      setAvailablePlaylists(playlists.map((p) => p.name));
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
      <h1 className="text-white">{JSON.stringify(form)}</h1>
      <CreateBtn userId={userId} accessToken={accessToken} form={form} />
    </div>
  );
}

export default CreatePlaylistForm;
