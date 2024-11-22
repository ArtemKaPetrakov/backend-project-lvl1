#!/usr/bin/env node

import gameStart from '../src/index.js';

const rule = `Answer "yes" if the number is even, otherwise answer "no".`;

const gameData = () => {

    const randomNumber = Math.ceil(Math.random() * 100);
    let question = randomNumber;
    let correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

    return [question, correctAnswer];
};

gameStart(rule, gameData);