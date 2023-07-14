const playlist = [
    {
        id: 1,
        title: "Kill Bill",
        artist: ["SZA", "Doja Cat"],
        url: "https://open.spotify.com/track/0CrcwVLUe8wzLUIXgjXVZJ?si=326e2c46cc1344a5",
        played: 0,
    },
    {
        id: 2,
        title: "Say You Won't Let Go",
        artist: ["James Arthur"],
        url: "https://open.spotify.com/track/1Pw5C4N6Fn5E4mGCxmbbVa?si=75ee9f9fbfa14614",
        played: 0,
    },
];

export const getPlaylist = () => {
    return playlist;
};
// getPlaylist();

export const getSong = (songId) => {
    const song = playlist.find((s) => s.id === Number(songId));
    if (song === undefined) {
        return false;
    }
    return song;
};

export const playSong = (song) => {
    // const song = playlist.find((s) => s.id === Number(songId));
    song.played += 1;
    return;
};
// playSong(1);
