let songList = [
    { title: "Someone Like You", artists: [{ name: "Adele" }], duration: 250 },
    { title: "Bohemian Rhapsody", artists: [{ name: "Queen" }], duration: 355 },
    { title: "Shape of You", artists: [{ name: "Ed Sheeran" }], duration: 235 },
    { title: "Hotel California", artists: [{ name: "Eagles" }], duration: 380 },
    { title: "Imagine", artists: [{ name: "John Lennon" }], duration: 180 },
];

const fetchSongs = (songs, key) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (key === "bwua") {
                resolve(songs);
            } else {
                rejected("wrong key");
            }
        }, 2000);
    });
};

// console.log("List lagu: ", fetchSongs(songs, "bwua"));

// promise format
fetchSongs(songList, "bwua")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// async await format
async function displaySong() {
    try {
        const listSong = await fetchSongs(songList, "x");
        console.log(listSong);
    } catch (error) {
        console.log(error);
    }
}

displaySong();
