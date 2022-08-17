import gameStart from '../index.js';

import _ from 'lodash';

const description = 'Find the greatest common divisor of given numbers.';

const questionAndCorrectAnswer = () => {

  const randomNumber1 = _.random(1, 10);
  const randomNumber2 = _.random(1, 10);
  const minForRandomNumbers = _.min([randomNumber1, randomNumber2]);

  const question = `${randomNumber1} ${randomNumber2}`;

  let correctAnswer;
  const dividers = [];

  for (let i = 0; i <= minForRandomNumbers; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      dividers.push(i);
    }
    correctAnswer = _.max(dividers);
  }
  return [question, String(correctAnswer)];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
};
