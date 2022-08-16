#!/usr/bin/env node

import readlineSync from 'readline-sync';

import _ from 'lodash';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?.');

let count = 0;

do {
  const randomNumber1 = Math.ceil((Math.random()) * 100); // случайное число 1
  const randomNumber2 = Math.ceil((Math.random()) * 100); // случайное число 1

  const operators = [ '+' , '_' , '*' ];
  const randomIndex = _.random(0, 2);
  const operator = operators[randomIndex];

  console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`); // вопрос с суммой 

  const userAnswer = Number(readlineSync.question('')); // ответ пользователя

  let correctAnswer;

  switch (operator) {
    case '+': 
    correctAnswer = Number(randomNumber1) + Number(randomNumber2);
    break;

    case '-': 
    correctAnswer = Number(randomNumber1) - Number(randomNumber2);
    break;

    case '*': 
    correctAnswer = Number(randomNumber1) * Number(randomNumber2);
    break;

    default;

    }
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

