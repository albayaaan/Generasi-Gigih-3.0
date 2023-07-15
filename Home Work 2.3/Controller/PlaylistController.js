import playlistService from "../Service/PlaylistService.js";

// get all song
const index = (req, res) => {
    const songs = playlistService.getAllSongs();
    res.send(songs);
};

// get a song
const detail = (req, res) => {
    const { id } = req.params;
    const song = playlistService.getSong(id);

    if (!song) {
        res.status(404).json({
            message: "data not found",
        });
    } else {
        res.json(song);
    }
};

// add a song
const create = (req, res) => {
    const songData = req.body;
    if (Object.keys(songData).length === 0) {
        res.status(422).json({
            message: "input must be field",
        });
    } else {
        playlistService.addSong(songData);
        res.status(201).json({
            message: "success add data",
        });
    }
};

// play a song
const play = (req, res) => {
    const { id } = req.params;
    const song = playlistService.playSong(id);

    if (!song) {
        res.status(404).json({
            message: "data not found",
        });
    } else {
        res.status(201).json({
            message: "song played",
        });
    }
};

export default { index, detail, create, play };
