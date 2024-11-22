#!/usr/bin/env node

import readlineSync from 'readline-sync';

const evenGame = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    const rounds = 3;

    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);


    for (let i = 1; i <= rounds; i += 1) {

        const randomNumber = Math.ceil(Math.random()* 100)

        console.log(`Question: ${randomNumber}`);

        const userAnswer = readlineSync.question('Your answer: ').trim().toLocaleLowerCase();

        let correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

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

evenGame();