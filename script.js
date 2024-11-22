const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army (Remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    displayName: "Front Row (Remix)",
    artist: "Metric/Jacinto Design",
  },
];

//Check if playing
let isPlaying = false;

//Play
function playSong() {
  isPlaying = true;
  music.play();
}

function pauseSong() {
  isPlaying = false;
  music.pause();
}

//Play or pause

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

//update DOM

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

//
let songIndex = 0;

//prev song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

//next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  if (songIndex > 0) console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

loadSong(songs[songIndex]);

//Event Listenesr

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
