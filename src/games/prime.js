/* eslint-disable no-unreachable-loop */
import _ from 'lodash';

import gameStart from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const questionAndCorrectAnswer = () => {
  const question = _.random(0, 20);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
};
