import express from "express";
import playlistRoute from "./routes/PlaylistRoute.js";
const app = express();

app.use("/", playlistRoute);

// page not found
app.use((req, res) => {
    res.status(404).json({
        msg: "page not found",
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
