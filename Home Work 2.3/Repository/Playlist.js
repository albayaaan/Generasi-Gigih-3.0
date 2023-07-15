import playlist from "./json/playlist.json" assert { type: "json" };

// get all song
const all = () => {
    return playlist;
};
// getPlaylist();

// get a song
const find = (songId) => {
    const song = playlist.find((s) => s.id === Number(songId));
    return song;
};
// getSong(3);

// add a song
const add = (songData) => {
    let song = {
        id: playlist.length + 1,
        ...songData,
        played: 0,
    };
    playlist.push(song);
    return;
};
// addSong({
//     title: "Say You Won't Let Go",
//     artist: ["James Arthur"],
//     url: "https://open.spotify.com/track/1Pw5C4N6Fn5E4mGCxmbbVa?si=75ee9f9fbfa14614",
//     played: 0,
// });

export default { all, find, add };
