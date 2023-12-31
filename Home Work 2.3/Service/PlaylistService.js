import playlistRepository from "../Repository/Playlist.js";

// get all song
const getAllSongs = () => {
    const songs = playlistRepository.all();
    const sortedSongs = songs.sort((a, b) => b.played - a.played); // sorted by most played
    return sortedSongs;
};

// get a song
const getSong = (songId) => {
    const song = playlistRepository.find(songId);
    return song ?? false;
};

// add a song
const addSong = (songData) => {
    playlistRepository.add(songData);
    return;
};

// play a song
const playSong = (songId) => {
    const song = playlistRepository.find(songId);
    if (song) {
        song.played += 1;
        return true;
    } else {
        return false;
    }
};

export default { getAllSongs, getSong, addSong, playSong };
