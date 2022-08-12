#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let count = 0;

do {
  const randomNumber = Math.ceil((Math.random()) * 100); // случайное число
  console.log(`Question: ${randomNumber}`); // вопрос с числом
  const userAnswer = readlineSync.question(''); // ответ пользователя
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'; // верный ответ

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    count += 1;
  }
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    break;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
} while (count < 3);
