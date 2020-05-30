/* jshint esversion: 6 */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = startOfMovieRating();

if (typeof personalMovieDB == "object") {
    writeYourMovieScores(personalMovieDB);
    writeYourGenres(personalMovieDB.genres);

    showMyDB(personalMovieDB);
} else alert("Error!");

function showMyDB(objMyDB) {
    'use strict';
    if (!objMyDB.privat) console.log(objMyDB);
    return;
}

function startOfMovieRating() {
    'use strict';
    const
        minFilmsClassicViewer = 3,
        maxFilmsClassicViewer = 7;

    let personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    let numberOfFilms = getNumberAnswer("Сколько фильмов Вы уже посмотрели?");
    if (numberOfFilms === 0) {
        alert(`Ваш ответ: ${numberOfFilms} \n Вы не можете участвовать в оценке фильмов!`);
        return false;
    } else {
        if (numberOfFilms < minFilmsClassicViewer) alert("Просмотрено довольно мало фильмов.");
        else if (numberOfFilms <= maxFilmsClassicViewer) alert("Вы классический зритель.");
        else alert("Вы киноман!");
        personalMovieDB.count = numberOfFilms;
        return personalMovieDB;
    }
}

function writeYourMovieScores(personalMovieDB) {
    'use strict';
    const maxFilmNameLength = 50;
    let nextFilm = personalMovieDB.count,
        film = "",
        score = "";

    while (nextFilm) {
        film = getNonEmptyAnswer('Название следующего из последних просмотренных фильмов?', maxFilmNameLength);
        score = getNonEmptyAnswer('На сколько оцените его?', 3);
        personalMovieDB.movies[film] = score;
        nextFilm--;
    }
    return;
}

function writeYourGenres(genres) {
    'use strict';
    for (let i = 0; i < 3; i++) {
        genres[i] = getNonEmptyAnswer(`Ваш любимый жанр на ${i+1} месте?`, 24);
    }
    return;
}

function getNonEmptyAnswer(question, maxAnswerLength) {
    'use strict';
    let answer = "";
    do {
        answer = prompt(question, '');
        if (typeof answer === "string") answer = normalizationOfSpaces(answer);
    } while (!answer || answer.length > maxAnswerLength);
    return answer;
}

function getNumberAnswer(question) {
    'use strict';
    let answer = 0;
    do {
        answer = +prompt(question, '');
    } while (answer == "" || answer == null || isNaN(answer));
    return answer;
}

function normalizationOfSpaces(str) {
    'use strict';
    let sourceStr = str.trim(),
        destStr = "",
        nextChar = "",
        simpleSpaceSaved = false;

    if (sourceStr.length) {
        for (let i = 0; i < sourceStr.length; i++) {
            nextChar = sourceStr[i];
            if (nextChar === " ") {
                if (simpleSpaceSaved) continue;
                else simpleSpaceSaved = true;
            } else if (simpleSpaceSaved) simpleSpaceSaved = false;
            destStr = destStr + nextChar;
        }
        return destStr;
    } else return sourceStr;
}