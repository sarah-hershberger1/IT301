// Here is the JS that you said I could ask AI to generate to help with my DB!

const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        genre: "Pop"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        genre: "Rock"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        genre: "Jazz"
    },
    {
        title: "Song 4",
        artist: "Artist 4",
        genre: "Pop"
    },
    {
        title: "Song 5",
        artist: "Artist 5",
        genre: "Electronic"
    }
];

const form = document.querySelector("#song-search");
const searchInput = document.querySelector("#search-input");
const results = document.querySelector("#song-results");
const resultCount = document.querySelector("#result-count");

function searchSongs() {
    const search = searchInput.value.trim().toLowerCase();

    results.replaceChildren();

    let count = 0;

    for (const song of songs) {
        const songText =
            `${song.title} ${song.artist} ${song.genre}`.toLowerCase();

        if (songText.includes(search)) {
            const row = document.createElement("tr");

            for (const value of [song.title, song.artist, song.genre]) {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            }

            const detailsCell = document.createElement("td");
            const link = document.createElement("a");

            link.href = "MoreSongInfo.html";
            link.textContent = "More details";
            link.className = "details-link";

            detailsCell.appendChild(link);
            row.appendChild(detailsCell);
            results.appendChild(row);

            count++;
        }
    }

    resultCount.textContent =
        count === 0 ? "No songs found." : `${count} songs found.`;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    searchSongs();
});

searchInput.addEventListener("input", searchSongs);

searchSongs();
