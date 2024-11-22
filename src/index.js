#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default (rule, gameData) => {

    const gameRounds = 3;

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    console.log(rule);

    for (let i = 1; i <= gameRounds; i += 1) {

        const [question, correctAnswer] = gameData();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ').trim().toLocaleLowerCase();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        }

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;

        } if (i === gameRounds) {
            console.log(`Congratulations, ${name}!`)
        }
    };
};
