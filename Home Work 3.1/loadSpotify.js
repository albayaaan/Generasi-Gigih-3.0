db = connect("mongodb://localhost:27017/spotify");

db.songs.insertMany([
    {
        title: "Shape of You",
        artists: ["Ed Sheeran"],
        album: "÷ (Divide)",
    },
    {
        title: "Someone Like You",
        artists: ["Adele"],
        album: "21",
    },
    {
        title: "Despacito",
        artists: ["Luis Fonsi", "Daddy Yankee"],
        album: "Vida",
    },
    {
        title: "Love Story",
        artists: ["Taylor Swift"],
        album: "Fearless",
    },
    {
        title: "Havana",
        artists: ["Camila Cabello"],
        album: "Camila",
    },
    {
        title: "Thinking Out Loud",
        artists: ["Ed Sheeran"],
        album: "x",
    },
    {
        title: "Bad Guy",
        artists: ["Billie Eilish"],
        album: "When We All Fall Asleep, Where Do We Go?",
    },
    {
        title: "Rolling in the Deep",
        artists: ["Adele"],
        album: "21",
    },
    {
        title: "Uptown Funk",
        artists: ["Mark Ronson", "Bruno Mars"],
        album: "Uptown Special",
    },
    {
        title: "Blinding Lights",
        artists: ["The Weeknd"],
        album: "After Hours",
    },
]);

db.artists.insertMany([
    {
        name: "Ed Sheeran",
        date_of_birth: "17 February 1991",
        genre: ["Pop", "R&B"],
    },
    {
        name: "Adele",
        date_of_birth: "5 May 1988",
        genre: ["Pop", "Soul"],
    },
    {
        name: "Luis Fonsi",
        date_of_birth: "15 April 1978",
        genre: ["Latin Pop", "Reggaeton"],
    },
    {
        name: "Taylor Swift",
        date_of_birth: "13 December 1989",
        genre: ["Pop", "Country"],
    },
    {
        name: "Camila Cabello",
        date_of_birth: "3 March 1997",
        genre: ["Pop", "R&B"],
    },
    {
        name: "Billie Eilish",
        date_of_birth: "18 December 2001",
        genre: ["Pop", "Alternative"],
    },
    {
        name: "Mark Ronson",
        date_of_birth: "4 September 1975",
        genre: ["Pop", "Funk"],
    },
    {
        name: "Bruno Mars",
        date_of_birth: "8 October 1985",
        genre: ["Pop", "R&B"],
    },
    {
        name: "The Weeknd",
        date_of_birth: "16 February 1990",
        genre: ["R&B", "Pop"],
    },
    {
        name: "Daddy Yankee",
        date_of_birth: "3 February 1977",
        genre: ["Reggaeton", "Latin"],
    },
]);

db.popular_songs.insertMany([
    {
        title: "Shape of You",
        play_count: 1500,
        period: "July 2023",
    },
    {
        title: "Someone Like You",
        play_count: 1200,
        period: "July 2023",
    },
    {
        title: "Despacito",
        play_count: 1800,
        period: "July 2023",
    },
    {
        title: "Love Story",
        play_count: 900,
        period: "July 2023",
    },
    {
        title: "Havana",
        play_count: 1350,
        period: "July 2023",
    },
    {
        title: "Thinking Out Loud",
        play_count: 800,
        period: "July 2023",
    },
    {
        title: "Bad Guy",
        play_count: 1700,
        period: "July 2023",
    },
    {
        title: "Rolling in the Deep",
        play_count: 1000,
        period: "July 2023",
    },
    {
        title: "Uptown Funk",
        play_count: 1400,
        period: "July 2023",
    },
    {
        title: "Blinding Lights",
        play_count: 1600,
        period: "July 2023",
    },
]);
