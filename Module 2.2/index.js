const express = require("express");
const app = express();

const playlist = [
    {
        id: 1,
        title: "Kill Bill",
        artist: ["SZA", "Doja Cat"],
        url: "https://open.spotify.com/track/0CrcwVLUe8wzLUIXgjXVZJ?si=326e2c46cc1344a5",
    },
    {
        id: 2,
        title: "Say You Won't Let Go",
        artist: ["James Arthur"],
        url: "https://open.spotify.com/track/1Pw5C4N6Fn5E4mGCxmbbVa?si=75ee9f9fbfa14614",
    },
];

app.get("/", (req, res) => {
    res.send("<h1>Spotify App</h1>");
});

app.get("/playlist", (req, res) => {
    res.send(playlist);
});

app.post("/playlist", express.json(), (req, res) => {
    playlist.push(req.body);
    res.send(playlist);
});

app.get("/playlist/:id", (req, res) => {
    let id = req.params.id;
    let song = playlist.filter((song) => song.id == id);
    if (song.length === 0) {
        res.status(404).json({
            msg: "data not found",
        });
    }
    res.json(song);
});

app.get("/playlist/:id/play", (req, res) => {
    let id = req.params.id;
    let song = playlist.filter((song) => song.id == id);
    if (song.length === 0) {
        res.status(404).json({
            msg: "data not found",
        });
    }
    res.redirect(song[0].url);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
