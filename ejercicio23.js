const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const shortLen = [];
const mediumLen = [];
const longLen = [];

const ordMovies = [shortLen, mediumLen, longLen];

for (let movie of movies) {
  let len = movie.durationInMinutes;
  if (len <= 100) {
    shortLen.push(movie);
  } else if (len > 100 && len <= 200) {
    mediumLen.push(movie);
  } else if (len > 200) {
    longLen.push(movie);
  }
}

for (let elem of ordMovies) {
  console.log(elem);
}
