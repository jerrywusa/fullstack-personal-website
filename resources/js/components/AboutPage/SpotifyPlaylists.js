import React from "react";
import SpotifyPlaylist from "./SpotifyPlaylist";

function SpotifyPlaylists({ playlists }) {
  return (
    <>
      {playlists.map(({ src }) => (
        <SpotifyPlaylist src={src} />
      ))}
    </>
  );
}

export default SpotifyPlaylists;
