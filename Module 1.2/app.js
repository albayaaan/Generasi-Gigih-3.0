let songs = [
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
        }, 3000);
    });
};

fetchSongs(songs, "bwua")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
