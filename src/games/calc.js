import gameStart from '../index.js';

import _ from 'lodash';

const description = 'What is the result of the expression?.';

const questionAndCorrectAnswer = () => {

  const randomNumber1 = _.random(0, 10);
  const randomNumber2 = _.random(0, 10);
  const operators = ['+', '-', '*'];
  const randomIndex = _.random(0, 2);
  const operator = operators[randomIndex];


  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;

    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;

    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;

    default:
      null;
  }
  return [question, String(correctAnswer)];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
};