/* jshint esversion: 6 */
let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "0");
console.log(numberOfFilms);
numberOfFilms = 11;
console.log(numberOfFilms);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false,
};

console.log(personalMovieDB);