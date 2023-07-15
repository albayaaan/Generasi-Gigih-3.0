import express from "express";
import playlistController from "../Controller/PlaylistController.js";
const route = express.Router();

// get all songs
route.get("/playlist", playlistController.index);

// add a song
route.post("/playlist", express.json(), playlistController.create);

// get a song
route.get("/playlist/:id", playlistController.detail);

// play a song
route.get("/playlist/:id/play", playlistController.play);

export default route;
