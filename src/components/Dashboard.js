import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { getHashParams } from "../utils/url-tools";

function Dashboard(props) {
    const [profile, setProfile] = useState({})

    const fetchPlaylists = async () => {

        if (window.location.hash) {
            const params = getHashParams();
            var options = {
                headers: { 'Authorization': 'Bearer ' + params.access_token },
                json: true
            };
            const res = await axios.get('https://api.spotify.com/v1/me/playlists', options)
            console.log(res.data)
            setProfile(res.data)
        }
    }



    return (
        <>      <h1>Dashboard</h1>
            <Button variant='outlined' onClick={fetchPlaylists}>Me</Button>
            <div>{JSON.stringify(profile)}</div>
        </>
    )
}
export default Dashboard;