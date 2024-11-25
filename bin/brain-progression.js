#!/usr/bin/env node

import gameStart from '../src/index.js';

const rule = `What number is missing in the progression?`;

const gameData = () => {

    const randomFirstNumber = Math.ceil(Math.random()* 100);
    const randomPositionInArray = Math.ceil(Math.random()* 9);
    const randomProgressorNumber = Math.ceil(Math.random()* 10);
    let correctAnswer;

    let arrayProgression = [];
    arrayProgression.push(randomFirstNumber);

    for (let i = 1; i < 9; i += 1) {
    arrayProgression.push(randomFirstNumber + randomProgressorNumber * i);
    }
    correctAnswer = arrayProgression[randomPositionInArray];
    arrayProgression[randomPositionInArray] = '..'

    const question = `${arrayProgression.join(' ')}`;

    return [question, String(correctAnswer)]

};


gameStart(rule, gameData);