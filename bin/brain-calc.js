#!/usr/bin/env node

import readlineSync from 'readline-sync';

const calcGame = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    const rounds = 3;
    const operators = ['+', '-', '*'];

    console.log(`What is the result of the expression?`);


    for (let i = 1; i <= rounds; i += 1) {

        const randomNumber1 = Math.ceil(Math.random()* 11)
        const randomNumber2 = Math.ceil(Math.random()* 11)
        const randomOperatorNumber = Math.floor(Math.random() * 3);
        const randomOperator = operators[randomOperatorNumber];

        console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);

        const userAnswer = parseInt(readlineSync.question('Your answer: ').trim().toLocaleLowerCase());

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

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        }
        if (i === rounds) {
            console.log(`Congratulations, ${name}!`)
        }
    }
};

calcGame();