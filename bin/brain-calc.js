#!/usr/bin/env node

import gameStart from '../src/index.js';

const rule = `What is the result of the expression?`;

const gameData = () => {

    const operators = ['+', '-', '*'];

    const randomNumber1 = Math.ceil(Math.random()* 11)
    const randomNumber2 = Math.ceil(Math.random()* 11)
    const randomOperatorNumber = Math.floor(Math.random() * 3);
    const randomOperator = operators[randomOperatorNumber];

    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    let correctAnswer;

    switch (randomOperator) {
        case ('+'):
            correctAnswer = randomNumber1 + randomNumber2;
            break;
        case ('-'):
            correctAnswer = randomNumber1 - randomNumber2;
            break;
        case ('*'):
            correctAnswer = randomNumber1 * randomNumber2;
            break;
        default:
            console.log('Ошибка!')
    };

    return [question, String(correctAnswer)];

};

gameStart(rule, gameData);