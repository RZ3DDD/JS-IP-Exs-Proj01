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

const maxFilmNameLength = 50,
    minFilmsClassicViewer = 3,
    maxFilmsClassicViewer = 7;

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "0");
if (numberOfFilms === 0 || isNaN(numberOfFilms) || numberOfFilms === undefined) {
    alert(`Ваш ответ: ${numberOfFilms} \n Вы не можете участвовать в оценке фильмов!`);
} else {
    if (numberOfFilms < minFilmsClassicViewer) alert("Просмотрено довольно мало фильмов.");
    else if (numberOfFilms <= maxFilmsClassicViewer) alert("Вы классический зритель.");
    else alert("Вы киноман!");

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    let nextFilm = personalMovieDB.count,
        film = "",
        score = "";
    while (nextFilm) {
        film = getNonEmptyAnswer('Название следующего из последних просмотренных фильмов?', maxFilmNameLength);
        score = getNonEmptyAnswer('На сколько оцените его?', 3);
        personalMovieDB.movies[film] = score;
        nextFilm--;
    }

    writeYourGenres(personalMovieDB.genres);

    showMyDB(personalMovieDB);
}

function showMyDB(objMyDB) {
    if (!objMyDB.privat) console.log(objMyDB);
    return;
}

function writeYourGenres(genres) {
    for (let i = 0; i < 3; i++) {
        genres[i] = getNonEmptyAnswer(`Ваш любимый жанр на ${i+1} месте?`, 24);
    }
    return;
}

function getNonEmptyAnswer(question, maxAnswerLength) {
    let answer = "";
    do {
        answer = prompt(question, '');
        if (typeof answer === "string") answer = normalizationOfSpaces(answer);
    } while (!answer || answer.length > maxAnswerLength);
    return answer;
}

function normalizationOfSpaces(str) {
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