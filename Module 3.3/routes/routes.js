const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.post("/post", (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year,
    });

    try {
        const movieSave = movie.save();
        res.status(200).json(movieSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedMovieData = req.body;
        const options = { new: true };

        const result = await Movie.findByIdAndUpdate(
            id,
            updatedMovieData,
            options
        );

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedMovieData = await Movie.findByIdAndDelete(id);
        res.send(`Movie with ${deletedMovieData.title} has been deleted...`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
