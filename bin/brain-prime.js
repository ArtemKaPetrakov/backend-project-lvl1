#!/usr/bin/env node

import gameStart from '../src/index.js';

const rule = `Answer "yes" if given number is prime. Otherwise answer "no".`;

const gameData = () => {

    const isPrime = (number) => {
        if (number === 0 || number === 1) {
            return false;
        };

        for (let i = 2; i < number; i += 1) {
            if (number % i === 0 ) {
                return false;
            }
            else {
                return true;
            }
        }
    }

    const randomNumber1 = Math.ceil(Math.random()* 100);

    const question = `${randomNumber1}`;
    const correctAnswer = isPrime(randomNumber1) ? 'yes' : 'no';

    return [question, String(correctAnswer)];
    };


gameStart(rule, gameData);