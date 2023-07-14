import express from "express";
import { getPlaylist, playSong, getSong } from "./PlaylistModel.js";
const app = express();

app.get("/playlist", (req, res) => {
    const playlist = getPlaylist();
    const sortPlaylist = playlist.sort((a, b) => b.played - a.played); // sorted by most played
    res.json(sortPlaylist);
});

app.get("/play/:id", (req, res) => {
    const song = getSong(req.params.id);
    if (song) {
        playSong(song);
        res.status(201).json({
            msg: "music played",
        });
    } else {
        res.status(404).json({
            msg: "music not found",
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        msg: "404 page not found",
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
