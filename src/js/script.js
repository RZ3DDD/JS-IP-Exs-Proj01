/* jshint esversion: 6 */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "0");
console.log(numberOfFilms);
if (numberOfFilms === 0 || isNaN(numberOfFilms) || numberOfFilms === undefined) {
    alert(`Ваш ответ: ${numberOfFilms} \n Вы не можете участвовать в оценке фильмов!`);
} else {
    if (numberOfFilms < 10) alert("Просмотрено довольно мало фильмов.");
    else if (numberOfFilms <= 30) alert("Вы классический зритель.");
    else alert("Вы киноман!");

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privet: false,
    };

    let nextFilm = personalMovieDB.count,
        film = false,
        score = false;
    while (nextFilm) {
        do {
            film = prompt('Один из последних просмотренных фильмов?', '');
            if (typeof film === "string") film = film.trim();
        } while (!film || film.length > 50);
        do {
            score = prompt('На сколько оцените его?', '');
            if (typeof score === "string") score = score.trim();
        } while (!score);
        personalMovieDB.movies[film] = score;
        nextFilm--;
    }

    console.log(personalMovieDB);
}