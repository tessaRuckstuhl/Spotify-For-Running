import React, { useEffect, useState } from 'react';
import BpmSlider from './BpmSlider';
import ConfigureBtn from './ConfigureBtn';
import InputName from './InputName';
import SelectMultiplePlaylists from './SelectMultiplePlaylists';
import PlaylistService from '../../services/PlaylistService';
import { useUserToken } from '../../contexts/UserTokenContext';

function CreatePlaylistForm() {
  const [usersPlaylists, setUsersPlaylists] = useState([]);
  const [usersPlaylistsIds, setUsersPlaylistsIds] =
    useState([]);

  const { accessToken, userId } = useUserToken();

  const [form, setForm] = useState({
    playlistName: '',
    selectedPlaylistsIds: [],
    bpm: [120, 140],
  });

  const handleFormChange = (event) => {
    const updatedForm = { ...form };
    updatedForm[event.target.name] = event.target.value;
    setForm(updatedForm);
  };

  useEffect(() => {
    if (userId) {
      fetchPlaylists();
    }
  }, [userId]);

  const fetchPlaylists = async () => {
    try {
      const playlists = await PlaylistService.getPlaylists(
        accessToken,
        userId
      );
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
      <BpmSlider
        value={form.bpm}
        name={'bpm'}
        onChange={handleFormChange}
      />
      <SelectMultiplePlaylists
        name={'selectedPlaylistsIds'}
        value={form.selectedPlaylistsIds}
        onChange={handleFormChange}
        usersPlaylists={usersPlaylists}
        usersPlaylistsIds={usersPlaylistsIds}
      />
      <ConfigureBtn userId={userId} form={form} />
    </div>
  );
}

export default CreatePlaylistForm;
