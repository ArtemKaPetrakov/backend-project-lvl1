#!/usr/bin/env node

import gameStart from '../src/index.js';

const rule = `Find the greatest common divisor of given numbers.`;

const gameData = () => {


    const randomNumber1 = Math.ceil(Math.random()* 50);
    const randomNumber2 = Math.ceil(Math.random()* 50);
    let min = randomNumber1 < randomNumber2 ? randomNumber1 : randomNumber2;
    let correctAnswer;

    for (let i = min; i > 0; i -= 1) {
        if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
            correctAnswer = i;
            break;
        }
    }

    const question = `${randomNumber1} ${randomNumber2}`;

    return [question, String(correctAnswer)];

};

gameStart(rule, gameData);