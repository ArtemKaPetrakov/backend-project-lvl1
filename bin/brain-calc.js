#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?.');

let count = 0;

do {
  const randomNumber1 = Math.ceil((Math.random()) * 100); // случайное число
  const randomNumber2 = Math.ceil((Math.random()) * 100);
  console.log(`Question: ${randomNumber1} + ${randomNumber2}`); // вопрос с числом
  const userAnswer = Number(readlineSync.question('')); // ответ пользователя
  const correctAnswer = Number(randomNumber1) + Number(randomNumber2); // верный ответ

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