import _ from 'lodash';

import gameStart from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const questionAndCorrectAnswer = () => {

  return [question, String(correctAnswer)];
};

export default () => {
  gameStart(description, questionAndCorrectAnswer);
};
