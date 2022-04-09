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
  const [usersPlaylists, setUsersPlaylists] = useState([]);
  const [usersPlaylistsIds, setUsersPlaylistsIds] = useState([]);
  const [userId, setUserId] = useState('');

  const { accessToken } = useToken();

  const [form, setForm] = useState({
    playlistName: '',
    selectedPlaylistsIds: [],
    bpm: [120,140],
  });

  const handleFormChange = (event) => {
    const updatedForm = { ...form };
    console.log('handle form change: ', event.target.name, event.target.value);
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
      setUsersPlaylists(playlists.map((p) => p.name));
      setUsersPlaylistsIds(playlists.map((p) => p.id));
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
        name={'selectedPlaylistsIds'}
        value={form.selectedPlaylistsIds}
        onChange={handleFormChange}
        usersPlaylists={usersPlaylists}
        usersPlaylistsIds={usersPlaylistsIds}
      />
      <h1 className="text-white">{JSON.stringify(form)}</h1>
      <CreateBtn userId={userId} form={form} />
    </div>
  );
}

export default CreatePlaylistForm;
