/* jshint esversion: 6 */

/* Задание на урок: 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
// Код возьмите из предыдущего домашнего задания

let personalMovieDB = startOfMovieRating();

if (typeof personalMovieDB == "object") {
    personalMovieDB.writeMovieScores();
    personalMovieDB.writeGenres();

    personalMovieDB.genres.forEach((item, index) => {
        console.log(`Любимый жанр №${index+1} это - ${item}`);
    });

    personalMovieDB.showMovieDB();
} else alert("Error!");


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

        showMovieDB() {
            if (!this.privat) console.log(this);
            return;
        },

        toggleVisibleMyDB() {
            this.privat = !this.privat;
        },

        writeMovieScores() {
            const maxFilmNameLength = 50;
            let nextFilm = this.count,
                film = "",
                score = "";

            while (nextFilm) {
                film = getNonEmptyAnswer('Название следующего из последних просмотренных фильмов?', maxFilmNameLength);
                score = getNumberAnswer('На сколько оцените его?', 3);
                this.movies[film] = score;
                nextFilm--;
            }
            return;
        },

        writeGenres() {
            for (let i = 0; i < 3; i++) {
                this.genres[i] = getNonEmptyAnswer(`Ваш любимый жанр на ${i+1} месте?`, 24);
            }
            return;
        }

    };

    let numberOfFilms = getNumberAnswer("Сколько фильмов Вы уже посмотрели?", 0);
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



function getNonEmptyAnswer(question, maxAnswerLength) {
    'use strict';
    let answer = "";
    do {
        answer = prompt(question, '');
        if (typeof answer === "string") answer = normalizationOfSpaces(answer);
    } while (!answer || answer.length > maxAnswerLength);
    return answer;
}

function getNumberAnswer(question, defaultNumber) {
    'use strict';
    let answer = 0;
    do {
        answer = +prompt(question, defaultNumber);
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